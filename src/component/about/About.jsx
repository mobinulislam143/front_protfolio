import React, { useEffect } from "react"
import { FaBatteryHalf } from "react-icons/fa6";
import { CiBatteryFull } from "react-icons/ci";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import ApiStore from "../apirequest/ApiRequest";



const About = ({ getServiceList }) => {



  console.log(getServiceList)





  return (


    <div className="relative h-[600px] ">

      <div className="card bg-white shadow-lg w-[500px] rounded-md h-full overflow-y-auto overflow-x-hidden">


        <div className="">
          <div className="p-5">
            <h1 className=" text-xl text-black font-bold">About <span className="text-green-800">me</span></h1>
          </div>
          <hr />
          <div className="p-4 text-black">

            <p className="text-lg text-gray-700"> <b>Hello! I’m Mahi.</b> dfdfd</p>
            <div className="flex flex-wrap pt-5 text-[18px]">
              <p className="w-1/2">Age........20</p>
              <p className="w-1/2">Residence ........Cox'sBazar</p>
              <p className="w-1/2">Freelance ........Available</p>
              <p className="w-1/2">Address ..........Dhaka</p>

            </div>
          </div>
          <div className="p-5">
            <h1 className="text-black text-xl font-bold">Services</h1>
          </div>
          <hr />


          <div className="flex flex-wrap pt-5 items-center p-5">
            {!getServiceList || getServiceList.length === 0 ? (
              <div className="w-1/2 border-r border-b px-1 pb-2">
                <div className="rounded-full w-20 h-20 bg-gray-200 animate-pulse flex justify-center items-center"></div>
                <h2 className="text-xs text-gray-300 py-3 animate-pulse">Loading...</h2>
                <p className="text-gray-300 text-sm animate-pulse">Please wait while the service is loading...</p>
              </div>
            ) : (
              getServiceList.map((item, index) => (
                <div key={index} className="w-1/2 border-r border-b px-1 pb-2">
                  <div className="rounded-full w-20 h-20 bg-green-100 p-6 flex justify-center items-center">
                    <img
                      src={item['img1']}
                      className="object-contain"
                      alt={`${item['serviceName']} Logo`}
                    />
                  </div>
                  <h2 className="text-xs text-black py-3">{item['serviceName']}</h2>
                  <p className="text-gray-700 text-sm">{item['serviceDesc']}</p>
                </div>
              ))
            )}



            {/* <div className="w-1/2 border-b px-1 pb-2">
              <div className="rounded-full w-20 h-20  bg-green-100 p-6 flex justify-center items-center">
                <img src="https://seeklogo.com/images/H/html5-with-wordmark-black-white-logo-A6222B77EC-seeklogo.com.png" className="object-contain " alt="" />
              </div>
              <h2 className="text-xs text-black py-3">Html</h2>
              <p className="text-gray-700 text-sm">Modern and mobile-ready website that will help you reach all of your marketing.</p>
            </div>
            <div className="w-1/2 border-b px-1 pb-2">
              <div className="rounded-full w-20 h-20  bg-green-100 p-6 flex justify-center items-center">
                <img src="https://seeklogo.com/images/H/html5-with-wordmark-black-white-logo-A6222B77EC-seeklogo.com.png" className="object-contain " alt="" />
              </div>
              <h2 className="text-xs text-black py-3">Html</h2>
              <p className="text-gray-700 text-sm">Modern and mobile-ready website that will help you reach all of your marketing.</p>
            </div>
            <div className="w-1/2 border-b px-1 pb-2">
              <div className="rounded-full w-20 h-20  bg-green-100 p-6 flex justify-center items-center">
                <img src="https://seeklogo.com/images/H/html5-with-wordmark-black-white-logo-A6222B77EC-seeklogo.com.png" className="object-contain " alt="" />
              </div>
              <h2 className="text-xs text-black py-3">Html</h2>
              <p className="text-gray-700 text-sm">Modern and mobile-ready website that will help you reach all of your marketing.</p>
            </div> */}
          </div>


          <div className="p-5">
            <h1 className="text-black text-xl font-bold">Pricing</h1>
          </div>
          <hr />

          <div className="flex flex-wrap pt-5 items-center p-5">
            <div className="border-t border-r p-2 w-1/2 text-center">
              <FaBatteryHalf className="mx-auto text-4xl text-green-700" />
              <p className="text-2xl text-black font-semibold mb-2">Basic</p>
              <span className="text-black ">

                <h1 className="text-3xl"><sup>$</sup>20 hour</h1>

              </span>
              <div className="col text-gray-700 flex flex-col gap-y-3 py-3">
                <p>WordPress Development</p>
                <p>Installation Services</p>
                <p>SEO Audit</p>
                <p><del>Hosting & Domain</del></p>
                <p><del>WordPress Security</del></p>
              </div>

            </div>
            <div className="border-t border-r p-2 w-1/2 text-center">
              <CiBatteryFull className="mx-auto text-4xl text-green-700" />
              <p className="text-2xl text-black font-semibold mb-2">Premimum</p>
              <span className="text-black ">

                <h1 className="text-3xl"><sup>$</sup>30 hour</h1>

              </span>
              <div className="col text-gray-700 flex flex-col gap-y-3 py-3">
                <p>WorPress Development</p>
                <p>Installation Services</p>
                <p>SEO Audit</p>
                <p>Hosting & Domain<div className="badge badge-outline ml-1">new</div></p>
                <p>WordPress Security<div className="badge badge-outline ml-1">new</div></p>
              </div>
            </div>
          </div>

          <div className="p-5">
            <h1 className="text-black text-xl font-bold">Testomonial</h1>
          </div>
          <hr />
          <div>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper my-10 hover:cursor-pointer">

              <SwiperSlide className="mb-8 ">
                <div className="col flex flex-col text-center justify-center gap-4">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk4lMHSOx5sKf66aKTu4ujYt3-udE0btdmfA&s" className="max-w-20 mx-auto h-auto border-2 rounded-full" />
                  <p className="text-center text-gray-600">"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia aspernatur nihil nesciunt perferendis,"</p>
                </div></SwiperSlide>
              <SwiperSlide className="mb-8 ">
                <div className="col flex flex-col text-center justify-center gap-4">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk4lMHSOx5sKf66aKTu4ujYt3-udE0btdmfA&s" className="max-w-20 mx-auto h-auto border-2 rounded-full" />
                  <p className="text-center text-gray-600">"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia aspernatur nihil nesciunt perferendis,"</p>
                </div></SwiperSlide>
              <SwiperSlide className="mb-8 ">
                <div className="col flex flex-col text-center justify-center gap-4">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk4lMHSOx5sKf66aKTu4ujYt3-udE0btdmfA&s" className="max-w-20 mx-auto h-auto border-2 rounded-full" />
                  <p className="text-center text-gray-600">"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia aspernatur nihil nesciunt perferendis,"</p>
                </div></SwiperSlide>
              <SwiperSlide className="mb-8 ">
                <div className="col flex flex-col text-center justify-center gap-4">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk4lMHSOx5sKf66aKTu4ujYt3-udE0btdmfA&s" className="max-w-20 mx-auto h-auto border-2 rounded-full" />
                  <p className="text-center text-gray-600">"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia aspernatur nihil nesciunt perferendis,"</p>
                </div></SwiperSlide>

            </Swiper>

          </div>

          <div className="p-5">
            <h1 className="text-black text-xl font-bold">Fun Fact</h1>
          </div>
          <hr />
          <div>
            jkdflkk
          </div>


        </div>
      </div>
    </div>


  )
};

export default About
