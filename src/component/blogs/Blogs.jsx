import React, { useState } from "react";
import { GiTireIronCross } from "react-icons/gi";

const blogsData = [
  {
    id: 1,
    blogimg: "https://via.placeholder.com/400", // Replace with actual image URL
    blogdesc: "This is a brief description of the first blog post. It talks about interesting topics related to technology. This is the full description where you can add more details about the blog content. It could be multiple paragraphs or any other relevant information.",
    blogwriter: "John Doe",
  },
  {
    id: 2,
    blogimg: "https://via.placeholder.com/400", // Replace with actual image URL
    blogdesc: "Another insightful blog post about software development and the best practices to follow. This is the full description where you can dive deeper into the blog topic, adding further value and insights to the reader.",
    blogwriter: "Jane Smith",
  },
  {
    id: 3,
    blogimg: "https://via.placeholder.com/400", // Replace with actual image URL
    blogdesc: "This blog covers the best coding practices in modern development.",
    blogwriter: "Alice Brown",
  },
  {
    id: 4,
    blogimg: "https://via.placeholder.com/400", // Replace with actual image URL
    blogdesc: "Discover how technology has revolutionized industries over the past decade.",
    blogwriter: "Bob Johnson",
  },
  {
    id: 5,
    blogimg: "https://via.placeholder.com/400", // Replace with actual image URL
    blogdesc: "The future of AI in software development.",
    blogwriter: "Clara Lee",
  },
  {
    id: 6,
    blogimg: "https://via.placeholder.com/400", // Replace with actual image URL
    blogdesc: "How to efficiently use JavaScript frameworks for web applications.",
    blogwriter: "David Clark",
  },
  // Add more blog data as needed
];

const Blogs = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 4;

  // Calculate total pages
  const totalPages = Math.ceil(blogsData.length / blogsPerPage);

  // Get current blogs to display
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogsData.slice(indexOfFirstBlog, indexOfLastBlog);

  const handleReadMore = (blog) => {
    setSelectedBlog(blog);
  };

  const handleCloseModal = () => {
    setSelectedBlog(null);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="relative h-[600px]">
      <div className="card bg-white shadow-lg rounded-md h-full overflow-y-auto overflow-x-hidden">
        <div className="p-5">
          <h1 className="text-black text-xl font-bold">
            My <span className="text-[#1b8c73]">Blogs</span>
          </h1>
        </div>
        <hr />

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 p-3">
          {currentBlogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={blog.blogimg}
                alt="Blog Image"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-gray-700 text-lg mb-4">
                  {blog.blogdesc.slice(0, 100)}... {/* Shortened for preview */}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-gray-500">Written by {blog.blogwriter}</p>
                  <button
                    className="bg-[#1b8c73] text-white px-4 py-2 rounded-md hover:bg-[#146953] transition-colors"
                    onClick={() => handleReadMore(blog)}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
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
        {selectedBlog && (
          <div className="modal modal-open">
            <div className="modal-box relative bg-white">
              <button
                className="btn bg-gray-200 text-black hover:bg-gray-300 btn-sm btn-circle absolute right-2 top-2"
                onClick={handleCloseModal}
              >
                <GiTireIronCross />
              </button>
              <img
                src={selectedBlog.blogimg}
                alt="Blog Image"
                className="w-full h-48 object-cover mb-4"
              />
              <h2 className="text-xl font-bold text-[#1b8c73] mb-4">
                Blog by {selectedBlog.blogwriter}
              </h2>
              <p className="text-gray-700 text-base">
                {selectedBlog.blogdesc}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;
