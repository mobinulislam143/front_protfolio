import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiTireIronCross } from "react-icons/gi"; 
import clicksond from '../../assets/clicksound.mp3';
import useSound from 'use-sound';
import { CopyBlock, dracula } from "react-code-blocks";

const Works = ({ getPortfolioList }) => {
  const [play] = useSound(clicksond);

  const [selectedPortfolio, setSelectedPortfolio] = useState(null); // State for the selected portfolio
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const itemsPerPage = 4; // Number of items to show per page

  const handleReadMore = (portfolio) => {
    play();
    setSelectedPortfolio(portfolio);
  };

  const handleCloseModal = () => {
    play();
    setSelectedPortfolio(null); 
  };

  const handlePageChange = (page) => {
    setCurrentPage(page); // Change the current page
  };

  // Calculate the index of the first and last portfolio on the current page
  const indexOfLastPortfolio = currentPage * itemsPerPage;
  const indexOfFirstPortfolio = indexOfLastPortfolio - itemsPerPage;

  // Slice the portfolios array to get the current page's portfolios
  const currentPortfolios = getPortfolioList.slice(indexOfFirstPortfolio, indexOfLastPortfolio);

  // Calculate total pages
  const totalPages = Math.ceil(getPortfolioList.length / itemsPerPage);

  const language = "json"; // Specify the language for the code block
  const languageDemo = `"dependencies": {
    "@emailjs/browser": "^4.4.1",
    "@react-google-maps/api": "^2.19.3",
    "@react-three/fiber": "^8.17.8",
    "@tsparticles/react": "^3.0.0",
    "@tsparticles/slim": "^3.5.0",
    "aos": "^2.3.4",
    "emailjs": "^4.0.3",
    "form-data": "^4.0.0",
    "react-animated-cursor": "^2.11.2",
    "react-awesome-slider": "^2.2.1",
    "react-image-gallery": "^1.3.0",
    "axios": "^1.7.7",
    "daisyui": "^4.12.10",
    "redux-thunk": "^3.1.0",
    "react-redux": "^9.1.2",
    "framer-motion": "^11.8.0",
    "framer-motion-3d": "^11.8.0",
    "isotope-layout": "^3.0.6",
    "jsonwebtoken": "^9.0.2",
    "react": "^18.3.1",
    "react-animated-cursor": "^2.11.2",
    "react-code-blocks": "^0.1.6",
    "react-dom": "^18.3.1",
    "react-icons": "^5.3.0",
    "react-loader-spinner": "^6.1.6",
    "react-router-dom": "^6.26.2",
    "react-spinners": "^0.14.1",
    "react-toastify": "^10.0.5",
    "react-tsparticles": "^2.12.2",
    "react-type-animation": "^3.2.0",
    "react-use-measure": "^2.1.1",
    "swiper": "^11.1.14",
    "tsparticles": "^3.5.0",
    "use-sound": "^4.0.3",
    "zustand": "^5.0.0-rc.2"
  },`;
  const serverlanguageDemo = ` "dependencies": {
    "axios": "^1.6.3",
    "body-parser": "^1.20.2",
    "cloudinary": "^2.0.3",
    "cookie-parser": "^1.4.6",
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.18.2",
    "express-mongo-sanitize": "^2.2.0",
    "express-rate-limit": "^7.1.1",
    "form-data": "^4.0.0",
    "helmet": "^7.0.0",
    "hpp": "^0.2.3",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^7.6.1",
    "multer": "^1.4.5-lts.1",
    "nodemailer": "^6.9.7",
    "nodemailer-smtp-transport": "^2.7.4",
    "nodemon": "^3.0.1",
    "path": "^0.12.7",
    "url": "^0.11.3",
    "xss-clean": "^0.1.4"
  }`

  return (
    <div className="h-[600px] card bg-bg_primary shadow-lg rounded-md overflow-y-auto overflow-x-hidden">
      <div className="p-5">
        <h1 className="text-text_color_light text-xl font-bold">My <span className="text-bg_secondary">Project</span></h1>
      </div>
      <hr />

      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-6 lg:p-2">
        {!getPortfolioList || getPortfolioList.length === 0 ? (
          <p>Sorry, You have no work project</p>
        ) : (
          currentPortfolios.map((portfolio, index) => (
            <Link onClick={() => handleReadMore(portfolio)} key={index} className="bg-[#151e30] shadow-lg rounded-md overflow-hidden">
              <img src={portfolio.img} alt={portfolio.title} className="w-full h-56 object-cover transform hover:scale-105 transition duration-300" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-text_color_light mb-2">{portfolio.title}</h3>
                <p className="text-sm text-text_color_dark mb-4">{portfolio.desc}</p>

                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-text_color_dark">{portfolio.technology}</p>
                  <div className="space-x-2">
                    {portfolio.githublink && (
                      <a
                        href={portfolio.githublink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-bg_secondary hover:text-blue-700"
                      >
                        GitHub
                      </a>
                    )}
                    {portfolio.livelink && (
                      <a
                        href={portfolio.livelink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-bg_secondary hover:text-green-700"
                      >
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>

      <div className="flex justify-center space-x-2 mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`px-4 py-2 rounded ${
              currentPage === index + 1
                ? "bg-[#f59e0b] text-white"
                : "bg-gray-200 text-black hover:bg-gray-300"
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Modal */}
      {selectedPortfolio && (
        <div className="modal modal-open w-full">
          <div className="modal-box relative bg-bg_primary">
            <button
              className="btn bg-gray-200 text-black hover:bg-gray-300 btn-sm btn-circle absolute right-2 top-2"
              onClick={handleCloseModal}
            >
              <GiTireIronCross />
            </button>
            <img
              src={selectedPortfolio.img}
              alt={selectedPortfolio.title}
              className="w-full h-48 object-cover mb-4"
            />
            <h2 className="text-xl font-bold text-bg_secondary mb-4">
              {selectedPortfolio.title}
            </h2>
            <p className="text-text_color_dark text-base">
              {selectedPortfolio.desc}
            </p>
            <p className="text-sm text-text_color_dark mb-2">{selectedPortfolio.technology}</p>
            <div className="space-x-2">
              <a
                href={selectedPortfolio.githublink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                GitHub
              </a>
              <a
                href={selectedPortfolio.livelink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:text-green-700"
              >
                Live
              </a>
            </div>

            <div>
              <h3 className="text-text_color_dark text-2xl text-center">Overall I am using packages for frontend below:</h3>
              <CopyBlock
                language={language}
                text={languageDemo}
                showLineNumbers={true}
                theme={dracula}
                wrapLines={true}
                codeBlock
              />
            </div>
            <div>
              <h3 className="text-text_color_dark text-2xl text-center">Overall I am using packages for backend below:</h3>
              <CopyBlock
                language={language}
                text={serverlanguageDemo}
                showLineNumbers={true}
                theme={dracula}
                wrapLines={true}
                codeBlock
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Works;
