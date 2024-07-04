import React from "react";
import "./section.css"; // Import your CSS file
import "./footer_nx";
import Footer_nx from "./footer_nx";
function Section5() {
  const scrollToSection1 = () => {
    const section1 = document.getElementById("section1");
    if (section1) {
      section1.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <section className="text-gray-600 body-font w-full sectionWithBackground flex justify-center items-center hidden md:block">
        <div className="container mx-auto flex flex-wrap justify-between items-center relative px-4">
          <div className="w-full md:w-1/2 py-24 flex flex-col items-center md:items-start pl-16">
            <p className="leading-relaxed text-4xl md:text-6xl font-semibold text-white my-2 md:my-6 text-center md:text-left">
              Sign up to
            </p>
            <p className="leading-relaxed text-4xl md:text-6xl font-semibold text-white my-2 md:my-6 text-center md:text-left">
              get your
            </p>
            <p className="leading-relaxed text-4xl md:text-6xl font-semibold text-white my-2 md:my-6 text-center md:text-left">
              ideas
            </p>
          </div>
          <div class="absolute top-0 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col justify-items-end h-full justify-center items-center pb-12">
              <a
                class="mt-32 bottom-4 right-4 text-white p-4 rounded-full flex items-center justify-center  transition duration-300 animate-none"
                style={{ backgroundColor: "darkred" }}
                onClick={scrollToSection1}
              >
                <svg
                  fill="#ffffff"
                  height="20px"
                  width="20px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-46.2 -46.2 422.40 422.40"
                  stroke="#ffffff"
                  stroke-width="33"
                  style={{ transform: "rotate(180deg)" }}
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
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="my-10 md:my-20 w-full max-w-md px-4">
              <div className="bg-white p-6 rounded shadow-md w-full">
                <div className="flex justify-center mb-4">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Pinterest-logo.png/600px-Pinterest-logo.png"
                    alt="Pinterest Logo"
                    className="h-12"
                  />
                </div>
                <h1 className="text-2xl font-bold text-center mb-4">
                  Welcome to Pinterest
                </h1>
                <p className="text-center text-gray-600 mb-6">
                  Find new ideas to try
                </p>
                <form>
                  <div className="mb-4 flex justify-center">
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-4/5 px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div className="mb-4 flex justify-center">
                    <input
                      type="password"
                      placeholder="Create a password"
                      className="w-4/5 px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div className="mb-4 flex justify-center">
                    <input
                      type="date"
                      placeholder="dd-mm-yyyy"
                      className="w-4/5 px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="w-4/5 bg-red-600 text-white py-2 rounded hover:bg-red-700"
                    >
                      Continue
                    </button>
                  </div>
                </form>
                <div className="flex items-center my-6">
                  <div className="flex-grow border-t border-gray-300"></div>
                  <div className="px-4 text-gray-500">OR</div>
                  <div className="flex-grow border-t border-gray-300"></div>
                </div>
                <div className="flex justify-center">
                  <button className="w-4/5 flex items-center justify-center bg-gray-100 border border-gray-300 text-gray-700 py-2 rounded hover:bg-gray-200">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                      alt="Google Logo"
                      className="h-6 mr-2"
                    />
                    Continue as Donnion
                  </button>
                </div>
                <p className="text-center text-gray-500 text-sm mt-6">
                  By continuing, you agree to Pinterest's{" "}
                  <a href="#" className="text-blue-500">
                    Terms of Service
                  </a>{" "}
                  and acknowledge you've read our{" "}
                  <a href="#" className="text-blue-500">
                    Privacy Policy
                  </a>
                  .
                </p>
                <p className="text-center text-gray-500 text-sm mt-2">
                  Already a member?{" "}
                  <a href="#" className="text-blue-500">
                    Log in
                  </a>
                </p>
                <p className="text-center text-gray-500 text-sm mt-2">
                  <a href="#" className="text-blue-500">
                    Create a free business account
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer_nx class={"hidden md:block"} />
    </>
  );
}

export default Section5;
