// THIS FILE IS NOT BEING USED
import React from 'react';

const Pagination = ({ totalPosts, postPerPage, setCurrentPage}) => {
  const pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pages.push(i);
  }

  return (
    <div>
      {pages.map((page, index) => (
        <button key={index} onClick={()=>setCurrentPage(page)}>
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
