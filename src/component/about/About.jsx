import React, { useEffect } from "react"
import { GiEagleEmblem } from "react-icons/gi";
import { IoMdBonfire } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import ApiStore from "../apirequest/ApiRequest";
import ServiceSkeleton from "../allskeleton/ServiceSkeleton";



const About = ({ getServiceList, getIntroDetails }) => {



  console.log("my description is: ", getIntroDetails)





  return (


    <div className="h-[600px] card bg-bg_primary shadow-lg rounded-md  overflow-y-auto overflow-x-hidden">


      <div className="">
        <div className="p-5">
          <h1 className=" text-xl text-text_color_light font-bold">About <span className="text-bg_secondary">me</span></h1>
        </div>
        <hr />
        <div className="p-4 text-white">

          <p className="text-lg text-text_color_dark"> <b>Hello! I’m Mahi.</b> {getIntroDetails.length > 0 ? (
            <>
              {getIntroDetails[0]['desc']}
            </>
          ) : (

            <div>
              {Array.from({ length: 8 }).map((_, index) => (
                <div key={index} className="skeleton bg-text_color_dark h-4 w-full mb-2"></div>
              ))}
            </div>

          )}</p>
          <div className="flex text-text_color_light flex-wrap pt-5 text-[18px]">
            <p className="w-1/2">Age........20</p>
            <p className="w-1/2">Home Town ........ Eidgah, Cox'sBazar</p>
            <p className="w-1/2">Freelance ........Available</p>
            <p className="w-1/2">Present Address ..........Dhanmondi, Dhaka</p>

          </div>
        </div>
        <div className="p-5">
          <h1 className="text-text_color_light text-xl font-bold">Services</h1>
        </div>
        <hr />


        <div className="flex flex-wrap pt-5 items-start p-5">
          {!getServiceList || getServiceList.length === 0 ? (
            <ServiceSkeleton />
          ) : (
            getServiceList.map((item, index) => (
              <div key={index} data-aos="fade-right" className="w-1/2 border-r  pl-2 pb-6">
                <div className="rounded-full w-20 h-20 border-2 border-bg_secondary  p-6 flex justify-center items-center">
                  <img
                    src={item['img1']}
                    className="object-contain w-full"
                    alt={`${item['serviceName']} Logo`}
                  />
                </div>
                <h2 className="text-lg font-semibold text-text_color_light py-3">{item['serviceName']}</h2>
                <p className="text-text_color_dark text-[17px]">{item['serviceDesc']}</p>
              </div>
            ))
          )}


        </div>


        <div className="p-5">
          <h1 className="text-text_color_light text-xl font-bold">Pricing</h1>
        </div>
        <hr />

        <div data-aos="fade-up" className="flex flex-wrap pt-5 items-center p-5">
          <div className="border-r p-2 w-1/2 text-center">
            <div className="border-2 mx-auto w-16 h-16 border-bg_secondary p-3 rounded-full">
              <IoMdBonfire className="mx-auto text-4xl text-bg_secondary" />
            </div>
            <p className="text-2xl text-text_color_light font-semibold mb-2">Basic</p>
            <span className="text-text_color_light">
              <h1 className="text-3xl"><sup>$</sup>20 hour</h1>
            </span>
            <div className="col text-text_color_dark flex flex-col gap-y-3 py-3">
              <p>RESTful API Development</p>
              <p>Frontend Design & Development</p>
              <p>Backend Integration</p>
              <p><del>Database Optimization</del></p>
              <p><del>Full Stack Deployment</del></p>
            </div>
          </div>
          <div className="border-r p-2 w-1/2 text-center">
            <div className="border-2 mx-auto w-16 h-16 border-bg_secondary p-3 rounded-full">
              <GiEagleEmblem className="mx-auto text-4xl text-bg_secondary" />
            </div>
            <p className="text-2xl text-text_color_light font-semibold mb-2">Premium</p>
            <span className="text-text_color_light">
              <h1 className="text-3xl"><sup>$</sup>30 hour</h1>
            </span>
            <div className="col text-text_color_dark flex flex-col gap-y-3 py-3">
              <p>Full Stack API Development</p>
              <p>Frontend & Backend Integration</p>
              <p>Database Design & Optimization</p>
              <p>Full Stack Deployment<div className="badge badge-outline ml-1">new</div></p>
              <p>Maintenance & Support<div className="badge badge-outline ml-1">new</div></p>
            </div>
          </div>

        </div>

        <div className="p-5">
          <h1 className="text-text_color_light text-xl font-bold">Fun Facts</h1>
        </div>
        <hr className="mb-5" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4  rounded shadow flex flex-col  items-center">
            <div className="text-3xl mr-3">
              🌍
            </div>
            <div>
              <h2 className="font-bold text-lg text-text_color_light">1. Earth’s Rotation</h2>
              <p className="text-sm text-text_color_dark">Earth's rotation is gradually slowing down—by about 1.4 milliseconds per century.</p>
            </div>
          </div>
          <div className="p-4  rounded shadow flex flex-col  items-center">
            <div className="text-3xl mr-3">
              🐦
            </div>
            <div>
              <h2 className="font-bold text-lg text-text_color_light">2. Birds and Gravity</h2>
              <p className="text-sm text-text_color_dark">Some birds can sleep while flying. Swifts can fly for months without landing.</p>
            </div>
          </div>
          <div className="p-4  rounded shadow flex flex-col  items-center">
            <div className="text-3xl mr-3">
              🌕
            </div>
            <div>
              <h2 className="font-bold text-lg text-text_color_light">3. Moon’s Distance</h2>
              <p className="text-sm text-text_color_dark">The Moon is slowly drifting away from Earth—by about 3.8 cm each year.</p>
            </div>
          </div>
          <div className="p-4  rounded shadow flex flex-col  items-center">
            <div className="text-3xl mr-3">
              🍫
            </div>
            <div>
              <h2 className="font-bold text-lg text-text_color_light">4. Chocolate’s History</h2>
              <p className="text-sm text-text_color_dark">Chocolate was once used as currency in ancient Mayan civilizations.</p>
            </div>
          </div>
        </div>



      </div>
    </div>


  )
};

export default About
