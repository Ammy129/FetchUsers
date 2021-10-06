import React from "react";

const SinglePagination = ({ pageNum, active, setCurPage }) => {
  return (
    <div
      onClick={() => setCurPage(pageNum)}
      className={`grid place-items-center bg-gray-300 w-12 h-12 rounded-md cursor-pointer hover:bg-gray-400 transitions duration-200 ${
        active && "active"
      }`}
    >
      {pageNum}
    </div>
  );
};

export default SinglePagination;
