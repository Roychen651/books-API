import React from "react";

const SearchBar = ({ value, onChange, onSearch }) => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center my-6">
      {/* Decorative Background */}
      <div className="absolute -z-10 inset-0 bg-gradient-to-r from-primary to-secondary blur-3xl opacity-30 rounded-full h-96 w-96"></div>

      <div className="flex items-center space-x-4">
        {/* Input Field */}
        <input
          type="text"
          className="border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary shadow-lg transition-all duration-300 w-72"
          placeholder="Search for books..."
          value={value}
          onChange={onChange}
        />

        {/* Search Button */}
        <button
          className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-lg shadow-custom hover:scale-105 active:scale-95 transition-all duration-300"
          onClick={onSearch}
        >
          <span className="relative">Search</span>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
