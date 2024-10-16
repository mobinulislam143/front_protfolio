import React, { useState, useEffect } from "react";
import { RxAvatar } from "react-icons/rx";
import { IoDocumentText } from "react-icons/io5";
import { FaPaintbrush } from "react-icons/fa6";
import { FaComments } from "react-icons/fa6";
import { BiSolidContact } from "react-icons/bi";
import About from "../about/About";
import Blogs from "../blogs/Blogs";
import Resume from "../resume/Resume";
import Works from "../works/Works";
import Contact from "../contact/Contact";
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom"
import { FaHackerrank } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import DownloadBtn from "../utility/DownloadBtn";
import ApiStore from "../apirequest/ApiRequest";
import './master.css'
import myCv from "../../assets/mobinul_islam_mahi_cv.pdf"


const MasterLayout = () => {
  const { getIntroDetails, getIntroRequest, getServiceList, getServiceRequest, getEducation, getEducationRequest, getExperience, getExperienceRequest, frontendSkills, getfrontendskillsRequest, backendSkills, getbackendskillsRequest, getPortfolioList, getPortfolioRequest, getBlogsList, getblogRequest,getGallery, getGalleryRequest } = ApiStore();

  // console.log(' my blog is: ', getBlogsList)
  useEffect(() => {
    (async () => {
      await getIntroRequest();
      await getServiceRequest();
      await getEducationRequest();
      await getExperienceRequest();
      await getfrontendskillsRequest()
      await getbackendskillsRequest()
      await getPortfolioRequest()
      await getblogRequest()
      await getGalleryRequest()
    })();
  }, []);

  const [selectedComponent, setSelectedComponent] = useState("about");
  const [isExiting, setIsExiting] = useState(false);
  const [isEntering, setIsEntering] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const onSubmit = (componentName) => {
    if (componentName !== selectedComponent) {
      setIsExiting(true);
      setIsEntering(false);
      setTimeout(() => {
        setSelectedComponent(componentName);
        setIsExiting(false);
        setIsEntering(true);
      }, 500);
    }
  };

  return (
    <>
    <div className="container mx-auto">

      <div className="grid lg:grid-cols-12 gap-0 lg:mt-0 md:mt-0 mt-14 sm:grid-cols-1 justify-center items-center lg:h-screen h-auto">
        <div className="bg-bg_primary rounded-md lg:w-[70px]   fixed sm:sticky block z-20 w-full top-0 left-0 mx-auto">          
          <div className="lg:flex lg:flex-col md:flex md:flex-row flex flex-row justify-center items-center lg:items-start">
          <div onClick={() => onSubmit("about")} className="py-6 text-center mx-auto border-b-2 transition-all cursor-pointer border-white hover:border-yellow-500 group">
            <RxAvatar className="text-2xl mx-auto text-white group-hover:text-yellow-500" />
            <p className="text-white group-hover:text-yellow-500">About</p>
          </div>
          <hr />
          <div onClick={() => onSubmit("resume")} className="py-6 text-center mx-auto border-b-2 transition-all cursor-pointer border-white hover:border-yellow-500 group">
            <IoDocumentText className="text-2xl mx-auto text-white group-hover:text-yellow-500" />
            <p className="text-white group-hover:text-yellow-500">Resume</p>
          </div>
          <hr />
          <div onClick={() => onSubmit("works")} className="py-6 text-center mx-auto border-b-2 transition-all cursor-pointer border-white hover:border-yellow-500 group">
            <FaPaintbrush className="text-2xl mx-auto text-white group-hover:text-yellow-500" />
            <p className="text-white group-hover:text-yellow-500">Works</p>
          </div>
          <hr />
          <div onClick={() => onSubmit("blogs")} className="py-6 text-center mx-auto border-b-2 transition-all cursor-pointer border-white hover:border-yellow-500 group">
            <FaComments className="text-2xl mx-auto text-white group-hover:text-yellow-500" />
            <p className="text-white group-hover:text-yellow-500">Blogs</p>
          </div>
          <div onClick={() => onSubmit("contact")} className="py-6 text-center mx-auto border-b-2 transition-all cursor-pointer border-white hover:border-yellow-500 group">
            <BiSolidContact className="text-2xl mx-auto text-white group-hover:text-yellow-500" />
            <p className="text-white group-hover:text-yellow-500">Contact</p>
          </div>
        </div>
        </div>

        <div className="card mastercard bg-bg_primary shadow-lg shadow-gray-800 lg:mt-0 mt-16 rounded-md z-[10] lg:h-[630px] lg:col-span-4 sm:h-auto">
          <div className="">
            {/* Check if getIntroDetails has data before rendering */}
            {getIntroDetails.length > 0 ? (
              <>
                <img className="w-full" src={getIntroDetails[0]['img1']} alt="img" />
                <div className="text-center text-white pb-6">
                  <h1 className="text-3xl font-semibold py-4">{getIntroDetails[0]['name']}</h1>
                  <h1 className="text-lg font-semibold pb-4 text-bg_secondary">
                    <TypeAnimation
                      sequence={[
                        'Mern Stack developer👨‍💼',
                        1000,
                        'Frontend Developer',
                        1000,
                        'Backend Developer',
                        1000,
                        'Programmer👨‍💻',
                        1000,
                      ]}
                      wrapper="span"
                      speed={50}
                      style={{ fontSize: '20px', display: 'inline' }}
                      repeat={Infinity}
                    />
                  </h1>

                  <span className="flex gap-3 items-center text-center justify-center">
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com" className="cursor-pointer">
                      <FaLinkedin className="text-lg text-white hover:text-gray-800" />
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://www.github.com/mobinulislam143" className="cursor-pointer">
                      <FaGithub className="text-lg text-white hover:text-gray-800" />
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://www.hackerrank.com/profile/mobinulislammahi" className="cursor-pointer">
                      <FaHackerrank className="text-lg text-white hover:text-gray-800" />
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://www.twitter.com" className="cursor-pointer">
                      <FaSquareXTwitter className="text-lg text-white hover:text-gray-800" />
                    </a>
                  </span>
                </div>

                <a href={myCv} className='mx-auto flex items-center gap-4 justify-center text-white text-lg cursor-pointer py-4  border-t'>
                  <DownloadBtn />
                </a>
              </>
            ) : (
              <div>
                 <div className="skeleton h-[350px] w-full bg-text_color_dark"></div>
                 <div className='w-[300px] space-y-4 mt-8 mx-auto flex flex-col'>
                 {Array.from({ length: 4 }).map((_, index) => (
                    <div key={index} className="skeleton bg-text_color_dark h-5 w-full"></div>

                  ))}
                 
                 </div>
              </div>
            )}
          </div>
        </div>

        <div className={`transition-all duration-500 ${isExiting ? "opacity-0 transform -translate-x-full" : isEntering ? "opacity-100 transform translate-x-0" : ""} lg:col-span-7`}>
          {selectedComponent === "about" && <About getServiceList={getServiceList} getIntroDetails={getIntroDetails} />}
          {selectedComponent === "resume" && <Resume getExperience={getExperience} getEducation={getEducation} frontendSkills={frontendSkills} backendSkills={backendSkills} />}
          {selectedComponent === "works" && <Works getPortfolioList={getPortfolioList} />}
          {selectedComponent === "blogs" && <Blogs getBlogsList={getBlogsList} getGallery={getGallery} />}
          {selectedComponent === "contact" && <Contact />}
        </div>
      </div>

    </div>
    </>
  );
};


export default MasterLayout;
