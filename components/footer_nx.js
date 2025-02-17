import React from "react";

function Footer_nx(props) {
  return (
    <footer
      className={`md:bg-white text-white md:text-black py-4 mb-12 md:mb-0 h-full ${props.class}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center sm:justify-between items-center text-sm font-pacifico font-medium text-center sm:text-left">
          <a href="#" className="hover:underline mx-1 sm:mx-2">
            About
          </a>
          <a href="#" className="hover:underline mx-1 sm:mx-2">
            Careers
          </a>
          <a href="#" className="hover:underline mx-1 sm:mx-2">
            Press
          </a>
          <a href="#" className="hover:underline mx-1 sm:mx-2">
            Help Center
          </a>
          <a href="#" className="hover:underline mx-1 sm:mx-2">
            Privacy & Terms
          </a>
          <a href="#" className="hover:underline mx-1 sm:mx-2">
            Cookies
          </a>
          <a href="#" className="hover:underline mx-1 sm:mx-2">
            Ads
          </a>
          <a href="#" className="hover:underline mx-1 sm:mx-2">
            More
          </a>
        </div>
        <div className="mt-4 text-sm md:text-gray-600 text-white text-center">
          <p>
            &copy; 2024 Pinterest. All rights reserved. Made By Kunal Khude ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer_nx;
