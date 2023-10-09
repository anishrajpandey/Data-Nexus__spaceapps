import React from "react";
import { FaGithub, FaSmog } from "react-icons/fa";
import SearchBox from "./SearchBox";
import { Link } from "react-router-dom/dist";

function Navbar({ query, handleChange }) {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-white-500 px-6 py-3">
      {/* logo tailwind styling */}
      <Link to="/">
        <div className="flex items-center flex-shrink-0 text-black mr-6 font-bold text-xl tracking-tight">
          Data Nexus
        </div>
      </Link>

      {/* search input box */}
      <SearchBox query={query} handleChange={handleChange} />

      {/* github icon */}
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        {/* <Link to="/emission-analysis">
          <FaSmog className="text-black mx-5" style={{ fontSize: "2rem" }} />
        </Link> */}
        <a
          href="https://github.com/aashishpanthi/spaceapps/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-black mx-5" style={{ fontSize: "2rem" }} />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
