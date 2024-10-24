import React, { useState } from "react";
import { GiTireIronCross } from "react-icons/gi";
import PhotoGallery from "./PhotoGallery";
import useSound from 'use-sound';
import clicksond from '../../assets/clicksound.mp3'


const Blogs = ({ getBlogsList , getGallery}) => {
  console.log(getGallery)

  const [play] = useSound(clicksond)


  // console.log("my blog is", getBlogsList)
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 4;

  // Calculate total pages
  const totalPages = Math.ceil(getBlogsList.length / blogsPerPage);

  // Get current blogs to display
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = getBlogsList.slice(indexOfFirstBlog, indexOfLastBlog);

  const handleReadMore = (blog) => {
    play()
    setSelectedBlog(blog);

  };

  const handleCloseModal = () => {
    play()
    setSelectedBlog(null);

  };

  const handlePageChange = (pageNumber) => {
    play()
    setCurrentPage(pageNumber);
  };

  return (
    <div className="h-[600px] card bg-gray-800 shadow-lg rounded-md  overflow-y-auto overflow-x-hidden">
        <div className="p-5">
          <h1 className="text-text_color_light text-xl font-bold">
            My <span className="text-bg_secondary">Blogs</span>
          </h1>
        </div>
        <hr />

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 lg:p-2 md:px-0 px-3">
          {!currentBlogs || currentBlogs.length === 0 ? (
            <p>Sorry, you don't have any blogs</p>
          ) : (
            currentBlogs.map((blog) => (
              <div
                key={blog._id}
                className="bg-bg_primary shadow-lg rounded-lg overflow-hidden"
              >
                <img
                  src={blog.blogimg}
                  alt="Blog Image"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <p className="text-text_color_dark text-lg mb-4">
                    {blog.blogdesc.slice(0, 100)}... {/* Shortened for preview */}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-text_color_dark">Written by {blog.blogwriter}</p>
                    <button
                      className="bg-[#f59e0b] text-white px-4 py-2 rounded-md hover:bg-[#f59e0b] transition-colors"
                      onClick={() => handleReadMore(blog)}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center space-x-2 mt-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className={`px-4 py-2 rounded ${
                currentPage === index + 1
                  ? "bg-bg_secondary text-white"
                  : "bg-gray-200 text-black hover:bg-gray-300"
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>

        {/* Modal */}
        {selectedBlog && (
          <div className="modal modal-open">
            <div className="modal-box relative bg-bg_primary">
              <button
                className="btn bg-text_color_light text-black hover:bg-text_color_dark btn-sm btn-circle absolute right-2 top-2"
                onClick={handleCloseModal}
              >
                <GiTireIronCross />
              </button>
              <img
                src={selectedBlog.blogimg}
                alt="Blog Image"
                className="w-full h-48 object-cover mb-4"
              />
              <h2 className="text-xl font-bold text-bg_secondary mb-4">
                 {selectedBlog.blogwriter}
              </h2>
              <p className="text-text_color_dark text-base">
                {selectedBlog.blogdesc}
              </p>
            </div>
          </div>
        )}


        <div className="p-1">
          <PhotoGallery getGallery={getGallery}/>
        </div>
    </div>
  );
};

export default Blogs;
