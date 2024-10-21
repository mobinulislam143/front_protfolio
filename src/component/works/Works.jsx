import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiTireIronCross } from "react-icons/gi"; 
import clicksond from '../../assets/clicksound.mp3'
import useSound from 'use-sound';

const Works = ({getPortfolioList}) => {
  const [play] = useSound(clicksond)

  const [selectedPortfolio, setSelectedPortfolio] = useState(null); // State for the selected portfolio
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const itemsPerPage = 4; // Number of items to show per page



  const handleReadMore = (portfolio) => {
    play()
    setSelectedPortfolio(portfolio);
  };

  const handleCloseModal = () => {
    play()

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

  return (
    <div className="h-[600px] card bg-bg_primary shadow-lg rounded-md  overflow-y-auto overflow-x-hidden">
        <div className="p-5">
          <h1 className="text-text_color_light text-xl font-bold">My <span className="text-bg_secondary">Project</span></h1>
        </div>
        <hr />

        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-6 lg:p-2">
        

          {!getPortfolioList || getPortfolioList.length === 0?(<p>Sorry, You have no work project</p>): (
            getPortfolioList.map((portfolio,index) => (
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
            </div>
          </div>
        )}
    </div>
  );
};

export default Works;
