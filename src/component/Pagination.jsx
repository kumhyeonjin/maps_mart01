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
        <a className="plink">👈이전</a>
      </button>
      <button
        className="btnN"
        disabled={currentPage === pageNumbers}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        <a className="plink">다음👉</a>
      </button>
    </div>
  );
};

export default Pagination;
