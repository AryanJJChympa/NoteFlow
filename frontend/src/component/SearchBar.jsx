import React from "react";

const SearchBar = ({ onSearchChange }) => {
  return (
    <div className="relative w-full max-w-xs md:max-w-sm">
      <input
        type="text"
        placeholder="Search your notes..."
        className="w-full px-4 py-2 bg-base-100 text-base-content placeholder-gray-400 
                   rounded-xl shadow-md focus:shadow-lg focus:ring-2 focus:ring-primary 
                   border border-base-300 outline-none transition-all duration-200"
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <span
        className="absolute right-3 top-2.5 text-gray-400 hover:text-primary transition-colors cursor-pointer"
      >
        🔍
      </span>
    </div>
  );
};

export default SearchBar;
