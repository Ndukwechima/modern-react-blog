import React from "react";
import { Link } from "react-router-dom";
import {FaUser} from 'react-icons/fa';
const BlogCard = ({ blogs, currentPage, selectedCategory, pageSize }) => {
    const filteredBlogs = blogs.filter((blog) => !selectedCategory || blog.category === selectedCategory).slice((currentPage - 1) * pageSize, currentPage * pageSize);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {filteredBlogs.map((blog) => (
        <Link to={`/blogs/${blog.id}}`} key={blog.id} className="p-5 shadow rounded-md cursor-pointer">
          <div>
            <img src={blog.image} alt="pictures" className="w-full" />
          </div>
          <h3 className="mt-4 mb-2 font-bold cursor-pointer hover:text-blue-600">
            {blog.title}
          </h3>
          <p className="mb-2 text-gray-600">
            <FaUser className="inline-flex mr-2 items-center" />
            {blog.author}
          </p>
          <p className="text-sm text-gray-500 mb-2">
            Published: {blog.published_date}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default BlogCard;
