// src/Slideshow.js
import React, { useState, useEffect } from "react";

const Slideshow = ({ slides, interval = 3000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const Color = ["#ed8936", "#4299e1", "#84cc16", "#38a169"];

  const scrollToSection2 = () => {
    const section2 = document.getElementById("section2");
    if (section2) {
      section2.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [interval, slides.length]);

  return (
    <>
      <div className="slideshow-container text-center hidden md:block relative h-4/5 pt-20">
        <p className="text-6xl text-black font-sans font-semibold text-center pt-4 pb-7 ">
          Get your next
        </p>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
            style={{ color: Color[currentSlide] }}
          >
            {slide}
          </div>
        ))}
        <div className="navigation">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`nav-button ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
              style={index === currentSlide ? { background: Color[index] } : {}}
            />
          ))}
        </div>
        <div class=" bg-white ">
          <div className="flex flex-col justify-items-end h-full justify-center items-center pb-12">
            <a
              class="mt-20 bottom-8 right-8 text-white p-4 rounded-full flex items-center justify-center  transition duration-300 animate-up-down"
              style={{ backgroundColor: Color[currentSlide] }}
              onClick={scrollToSection2}
            >
              <svg
                fill="#ffffff"
                height="30px"
                width="30px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-46.2 -46.2 422.40 422.40"
                stroke="#ffffff"
                stroke-width="33"
                transform="matrix(-1, 0, 0, 1, 0, 0)"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke="#CCCCCC"
                  stroke-width="1.98"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    id="XMLID_225_"
                    d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                  ></path>{" "}
                </g>
              </svg>
            </a>{" "}
          </div>
          <br />
          <br />
        </div>
      </div>
      <div
        className="bg-yellow-200 w-full py-6 flex flex-row justify-center items-center bottom-0 relative "
        onClick={scrollToSection2}
      >
        <a className="font-bold text-xl">Here’s how it works</a>
        <svg
          aria-label="arrow down icon"
          class="Uvi gUZ U9O kVc ml-2"
          height="12"
          role="img"
          viewBox="0 0 24 24"
          width="12"
        >
          <path d="M20.16 6.65 12 14.71 3.84 6.65a2.27 2.27 0 0 0-3.18 0 2.2 2.2 0 0 0 0 3.15L12 21 23.34 9.8a2.2 2.2 0 0 0 0-3.15 2.26 2.26 0 0 0-3.18 0"></path>
        </svg>
      </div>
    </>
  );
};

export default Slideshow;
