import React from "react";
import {
  PaginationMainContainer,
  PaginationStyling,
} from "./aiToolsListStyling";

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationMainContainer>
      <PaginationStyling>
        {pageNumbers.map((number) => (
          <div key={number} className="page-item">
            <a onClick={() => paginate(number)} href="#" className="page-link">
              {number}
            </a>
          </div>
        ))}
      </PaginationStyling>
    </PaginationMainContainer>
  );
};

export default Pagination;
