import React from "react";
// import Image from "next/image";
import Link from "next/link";

function Section4() {
  return (
    <>
      <section className="text-gray-600 body-font w-full h-fit  ">
        <div className="container mx-auto flex flex-wrap justify-between items-center relative h-full">
          <div className="w-full md:w-1/2 relative">
            <img
              src="https://s.pinimg.com/webapp/shop-de8ddf10.png"
              alt="Picture of the author"
              className="w-full h-auto"
            />
            <img
              src="https://s.pinimg.com/webapp/creator-pin-img-3bed5463.png"
              alt="Overlay image"
              className="absolute top-20 left-8 w-1/3 h-auto rounded-3xl"
            />
            {/* <p className="absolute top-48   left-14 w-48 text-sm text-center text-white bg-black bg-opacity-50 p-2 rounded">
              <a
                href="https://in.pinterest.com/search/pins/?q=lip%20shade"
                target="_blank"
                rel="noopener noreferrer"
              >
                Scout the City 56.7k followers
              </a>
            </p> */}
            {/* <img
              src="https://s.pinimg.com/webapp/creator-avatar-262dfeba.png"
              alt="Avatar image"
              className="absolute top-60 left-12 md:left-16 w-24 h-auto transform translate-x-8 translate-y-8 rounded-full"
            /> */}
          </div>
          <div className="w-full md:w-1/2 py-24 flex flex-col items-center text-center">
            <p className="leading-relaxed text-4xl md:text-6xl font-bold text-red-700 w-4/5 md:w-3/5">
              See it, make it, try it, do it
            </p>
            <p className="leading-relaxed text-xl md:text-2xl text-red-700 mt-5 w-4/5 md:w-3/4">
              The best part of Pinterest is discovering new things and ideas
              from people around the world.
            </p>
            <div className="flex mt-6 justify-center">
              <Link
                href="/explore"
                className="px-5 py-4 bg-red-600 text-white text-base font-semibold rounded-full hover:bg-red-700 transition duration-200"
              >
                Explore
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section4;
