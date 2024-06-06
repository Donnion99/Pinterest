import React from "react";
import Image from "next/image";

function section2() {
  return (
    <>
      <section class="text-gray-600 body-font w-full">
        <div class="container px-5 mx-auto flex flex-wrap justify-between  ">
          <Image
            src="https://images.pexels.com/photos/2689419/pexels-photo-2689419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width={350}
            height={350}
            alt="Picture of the author"
            className="rounded-3xl"
          />
          <div class="md:w-3/5 md:pl-6 py-24">
            <p class="leading-relaxed text-6xl text-center font-bold text-red-700 ">
              Search for an idea
            </p>
            <p class="leading-relaxed text-2xl text-center text-red-700 px-12 content-center  mt-5">
              What do you want to try next? Think of something you're into--like
              "easy chiken dinner"--and see what you find.
            </p>
            <div class="flex md:mt-4 mt-6 justify-center">
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
