import React from "react";
import { HiMiniBriefcase } from "react-icons/hi2";
import { AiFillBank } from "react-icons/ai";
import './resume.css'



const Resume = () => {

  return (
    <div className="relative h-[600px]">
      <div className="card bg-white shadow-lg rounded-md h-full overflow-y-auto overflow-x-hidden">


        <div className="p-5">
          <h1 className="text-green-800 text-xl font-bold">Resume</h1>
        </div>
        <hr />


        <div className="flex flex-wrap pt-5 items-start p-5">


          <div className="w-1/2 border-r px-1 pb-2 ">
            <p className="text-xl flex items-center gap-2 text-black pb-3"><AiFillBank className="text-green-800" /> Education</p><hr />
            <div className="col border-b py-4">
              <div className="badge badge-lg mt-2 bg-white text-black">2012-2020</div>

              <h2 className="text-black py-3 text-lg font-semibold">Eidgah Adarsha Shiksha Niketon</h2>
              <p className="text-gray-400 text-sm ">Eidgah, Cox'sBazar, Bangladesh</p>
              <p className="text-gray-800 text-sm">Secondary School Certificate (SSC)</p>
            </div>
            <div className="col border-b py-4">
              <div className="badge badge-lg mt-2 bg-white text-black">2012-2020</div>

              <h2 className="text-black py-3 text-lg font-semibold">Eidgah Adarsha Shiksha Niketon</h2>
              <p className="text-gray-400 text-sm ">Eidgah, Cox'sBazar, Bangladesh</p>
              <p className="text-gray-800 text-sm">Secondary School Certificate (SSC)</p>
            </div>
          </div>


          <div className="w-1/2 border-r border-b px-1 pb-2 ">
            <div className="col">
              <p className="text-xl flex items-center gap-2 text-black pb-3"><HiMiniBriefcase className="text-green-800" /> Experience</p><hr />
              <div className="badge badge-lg mt-2 bg-white text-black">2012-2020</div>

              <h2 className="text-xs text-black py-3 uppercase ">EIDGAH ADARSHA SHIKSHA NIKETON</h2>
              <p className="text-gray-700 text-sm">Modern and mobile-ready website that will help you reach all of your marketing.</p>
            </div>

          </div>





        </div>

        <div className="p-5">
          <h1 className="text-black text-xl font-bold">My <span>Skills</span></h1>
        </div>
        <hr />
        <div className="my-4">
          <div className="flex flex-wrap pt-5 items-start p-5">


            <div className="w-1/2 border-r px-1 pb-2 ">
              <p className="text-xl flex items-center gap-2 text-black pb-3"><img className="w-8" src="https://i.postimg.cc/R0P5xby6/front-end-1.png" alt="" />  Frontend</p><hr />

              <div className="flex items-start border-b py-4">
                <div className="text-center mx-auto border-r p-2">
                  <div className="radial-progress text-[#1b8c73]" style={{ "--value": 70 }} role="progressbar">
                    70%
                  </div>
                  <p className="text-lg text-black">Html, Css</p>
                </div>
                <div className="text-center mx-auto  p-2">
                  <div className="radial-progress text-[#1b8c73]" style={{ "--value": 70 }} role="progressbar">
                    70%
                  </div>
                  <p className="text-lg text-black">Html, Css</p>
                </div>
              </div>

            </div>
            <div className="w-1/2 border-r px-1 pb-2 ">
              <p className="text-xl flex items-center gap-2 text-black pb-3">
                <img src="https://i.postimg.cc/25rX6FhQ/backend-programmer.png" className="w-8" alt="" /> Backend
              </p>
              <hr />
              <div className="col border-b py-4">
                <span className="text-black">
                  Node.js
                  <progress className="progress w-full" value="70" max="100"></progress>
                </span>
                <span className="text-black">
                  Node.js
                  <progress className="progress w-full" value="70" max="100"></progress>
                </span>
                <span className="text-black">
                  Node.js
                  <progress className="progress w-full" value="70" max="100"></progress>
                </span>
                <span className="text-black">
                  Node.js
                  <progress className="progress w-full" value="70" max="100"></progress>
                </span>
              </div>
            </div>

          </div>
        </div>


        <div className="p-5">
          <h1 className="text-black text-xl font-bold">Quote</h1>
        </div>
        <hr />

        <div className=" py-4">
          <p className="text-center text-gray-600">"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia aspernatur nihil nesciunt perferendis,"</p>
        </div>

      </div>
    </div>
  );
};

export default Resume;
