import React, { useState, useEffect } from "react";
import { RxAvatar } from "react-icons/rx";
import { IoDocumentText } from "react-icons/io5";
import { FaPaintbrush } from "react-icons/fa6";
import { FaComments } from "react-icons/fa6";
import { BiSolidContact } from "react-icons/bi";
import About from "../about/About";
import { GiTireIronCross } from "react-icons/gi";
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
import clicksond from '../../assets/clicksound.mp3'
import useSound from 'use-sound';
import myCv from "../../assets/mobinul_islam_mahi_cv.pdf"
import { AiFillInstagram } from "react-icons/ai";
import Cookie from 'js-cookie';
import StarRating from "./StarRating";

const MasterLayout = () => {
  const { getIntroDetails, getIntroRequest, getServiceList, getServiceRequest, getEducation, getEducationRequest, getExperience, getExperienceRequest, frontendSkills, getfrontendskillsRequest, backendSkills, getbackendskillsRequest, getPortfolioList, getPortfolioRequest, getBlogsList, getblogRequest, getGallery, getGalleryRequest, LoginFormData, LoginFormOnChange, UserLoginRequest, isLoggedIn, Logout } = ApiStore();

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

  const [play] = useSound(clicksond)

  const [selectedComponent, setSelectedComponent] = useState("about");
  const [isExiting, setIsExiting] = useState(false);
  const [isEntering, setIsEntering] = useState(false);
  const [selectedPortfolio, setSelectedPortfolio] = useState(null);
  const onSubmit = (componentName) => {
    if (componentName !== selectedComponent) {
      play()
      setIsExiting(true);
      setIsEntering(false);
      setTimeout(() => {
        setSelectedComponent(componentName);
        setIsExiting(false);
        setIsEntering(true);
      }, 500);
    }
  };


  const [email, setEmail] = useState(LoginFormData.email);
  const [name, setName] = useState(LoginFormData.name);
  const [isLoggedInState, setIsLoggedIn] = useState(isLoggedIn || false);


  useEffect(()=>{
    const token = Cookie.get('token')
    if(token){
      setIsLoggedIn(true)
    }
  }, [])
  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    const postBody = { email, name }; 
    console.log(email, name)
    const success = await UserLoginRequest(postBody);

    if (success) {
      // Optionally reset the form or handle post-login actions
      setEmail('');
      setName('');
      if (document.getElementById('my_modal_3').open) {
        document.getElementById('my_modal_3').close();
      }
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    Cookie.remove('token');
    setIsLoggedIn(false);
    Logout(); 
  };

  return (
    <>
      <div className="container mx-auto">

        <div className="grid lg:grid-cols-12 gap-0 lg:mt-0 md:mt-0 mt-14 sm:grid-cols-1 justify-center items-center lg:h-screen h-auto">
          <div className="bg-bg_primary rounded-md lg:w-[70px]   fixed sm:sticky block z-20 w-full top-0 left-0 lg:pb-5 mx-auto">
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

          <div className="card mastercard bg-bg_primary shadow-lg shadow-gray-800 lg:mt-0 mt-16 rounded-md z-[10] lg:h-[630px] lg:col-span-4 sm:h-auto flex flex-col justify-between">
            <div className="">

              {getIntroDetails.length > 0 ? (
                <>
                  <img className="w-full" src={getIntroDetails[0]['img1']} alt="img" />
                  <h1 className="text-3xl text-center font-semibold py-4">{getIntroDetails[0]['name']}</h1>
                </>
              ) : (
                <div>
                  <div className="skeleton h-[350px] w-full bg-text_color_dark"></div>
                  <div className='w-[300px] space-y-4 mt-8 mx-auto flex flex-col'>


                  </div>
                </div>
              )}
              <div className="text-center text-white pb-6">
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
                  <a target="_blank" rel="noreferrer" href="https://www.linkedin.com" className="cursor-pointer" data-aos="fade-right">
                    <FaLinkedin className="text-xl text-white hover:text-text_color_dark" />
                  </a>
                  <a target="_blank" data-aos="fade-up" rel="noreferrer" href="https://www.github.com/mobinulislam143" className="cursor-pointer">
                    <FaGithub className="text-xl text-white hover:text-text_color_dark" />
                  </a>
                  <a target="_blank" data-aos="fade-down" rel="noreferrer" href="https://www.hackerrank.com/profile/mobinulislammahi" className="cursor-pointer">
                    <FaHackerrank className="text-xl text-white hover:text-text_color_dark" />
                  </a>
                  <a target="_blank" data-aos="fade-left" rel="noreferrer" href="https://www.twitter.com" className="cursor-pointer">
                    <FaSquareXTwitter className="text-xl text-white hover:text-text_color_dark" />
                  </a>
                  <a target="_blank" data-aos="fade-left" rel="noreferrer" href="https://www.instagram.com/ma_ahii/" className="cursor-pointer">
                    <AiFillInstagram className="text-xl text-white hover:text-text_color_dark" />
                  </a>
                </span>
              </div>


            </div>
            {/* <h2 className="text-3xl cursor-pointer text-center hover:scale-150 hover:text-bold transition-all hover:text-text_color_light ">Welcome to my <br />Website</h2> */}
            <div className="text-center w-full">
             {
              isLoggedIn?(
                <button
                className="btn mx-auto bg-bg_secondary text-bg_primary hover:bg-bg_secondary"
                >
                Logout
              </button>

              ):(
                <button
                className="btn mx-auto bg-bg_secondary text-bg_primary hover:bg-bg_secondary"
                onClick={() => document.getElementById('my_modal_3').showModal()}
              >
                Login to more explore
              </button>
              )
             }

              {/* Login Modal */}
              <dialog id="my_modal_3" className="modal">
                <div className="modal-box relative">
                  <h2 className="text-text_color_light text-3xl text-bold">Login</h2><br />
                  <form>
                    <div>

                      <label className="input input-bordered flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          className="h-4 w-4 opacity-70">
                          <path
                            d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                          <path
                            d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="grow" placeholder="Email" />
                      </label>
                    </div>

                    <div className="mt-5">


                      <label className="input input-bordered flex items-center gap-2">
                        Name:
                        <input type="text" className="grow" placeholder="Daisy" value={name}
                          onChange={(e) => setName(e.target.value)} />
                      </label>
                    </div>
                    <div className="modal-action">
                      <button type="submit"  onClick={handleLoginSubmit} className="btn w-full bg-bg_secondary hover:bg-[#c47e06] text-bg_primary font-bold">Login</button>
                      <button
                        type="button"
                        className="btn bg-gray-200 text-black hover:bg-gray-300 btn-sm btn-circle absolute right-2 top-2"
                        onClick={() => document.getElementById('my_modal_3').close()}
                      >
                        ✕
                      </button>
                    </div>
                  </form>
                </div>
              </dialog>

              <StarRating/>
            </div>
            <a href={myCv} className='mx-auto flex items-center gap-4 justify-center text-white text-lg cursor-pointer py-4 '>
              <DownloadBtn />
            </a>
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
