import React, { useState,useEffect } from "react";
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
import {NavLink} from "react-router-dom"
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io5";
import DownloadBtn from "../utility/DownloadBtn";



const MasterLayout = () => {
    const [selectedComponent, setSelectedComponent] = useState("about");
    const [isExiting, setIsExiting] = useState(false); 
    const [isEntering, setIsEntering] = useState(false);


    

    const onSubmit = (componentName) => {
        if (componentName !== selectedComponent) {
            setIsExiting(true); // Start exit animation
            setIsEntering(false); // Make sure entry animation is false

            // Wait for the exit animation to complete (500ms), then switch component
            setTimeout(() => {
                setSelectedComponent(componentName); // Change component
                setIsExiting(false); // Stop exit animation
                setIsEntering(true); // Start entry animation after the switch
            }, 500); // Duration of the exit animation (500ms)
        }
    };


    return (
        <>
        
            <div className="flex justify-center relative items-center lg:h-screen h-auto">
                
                <div className="bg-white rounded-md lg:w-20 lg:h-auto py-3 md:w-24 md:h-[500px] fixed sm:sticky block z-20  w-full top-0 left-0 lg:mr-2 mr-0">
                    <div className="lg:flex lg:flex-col md:flex md:flex-col flex flex-row justify-center items-center lg:items-start">
                        {/* Avatar Icon */}
                        <div onClick={() => onSubmit('about')} className="py-6 text-center mx-auto border-b-2 transition-all cursor-pointer border-gray-800 hover:border-green-800 group">
                            <RxAvatar className="text-2xl mx-auto text-gray-900 group-hover:text-green-800" />
                            <p className="text-gray-900 group-hover:text-green-800">About</p>
                        </div>
                        <hr />
                        {/* Document Icon */}
                        <div onClick={() => onSubmit('resume')} className="py-6 text-center mx-auto border-b-2 transition-all cursor-pointer border-black hover:border-green-800 group">
                            <IoDocumentText className="text-2xl mx-auto text-black group-hover:text-green-800" />
                            <p className="text-black group-hover:text-green-800">Resume</p>
                        </div>
                        <hr />
                        {/* Paintbrush Icon */}
                        <div onClick={() => onSubmit('works')} className="py-6 text-center mx-auto border-b-2 transition-all cursor-pointer border-black hover:border-green-800 group">
                            <FaPaintbrush className="text-2xl mx-auto text-black group-hover:text-green-800" />
                            <p className="text-black group-hover:text-green-800">Works</p>
                        </div>
                        <hr />
                        {/* Comments Icon */}
                        <div onClick={() => onSubmit('blogs')} className="py-6 text-center mx-auto border-b-2 transition-all cursor-pointer border-black hover:border-green-800 group">
                            <FaComments className="text-2xl mx-auto text-black group-hover:text-green-800" />
                            <p className="text-black group-hover:text-green-800">Blogs</p>
                        </div>
                        {/* Contact Icon */}
                        <div onClick={() => onSubmit('contact')} className="py-6 text-center mx-auto border-b-2 transition-all cursor-pointer border-black hover:border-green-800 group">
                            <BiSolidContact className="text-2xl mx-auto text-black group-hover:text-green-800" />
                            <p className="text-black group-hover:text-green-800">Contact</p>
                        </div>
                    </div>
                </div>

                {/* Main content area */}
                <div className="grid lg:grid-cols-2 sm:grid-cols-1 lg:gap-0 gap-4 lg:mt-0 md:mt-0 mt-14">
                    <div className="card mastercard bg-white lg:w-[500px] w-full shadow-lg lg:mt-0 mt-16  rounded-md z-[10]">
                        <div className="">
                            <img className="w-full" src="https://i.postimg.cc/W4HRXLs1/dfdf.png" alt="img" />
                            <div className="text-center text-black pb-6">
                                <h1 className="text-3xl font-semibold py-4">Mobinul Islam Mahi</h1>
                                <h1 className="text-lg font-semibold pb-4">
                                    <TypeAnimation
                                        sequence={[
                                            'Mern Stack developer',
                                            1000,
                                            'Full Stack Developer',
                                            1000,
                                            'Programmer',
                                            1000,
                                        ]}
                                        wrapper="span"
                                        speed={50}
                                        style={{ fontSize: '20px', display: 'inline' }}
                                        repeat={Infinity}
                                    />
                                </h1>

                                <span className="flex gap-3 items-center text-center justify-center">
                                    <NavLink to='www.facebook.com' className="cursor-pointer">
                                        <FaLinkedin className="text-lg text-black hover:text-gray-800" />
                                    </NavLink>
                                    <NavLink to='www.facebook.com'  className="cursor-pointer">
                                        <IoLogoFacebook  className="text-lg text-black hover:text-gray-800" />
                                    </NavLink>
                                    <NavLink to='www.facebook.com'  className="cursor-pointer">
                                        <RiInstagramFill className="text-lg text-black hover:text-gray-800" />
                                    </NavLink>
                                    <NavLink to='www.facebook.com'  className="cursor-pointer">
                                        <FaSquareXTwitter  className="text-lg text-black hover:text-gray-800" />
                                    </NavLink>
                                </span>
                            </div>
                            
                            <NavLink className='mx-auto flex items-center gap-4 justify-center text-black text-lg cursor-pointer py-4 mb-3 mt-10 border-t'>
                                
                                <DownloadBtn/>

                            </NavLink>
                        </div>
                    </div>

                    <div className={`transition-all duration-500 ${isExiting ? "opacity-0 transform -translate-x-full" : isEntering ? "opacity-100 transform translate-x-0" : ""} w-full lg:w-[500px] `}>
                        {selectedComponent === "about" && <About />}
                        {selectedComponent === "resume" && <Resume />}
                        {selectedComponent === "works" && <Works />}
                        {selectedComponent === "blogs" && <Blogs />}
                        {selectedComponent === "contact" && <Contact />}
                    </div>


                </div>
            
            </div>
        </>
    );
};

export default MasterLayout;
