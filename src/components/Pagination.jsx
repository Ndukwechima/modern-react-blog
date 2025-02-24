import React from 'react'

const Pagination = ({ onPageChange, pageSize, currentPage, blogs }) => {
    const totalPages = Math.ceil(blogs.length / pageSize);
    // console.log(totalPages);
    const renderPaginationLinks = () => {
         return Array.from({ length: totalPages }, (_, i) => i + 1).map(
           (pageNumber) => (
             <li
               className={pageNumber === currentPage ? "activePagination" : ""}
               key={pageNumber}
             >
               <a href="#" onClick={() => onPageChange(pageNumber)}>
                 {pageNumber}
               </a>
             </li>
           )
         );
      
    }

  return (
    <div className="p-8">
      <ul className="pagination my-8 flex-wrap gap-4">
        <li>
          <button
            className="bg-blue-50"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>
        <div className="flex gap-1">{renderPaginationLinks()}</div>
        <li>
          <button
            className="bg-blue-50"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination