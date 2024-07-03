import React from "react";
import "./Section.css"; // Import your CSS file

function Section5() {
  return (
    <>
      <section className="text-gray-600 body-font w-full sectionWithBackground flex justify-center items-center">
        <div className="container mx-auto flex flex-wrap justify-between items-center relative">
          <div className="w-full md:w-1/2 py-24 flex flex-col">
            <p className="leading-relaxed text-5xl md:text-6xl font-semibold text-white my-6">
              Sign up to
            </p>
            <p className="leading-relaxed text-5xl md:text-6xl font-semibold text-white mb-6">
              get your
            </p>
            <p className="leading-relaxed text-5xl md:text-6xl font-semibold text-white">
              ideas
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="relative mt-20">
              <div className="bg-white p-6 rounded shadow-md w-full max-w-xs">
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
                  <div className="mb-4">
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="password"
                      placeholder="Create a password"
                      className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="text"
                      placeholder="dd-mm-yyyy"
                      className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
                  >
                    Continue
                  </button>
                </form>
                <div className="flex items-center my-6">
                  <div className="flex-grow border-t border-gray-300"></div>
                  <div className="px-4 text-gray-500">OR</div>
                  <div className="flex-grow border-t border-gray-300"></div>
                </div>
                <div className="flex justify-center">
                  <button className="w-full flex items-center justify-center bg-gray-100 border border-gray-300 text-gray-700 py-2 rounded hover:bg-gray-200">
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
    </>
  );
}

export default Section5;
