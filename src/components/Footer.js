import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="text-sm bg-black">
      <div className="mx-auto max-w-screen-xl p-4 pb-1 pt-6 lg:pt-8 ">
        {/* lower part */}
        <div className="pb-5">
          <h1 className="text-sm mx-2 md:mx-12 mb-2 text-white text-center">
            © Content on this site is licensed under a{" "}
            <a
              href="https://creativecommons.org/licenses/by/4.0/"
              className="underline hover:text-gray-500"
            >
              Creative Commons Attribution 4.0 International License
            </a>
            .
          </h1>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
