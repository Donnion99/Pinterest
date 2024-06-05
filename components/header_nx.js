import React from "react";
import Image from "next/image";

function Header_nx() {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image
              src="/pinterest-svgrepo-com.svg"
              alt="pinterest Logo"
              className=""
              width={35}
              height={24}
              priority
            />

            <span className="ml-1 tracking-tighter text-xl font-pacifico text-red-700">
              Pinterest
            </span>
          </a>
          <nav className="md:mr-auto md:ml-2 md:py-1 md:pl-2 flex flex-wrap items-center text-base justify-center">
            <a className="mr-4 text-gray-900 font-medium hover:bg-gray-200 p-2 pt-2 rounded-lg">
              Today
            </a>
            <a className="mr-4 text-gray-900 font-medium  hover:bg-gray-200 p-2 pt-2 rounded-lg">
              Watch
            </a>
            <a className="mr-4 text-gray-900 font-medium  hover:bg-gray-200 p-2 pt-2  rounded-lg">
              Explore
            </a>
          </nav>
          <div className="flex justify-center space-x-4">
            <button className="px-6 py-2 bg-red-600 text-white text-base font-semibold rounded-full hover:bg-red-700 transition duration-200">
              Log In
            </button>
            <button className="px-6 py-2 bg-white text-red-600 text-base font-semibold rounded-full border border-red-600 hover:bg-gray-100 transition duration-200">
              Sign Up
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header_nx;
