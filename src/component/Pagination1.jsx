// import React from "react";

// const Pagination = ({
//   itemsPerPage,
//   totalItems,
//   currentPage,
//   onPageChange,
// }) => {
//   const pageNumbers = [];

//   for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
//     pageNumbers.push(i);
//   }

//   return (
//     <div>
//       <ul className="pagination">
//         {pageNumbers.map((number) => (
//           <li key={number} className="page-item">
//             <button className="page-link" onClick={() => onPageChange(number)}>
//               {number}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Pagination;
import React, { useState } from "react";

const Pagination = ({
  itemsPerPage,
  totalItems,
  onPageChange,
  currentPage,
}) => {
  const pageNumbers = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    onPageChange(pageNumber);
  };

  return (
    <div className="pagination">
      <button
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        <a className="page-link">이전</a>
      </button>
      <button
        disabled={currentPage === pageNumbers}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        <a className="page-link">다음</a>
      </button>
    </div>
  );
};

export default Pagination;
