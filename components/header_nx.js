import React from "react";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";

function Header_nx() {
  const { user } = useUser();
  return (
    <>
      <header className="text-gray-600 body-font fixed top-0 left-0 w-full z-50 bg-white ">
        <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center md:flex">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image
              src="/pinterest-svgrepo-com.svg"
              alt="Pinterest Logo"
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
            <Link
              href="/"
              className="mr-4 text-gray-900 font-medium hover:bg-gray-200 p-2 pt-2 rounded-lg"
            >
              Today
            </Link>
            <Link
              href="/watch"
              className="mr-4 text-gray-900 font-medium hover:bg-gray-200 p-2 pt-2 rounded-lg"
            >
              Watch
            </Link>
            <Link
              href="/explore"
              className="mr-4 text-gray-900 font-medium hover:bg-gray-200 p-2 pt-2 rounded-lg"
            >
              Explore
            </Link>
          </nav>
          <div className="flex justify-center space-x-4">
            {user ? (
              <>
                <p className="pr-5 pt-2">Welcome {user.name}!</p>
                <button className="px-6 py-2 bg-red-600 text-white text-base font-semibold rounded-full hover:bg-red-700 transition duration-200">
                  <a href="/api/auth/logout">Log Out</a>
                </button>
              </>
            ) : (
              <>
                <button className="px-6 py-2 bg-red-600 text-white text-base font-semibold rounded-full hover:bg-red-700 transition duration-200">
                  <a href="/api/auth/login">Log In</a>
                </button>
                <button className="px-6 py-2 bg-white text-red-600 text-base font-semibold rounded-full border border-red-600 hover:bg-gray-100 transition duration-200">
                  <a href="/api/auth/login">Sign Up</a>
                </button>
              </>
            )}
          </div>
        </div>
      </header>
    </>
  );
}

export default Header_nx;
