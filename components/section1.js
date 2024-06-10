import React from "react";
import Slideshow from "./slideshow";
function Section1() {
  const slides = [
    <div className="slide-content  text-6xl font-sans font-semibold">
      chai time snacks idea
    </div>,
    <div className="slide-content  text-6xl font-sans font-semibold">
      home decor idea
    </div>,
    <div className="slide-content  text-6xl font-sans font-semibold">
      outfit idea
    </div>,
    <div className="slide-content  text-6xl font-sans font-semibold">
      DIY idea
    </div>,
  ];

  return (
    <>
      {" "}
      <section className="text-gray-600 body-font">
        <p className="text-6xl font-sans font-semibold text-center pb-10">
          Get your next
        </p>
        <Slideshow slides={slides} interval={2000} />
      </section>
    </>
  );
}

export default Section1;
