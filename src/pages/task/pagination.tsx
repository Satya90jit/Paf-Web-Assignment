import React, { useState } from "react";

interface PaginatedListProps {
  items: string[]; // Define the type of items (array of strings)
  itemsPerPage: number; // Number of items per page
}

const PaginatedList: React.FC<PaginatedListProps> = ({
  items = ["eafjkj", "webkb"],
  itemsPerPage,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Check if items array is defined
  if (!items || items.length === 0) {
    return <p>No items available.</p>;
  }

  // Calculate the index of the first and last item for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate the total number of pages
  const totalPages = Math.ceil(items.length / itemsPerPage);

  // Function to change the current page
  const paginate = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div>
      <ul>
        {currentItems.map((item, index) => (
          <li key={index} className="p-2 border-b">
            {item}
          </li>
        ))}
      </ul>

      <div className="flex justify-center space-x-2 mt-4">
        {/* Render pagination buttons */}
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`p-2 rounded-md ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-300"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PaginatedList;
