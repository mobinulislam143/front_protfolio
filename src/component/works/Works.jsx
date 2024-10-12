import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiTireIronCross } from "react-icons/gi"; // Import your icon or use another method for the close button

const Works = ({getPortfolioList}) => {
  const [selectedPortfolio, setSelectedPortfolio] = useState(null); // State for the selected portfolio
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const itemsPerPage = 4; // Number of items to show per page

  // Demo portfolio data (JSON-like object)
  const portfolios = [
    {
      title: "Project One",
      img: "https://mahi-lac.vercel.app/static/media/ponno.f49e8cc406ebe5fc60ff.png",
      technology: "React, Node.js",
      desc: "This is a demo project using React and Node.js.",
      githublink: "https://github.com/example/project-one",
      livelink: "https://example.com/project-one",
    },
    {
      title: "Project Two",
      img: "https://mahi-lac.vercel.app/static/media/ponno.f49e8cc406ebe5fc60ff.png",
      technology: "Vue.js, Express",
      desc: "This is a demo project using Vue.js and Express.",
      githublink: "https://github.com/example/project-two",
      livelink: "https://example.com/project-two",
    },
    {
      title: "Project Three",
      img: "https://mahi-lac.vercel.app/static/media/ponno.f49e8cc406ebe5fc60ff.png",
      technology: "Angular, MongoDB",
      desc: "This is a demo project using Angular and MongoDB.",
      githublink: "https://github.com/example/project-three",
      livelink: "https://example.com/project-three",
    },
    {
      title: "Project Four",
      img: "https://mahi-lac.vercel.app/static/media/ponno.f49e8cc406ebe5fc60ff.png",
      technology: "Django, PostgreSQL",
      desc: "This is a demo project using Django and PostgreSQL.",
      githublink: "https://github.com/example/project-four",
      livelink: "https://example.com/project-four",
    },
    {
      title: "Project Five",
      img: "https://mahi-lac.vercel.app/static/media/ponno.f49e8cc406ebe5fc60ff.png",
      technology: "Flask, MySQL",
      desc: "This is a demo project using Flask and MySQL.",
      githublink: "https://github.com/example/project-five",
      livelink: "https://example.com/project-five",
    },
    {
      title: "Project Six",
      img: "https://mahi-lac.vercel.app/static/media/ponno.f49e8cc406ebe5fc60ff.png",
      technology: "Ruby on Rails, SQLite",
      desc: "This is a demo project using Ruby on Rails and SQLite.",
      githublink: "https://github.com/example/project-six",
      livelink: "https://example.com/project-six",
    },
  ];

  const handleReadMore = (portfolio) => {
    setSelectedPortfolio(portfolio); // Set the selected portfolio for the modal
  };

  const handleCloseModal = () => {
    setSelectedPortfolio(null); // Close the modal by resetting the selected portfolio
  };

  const handlePageChange = (page) => {
    setCurrentPage(page); // Change the current page
  };

  // Calculate the index of the first and last portfolio on the current page
  const indexOfLastPortfolio = currentPage * itemsPerPage;
  const indexOfFirstPortfolio = indexOfLastPortfolio - itemsPerPage;

  // Slice the portfolios array to get the current page's portfolios
  const currentPortfolios = portfolios.slice(indexOfFirstPortfolio, indexOfLastPortfolio);

  // Calculate total pages
  const totalPages = Math.ceil(portfolios.length / itemsPerPage);

  return (
    <div className="h-[600px] card bg-gray-800 shadow-lg rounded-md  overflow-y-auto overflow-x-hidden">
        <div className="p-5">
          <h1 className="text-black text-xl font-bold">My <span className="text-green-800">Project</span></h1>
        </div>
        <hr />

        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-6 lg:p-2">
        

          {!getPortfolioList || getPortfolioList.length === 0?(<p>Sorry, You have no work project</p>): (
            getPortfolioList.map((portfolio,index) => (
              <Link onClick={() => handleReadMore(portfolio)} key={index} className="bg-white shadow-lg rounded-md overflow-hidden">
              <img src={portfolio.img} alt={portfolio.title} className="w-full h-56 object-cover transform hover:scale-105 transition duration-300" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{portfolio.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{portfolio.desc}</p>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-gray-700">{portfolio.technology}</p>
                  <div className="space-x-2">
                    {portfolio.githublink && (
                      <a
                        href={portfolio.githublink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-700"
                      >
                        GitHub
                      </a>
                    )}
                    {portfolio.livelink && (
                      <a
                        href={portfolio.livelink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-500 hover:text-green-700"
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
                  ? "bg-[#1b8c73] text-white"
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
          <div className="modal modal-open">
            <div className="modal-box relative bg-white">
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
              <h2 className="text-xl font-bold text-[#1b8c73] mb-4">
                {selectedPortfolio.title}
              </h2>
              <p className="text-gray-700 text-base">
                {selectedPortfolio.desc}
              </p>
              <p className="text-sm text-gray-600 mb-2">{selectedPortfolio.technology}</p>
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
