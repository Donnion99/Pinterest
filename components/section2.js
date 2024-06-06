import React from "react";
import Image from "next/image";

function section2() {
  return (
    <>
      <section className="text-gray-600 body-font w-full py-8">
        <div className="container px-5 mx-auto flex flex-wrap items-center">
          <div className="w-full md:w-1/2">
            <img
              src="https://images.pexels.com/photos/4730662/pexels-photo-4730662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Picture of the author"
              className="rounded-3xl w-3/4 h-auto"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-6 py-24">
            <p className="leading-relaxed text-6xl text-center font-bold text-red-700">
              Search for an idea
            </p>
            <p className="leading-relaxed text-2xl text-center text-red-700 px-12 mt-5">
              What do you want to try next? Think of something you're into--like
              "easy chicken dinner"--and see what you find.
            </p>
            <div className="flex mt-6 justify-center">
              <button className="px-5 py-4 bg-red-600 text-white text-base font-semibold rounded-full hover:bg-red-700 transition duration-200">
                Explore
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default section2;
