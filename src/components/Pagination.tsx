import React from "react";
import { IoChevronBack } from "react-icons/io5";
import { IoChevronForwardSharp } from "react-icons/io5";

interface PaginationProps {
  totalCount: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalCount,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalCount / 10);

  const handleClick = (page: number) => {
    if (page < 1 || page > totalPages) return;
    onPageChange(page);
  };

  return (
    <div className="flex justify-end mt-4 space-x-2">
      <button
        type="button"
        aria-label="Previous"
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <IoChevronBack className="h-5 w-5 hover:fill-zinc-100 fill-zinc-600" />
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          className={`px-3 py-1 rounded ${
            currentPage === index + 1
              ? "bg-zinc-800 text-zinc-100 border border-zinc-800"
              : "border border-zinc-600 bg-transparent hover:bg-zinc-800"
          }`}
          onClick={() => handleClick(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <button
        type="button"
        aria-label="Next"
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <IoChevronForwardSharp className="h-5 w-5 hover:fill-zinc-100 fill-zinc-600" />
      </button>
    </div>
  );
};

export default Pagination;
