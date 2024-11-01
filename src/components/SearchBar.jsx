import React from 'react';

const SearchBar = ({ onChange }) => {
  return (
    <div className="flex justify-center mt-4">
      <input
        type="text"
        placeholder="Search students..."
        className="w-full max-w-xs sm:max-w-md p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 transition-all bg-transparent text-gray-800 placeholder-gray-500" 
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBar;
