import React, { useEffect, useState } from "react";
import { HiMiniBriefcase } from "react-icons/hi2";
import { AiFillBank } from "react-icons/ai";
import './resume.css'
import { BsCreditCard2Front } from "react-icons/bs";
import { LuBrainCircuit } from "react-icons/lu";


const Resume = ({ getEducation, getExperience, frontendSkills, backendSkills }) => {
  console.log(backendSkills)

  const [loading, setLoading] = useState(true); // Initial state set to true for loading

  // Simulate fetching data
  useEffect(() => {
    const fetchData = async () => {
      // Simulate a network request
      await new Promise((resolve) => setTimeout(resolve, 2000));
      // After fetching data, set loading to false
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="h-[600px] card bg-bg_primary shadow-lg rounded-md  overflow-y-auto overflow-x-hidden">


      <div className="p-5">
        <h1 className="text-bg_secondary text-xl font-bold"><span className="text-white">R</span>esume</h1>
      </div>
      <hr />


      <div className="flex flex-wrap pt-5 items-start p-5">


        <div className="w-1/2 border-r px-1 pb-2 ">
          <p className="text-xl flex items-center gap-2 text-text_color_light pb-3">
            <div className="border-2 w-16 h-16 border-bg_secondary p-3 rounded-full">
              <AiFillBank className="text-4xl text-bg_secondary" />
            </div> EDUCATION</p><hr />


          {!getEducation || getEducation.length === 0 ? (<p>Sorry, I can't find any education level</p>) : (
            getEducation.map((item, index) => (
              <div key={index} className="col border-b py-4">
                <div className="inline-block px-2 text-sm mt-2 bg-transparent border border-bg_secondary rounded-none text-bg_secondary">{item.passingyear}</div>

                <h2 className="text-text_color_light py-3 text-lg font-semibold">{item.institute}</h2>
                <p className="text-text_color_dark text-sm ">Result: {item.result}</p>
                <p className="text-text_color_dark text-sm">{item.degree}</p>
              </div>

            ))

          )}



        </div>


        <div className="w-1/2 border-r border-b px-1 pb-2 ">

          <p className="text-xl flex items-center gap-2 text-text_color_light pb-3">
            <div className="border-2 w-16 h-16 border-bg_secondary p-3 rounded-full">
              <HiMiniBriefcase className="text-4xl text-bg_secondary" />
            </div>EXPERIENCE</p><hr />


          {!getExperience || getExperience.length === 0 ? (<p>Sorry, I can't find any experience level</p>) : (
            getExperience.map((item, index) => (
              <div key={index} className="col  py-4">
                <div className="inline-block px-2 text-sm mt-2 bg-transparent border border-bg_secondary rounded-none text-bg_secondary">{item.duration}</div>

                <h2 className="text-text_color_light py-3 text-lg font-semibold">{item.company}</h2>
                <p className="text-text_color_dark text-sm ">Position: {item.position}</p>
                <p className="text-text_color_dark text-sm">{item.desc}</p>
              </div>

            ))

          )}

        </div>



      </div>

      <div className="p-5">
        <h1 className="text-bg_secondary text-xl font-bold">My <span>Skills</span></h1>
      </div>
      <hr />
      <div className="my-4">
        <div className="flex flex-wrap pt-5 items-start p-5">

          <div className="w-1/2 border-r px-1 pb-2 ">
            <p className="text-xl flex items-center gap-2 text-text_color_light pb-3">
              <div className="border-2 w-16 h-16 border-bg_secondary p-3 rounded-full">
                <BsCreditCard2Front  className="text-4xl text-bg_secondary" />
              </div> Frontend</p><hr />


            <div className="grid grid-cols-2 items-start border-b py-4">

              {loading ? (
                // Show skeletons while loading
                <div className="grid grid-cols-2 gap-4"> {/* Use grid layout for two columns */}
                  {Array.from({ length: 4 }).map((_, index) => (
                    <div key={index} className="text-center"> {/* Remove margins */}
                      <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
                      <p className="text-xs text-black">Loading...</p>
                    </div>
                  ))}
                </div>
              ) : (
                frontendSkills && frontendSkills.length > 0 ? (
                  frontendSkills.map((skill, index) => (
                    <div key={index} data-aos="fade-up" className="text-center mx-auto  p-2">
                      <div
                        className="radial-progress text-[#1b8c73]"
                        style={{ "--value": skill.percentage }}
                        role="progressbar"
                      >
                        {skill.percentage}%
                      </div>
                      <p className="text-xs text-black">{skill.skillName}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-center col-span-2">No skills available.</p>
                )
              )}

            </div>

          </div>
          <div className="w-1/2 border-r px-1 pb-2 ">
            <p className="text-xl flex items-center gap-2 text-text_color_light pb-3">
              <div className="border-2 w-16 h-16 border-bg_secondary p-3 rounded-full">
                <LuBrainCircuit   className="text-4xl text-bg_secondary" />
              </div> Knowledge</p><hr />
            <div className="col border-b py-4">

           

            </div>
          </div>


          <div className="w-1/2 border-r px-1 pb-2 ">
            <p className="text-xl flex items-center gap-2 text-text_color_light pb-3">
              <div className="border-2 w-16 h-16 border-bg_secondary p-3 rounded-full">
                <AiFillBank className="text-4xl text-bg_secondary" />
              </div> Frontend</p><hr />
            <div className="col border-b py-4">

              {loading ? (
                // Show skeletons while loading
                <div className="flex flex-col space-y-2">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <div key={index} className="skeleton h-4 w-full"></div>
                  ))}
                </div>

              ) : (
                backendSkills && backendSkills.length > 0 ? (
                  backendSkills.map((skill, index) => (
                    <div data-aos="fade-up" key={index} className="mb-4">
                      <span className="text-black font-bold">{skill.skillName}</span>
                      <progress className="progress w-full progress-secondary" value={skill.percentage} max="100"></progress>
                    </div>
                  ))
                ) : (
                  <p className="text-center col-span-2">No skills available.</p>
                )
              )}

            </div>
          </div>

        </div>
      </div>


      <div className="p-5">
        <h1 className="text-black text-xl font-bold">Quote</h1>
      </div>
      <hr />

      <div className=" py-4">
        <p className="text-center text-white">“Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do.”</p>
      </div>

    </div>
  );
};

export default Resume;
