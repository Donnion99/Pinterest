import React from "react";
import Image from "next/image";
import Link from "next/link";

function Section2() {
  return (
    <section className="text-gray-600 body-font w-full py-8">
      <div className="container px-5 mx-auto flex flex-wrap items-center justify-center">
        <div className="w-full md:w-1/2">
          {/* Use Next.js Image component */}
          <div className="relative w-1/2 mx-auto">
            <Image
              src="https://images.pexels.com/photos/4730662/pexels-photo-4730662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Picture of the author"
              layout="responsive"
              width={100}
              height={100}
              className="rounded-3xl"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 md:pl-6 py-24">
          <p className="md:leading-relaxed leading-snug text-6xl text-center font-bold text-red-700">
            Search for an idea
          </p>
          <p className="leading-relaxed text-2xl text-center text-red-700 px-12 mt-5">
            What do you want to try next? Think of something you're into--like
            "easy chicken dinner"--and see what you find.
          </p>
          <div className="flex mt-6 justify-center">
            <button className="px-5 py-4 bg-red-600 text-white text-base font-semibold rounded-full hover:bg-red-700 transition duration-200">
              <Link href="/explore">Explore</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section2;
