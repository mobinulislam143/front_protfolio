import React, { useEffect, useState } from "react";
import { HiMiniBriefcase } from "react-icons/hi2";
import { AiFillBank } from "react-icons/ai";
import './resume.css'



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
    <div className="h-[600px] card bg-gray-800 shadow-lg rounded-md  overflow-y-auto overflow-x-hidden">


        <div className="p-5">
          <h1 className="text-green-800 text-xl font-bold">Resume</h1>
        </div>
        <hr />


        <div className="flex flex-wrap pt-5 items-start p-5">


          <div className="w-1/2 border-r px-1 pb-2 ">
            <p className="text-xl flex items-center gap-2 text-black pb-3"><AiFillBank className="text-green-800" /> Education</p><hr />


            {!getEducation || getEducation.length === 0 ? (<p>Sorry, I can't find any education level</p>) : (
              getEducation.map((item, index) => (
                <div key={index} className="col border-b py-4">
                  <div className="badge badge-lg mt-2 bg-white text-black">{item.passingyear}</div>

                  <h2 className="text-black py-3 text-lg font-semibold">{item.institute}</h2>
                  <p className="text-gray-400 text-sm ">Result: {item.result}</p>
                  <p className="text-gray-800 text-sm">{item.degree}</p>
                </div>

              ))

            )}



          </div>


          <div className="w-1/2 border-r border-b px-1 pb-2 ">

            <p className="text-xl flex items-center gap-2 text-black pb-3"><HiMiniBriefcase className="text-green-800" /> Experience</p><hr />


            {!getExperience || getExperience.length === 0 ? (<p>Sorry, I can't find any education level</p>) : (
              getExperience.map((item, index) => (
                <div key={index} className="col border-b py-4">
                  <div className="badge badge-lg mt-2 bg-white text-black">{item.duration}</div>

                  <h2 className="text-black py-3 text-lg font-semibold">{item.company}</h2>
                  <p className="text-gray-400 text-sm ">{item.position}</p>
                  <p className="text-gray-800 text-sm">{item.desc}</p>
                </div>

              ))

            )}

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
                      <div key={index} data-aos="fade-up" className="text-center mx-auto border-r p-2">
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


                {/* 
                <div className="text-center mx-auto  p-2">
                  <div className="radial-progress text-[#1b8c73]" style={{ "--value": 70 }} role="progressbar">
                    70%
                  </div>
                  <p className="text-lg text-black">Html, Css</p>
                </div> */}
              </div>

            </div>
            <div className="w-1/2 border-r px-1 pb-2 ">
              <p className="text-xl flex items-center gap-2 text-black pb-3">
                <img src="https://i.postimg.cc/25rX6FhQ/backend-programmer.png" className="w-8" alt="" /> Backend
              </p>
              <hr />
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
          <p className="text-center text-gray-800">“Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do.”</p>
        </div>

    </div>
  );
};

export default Resume;
