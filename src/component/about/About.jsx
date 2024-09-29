import React from "react"
import { FaBatteryHalf } from "react-icons/fa6";
import { CiBatteryFull } from "react-icons/ci";



const About = () => {
  return (
    <div className="h-[600px] overflow-x-hidden overflow-y-auto">
      <div className="card bg-white w-[500px] shadow-lg rounded-md ">
        <div className="">
          <div className="p-5">
            <h1 className="text-black text-xl font-bold">About <span>me</span></h1>
          </div>
          <hr />
          <div className="p-4 text-black">

            <p className="text-lg text-gray-700"> <b>Hello! I’m Mahi.</b> Back-end & Frond-end developer from UK, London. I have rich experience in wordpress, also I am good at Magento. I love to talk with you about our unique.</p>
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
            <div className="w-1/2 border-r border-b px-1 pb-2">
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
            </div>
            <div className="w-1/2 border-b px-1 pb-2">
              <div className="rounded-full w-20 h-20  bg-green-100 p-6 flex justify-center items-center">
                <img src="https://seeklogo.com/images/H/html5-with-wordmark-black-white-logo-A6222B77EC-seeklogo.com.png" className="object-contain " alt="" />
              </div>
              <h2 className="text-xs text-black py-3">Html</h2>
              <p className="text-gray-700 text-sm">Modern and mobile-ready website that will help you reach all of your marketing.</p>
            </div>
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
              <div className="col">
                <p>kdf</p>
                <p>kdf</p>
                <p>kdf</p>
                <p>kdf</p>
              </div>
            </div>
            <div className="border-t border-r p-2 w-1/2 text-center">
              <CiBatteryFull className="mx-auto text-4xl text-green-700" />
              <p className="text-2xl text-black font-semibold mb-2">Premimum</p>
              <span className="text-black ">
                
                <h1 className="text-3xl"><sup>$</sup>30 hour</h1>
                
              </span>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
};

export default About
