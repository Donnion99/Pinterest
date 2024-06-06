import React from "react";

function Footer() {
  return (
    <footer className="bg-white text-black py-4 mb-12">
      <div className="container mx-auto px-">
        <div className="flex flex-wrap justify-center sm:justify-between items-center text-sm font-pacifico font-medium text-center sm:text-left">
          <a href="#" className="hover:underline mx-2">
            About
          </a>
          <a href="#" className="hover:underline mx-2">
            Careers
          </a>
          <a href="#" className="hover:underline mx-2">
            Press
          </a>
          <a href="#" className="hover:underline mx-2">
            Help Center
          </a>
          <a href="#" className="hover:underline mx-2">
            Privacy & Terms
          </a>
          <a href="#" className="hover:underline mx-2">
            Cookies
          </a>
          <a href="#" className="hover:underline mx-2">
            Ads
          </a>
          <a href="#" className="hover:underline mx-2">
            More
          </a>
        </div>
        <div className="mt-4 text-sm text-gray-500 text-center">
          <p>
            &copy; 2024 Pinterest. All rights reserved. Made By Kunal Khude ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
