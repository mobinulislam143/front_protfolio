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
          <h1 className="text-text_color_light text-xl font-bold">Testomonial</h1>
        </div>
        <hr />
        <div className="max-w-[400px] mx-auto" data-aos="fade-up">
          <Swiper pagination={true} modules={[Pagination]} className="mySwiper my-10 hover:cursor-pointer">

            <SwiperSlide className="mb-8">
              <div className="col flex flex-col text-center justify-center gap-4">
                <img src="https://res.cloudinary.com/dmpsrcunj/image/upload/v1728848361/christian-buehner-DItYlc26zVI-unsplash_oaqsqq.jpg" className="w-20 mx-auto h-20 border-2 rounded-full" alt="Client 1" />
                <p className="text-center text-text_color_dark">"Working with Mahi has been a game-changer for our project. His expertise in the MERN stack brought our vision to life, delivering a seamless and responsive application."</p>
              </div>
            </SwiperSlide>

            <SwiperSlide className="mb-8">
              <div className="col flex flex-col text-center justify-center gap-4">
                <img src="https://res.cloudinary.com/dmpsrcunj/image/upload/v1728848361/elizeu-dias-2EGNqazbAMk-unsplash_xarxcd.jpg" className="w-20 mx-auto h-20 border-2 rounded-full" alt="Client 2" />
                <p className="text-center text-text_color_dark">"Mahi’s skills in API development and front-end design helped us create a user-friendly and dynamic website. We are extremely satisfied with the outcome!"</p>
              </div>
            </SwiperSlide>

            <SwiperSlide className="mb-8">
              <div className="col flex flex-col text-center justify-center gap-4">
                <img src="https://res.cloudinary.com/dmpsrcunj/image/upload/v1728848358/dmitry-vechorko-E9PFbdhZmus-unsplash_laryqy.jpg" className="w-20 mx-auto h-20 border-2 rounded-full" alt="Client 3" />
                <p className="text-center text-text_color_dark">"From start to finish, Mahi was professional, communicative, and delivered beyond our expectations. His ability to handle both the front-end and back-end aspects made our development process smooth."</p>
              </div>
            </SwiperSlide>

            <SwiperSlide className="mb-8">
              <div className="col flex flex-col text-center justify-center gap-4">
                <img src="https://res.cloudinary.com/dmpsrcunj/image/upload/v1728848355/ana-nichita-BI91NrppE38-unsplash_ga3yfb.jpg" className="w-20  mx-auto h20o border-2 rounded-full" alt="Client 4" />
                <p className="text-center text-text_color_dark">"Mahi transformed our ideas into a fully functional web application. His attention to detail and deep understanding of the MERN stack made all the difference."</p>
              </div>
            </SwiperSlide>

          </Swiper>
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
              <h2 className="font-bold text-lg">1. Earth’s Rotation</h2>
              <p className="text-sm">Earth's rotation is gradually slowing down—by about 1.4 milliseconds per century.</p>
            </div>
          </div>
          <div className="p-4  rounded shadow flex flex-col  items-center">
            <div className="text-3xl mr-3">
              🐦
            </div>
            <div>
              <h2 className="font-bold text-lg">2. Birds and Gravity</h2>
              <p className="text-sm">Some birds can sleep while flying. Swifts can fly for months without landing.</p>
            </div>
          </div>
          <div className="p-4  rounded shadow flex flex-col  items-center">
            <div className="text-3xl mr-3">
              🌕
            </div>
            <div>
              <h2 className="font-bold text-lg">3. Moon’s Distance</h2>
              <p className="text-sm">The Moon is slowly drifting away from Earth—by about 3.8 cm each year.</p>
            </div>
          </div>
          <div className="p-4  rounded shadow flex flex-col  items-center">
            <div className="text-3xl mr-3">
              🍫
            </div>
            <div>
              <h2 className="font-bold text-lg">4. Chocolate’s History</h2>
              <p className="text-sm">Chocolate was once used as currency in ancient Mayan civilizations.</p>
            </div>
          </div>
        </div>



      </div>
    </div>


  )
};

export default About
