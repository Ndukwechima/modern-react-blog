import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import Pagination from "./Pagination";
import CategorySelection from "./CategorySelection";
import SideBar from "./SideBar";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const pageSize = 12; // 12 blogs per page
  useEffect(() => {
    async function fetBlogs() {
      let url = `http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`;

      // Filter by category
      if (selectedCategory) {
        url += `&category=${selectedCategory}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setBlogs(data);
    }

    fetBlogs();
  }, [currentPage, selectedCategory, pageSize]);

  // page changing btn
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setActiveCategory(category);
  };

  return (
    <div>
      {/* category section */}
      <div>
        <CategorySelection
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategoryChange}
          activeCategory={activeCategory}
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Blogs cards components */}
        <BlogCard
          blogs={blogs}
          currentPage={currentPage}
          selectedCategory={selectedCategory}
          pageSize={pageSize}
        />

        {/* Sidebar component */}
        <div>
          <SideBar />
        </div>
      </div>

      {/* Pagination section */}
      <div>
        <Pagination
          currentPage={currentPage}
          blogs={blogs}
          pageSize={pageSize}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default BlogPage;
