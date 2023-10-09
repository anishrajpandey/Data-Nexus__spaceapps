import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

function SearchBox({ query, handleChange }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        handleChange(query);
      }}
      className="flex items-center flex-shrink-0 text-white mx-5 flex-1 bg-gray-200 rounded max-w-4xl overflow-hidden"
    >
      <FaSearch className="text-black mx-5" />

      <input
        className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight h-12 focus:outline-none"
        type="text"
        placeholder="Search..."
        aria-label="Search"
        value={query}
        onChange={(e) => handleChange(e.target.value)}
      />

      <Link to="/" className="decoration-none">
        <button className="border-none bg-black h-12 px-5 " type="button">
          Search
        </button>
      </Link>
    </form>
  );
}

export default SearchBox;
