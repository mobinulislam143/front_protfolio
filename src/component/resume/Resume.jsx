import React from "react";
import { motion, useScroll } from "framer-motion";

const Resume = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="relative h-[500px]">
      {/* Progress Bar */}
      <motion.div
        className="progress-bar absolute top-0 left-0 h-1 bg-blue-700"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Card with scrolling */}
      <div className="card bg-white shadow-lg rounded-md h-full overflow-y-auto no-scrollbar">
        {/* Content inside the scrollable area */}
        <div className="w-full lg:w-[500px]">
          <img
            className="w-full"
            src="https://artriva.com/images/portfolio/portraits/guy_formal.jpg"
            alt="img"
          />
          <div className="text-center text-black">
            <h1 className="text-3xl font-bold py-4">This is resume</h1>
            {Array(20).fill().map((_, index) => (
              <h1 key={index} className="text-lg font-semibold pb-4">
                Mern Stack Developer
              </h1>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
