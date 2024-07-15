import React from "react";
import "../section.css"; // Import your CSS file
import { useUser } from "@auth0/nextjs-auth0/client";

const PinterestWelcome = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 md:hidden signup-bg text-white">
      <div className="text-center">
        <div className="flex justify-center items-center mt-4 text-white">
          <svg
            height="40px"
            width="40px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-51.2 -51.2 614.40 614.40"
            fill="#000000"
            stroke="#000000"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0">
              <rect
                x="-51.2"
                y="-51.2"
                width="614.40"
                height="614.40"
                rx="307.2"
                fill="#000000"
                strokewidth="0"
              ></rect>
            </g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                style={{ fill: "#ffffff" }}
                d="M405.017,52.467C369.774,18.634,321.001,0,267.684,0C186.24,0,136.148,33.385,108.468,61.39 c-34.114,34.513-53.675,80.34-53.675,125.732c0,56.993,23.839,100.737,63.76,117.011c2.68,1.098,5.377,1.651,8.021,1.651 c8.422,0,15.095-5.511,17.407-14.35c1.348-5.071,4.47-17.582,5.828-23.013c2.906-10.725,0.558-15.884-5.78-23.353 c-11.546-13.662-16.923-29.817-16.923-50.842c0-62.451,46.502-128.823,132.689-128.823c68.386,0,110.866,38.868,110.866,101.434 c0,39.482-8.504,76.046-23.951,102.961c-10.734,18.702-29.609,40.995-58.585,40.995c-12.53,0-23.786-5.147-30.888-14.121 c-6.709-8.483-8.921-19.441-6.222-30.862c3.048-12.904,7.205-26.364,11.228-39.376c7.337-23.766,14.273-46.213,14.273-64.122 c0-30.632-18.832-51.215-46.857-51.215c-35.616,0-63.519,36.174-63.519,82.354c0,22.648,6.019,39.588,8.744,46.092 c-4.487,19.01-31.153,132.03-36.211,153.342c-2.925,12.441-20.543,110.705,8.618,118.54c32.764,8.803,62.051-86.899,65.032-97.713 c2.416-8.795,10.869-42.052,16.049-62.495c15.817,15.235,41.284,25.535,66.064,25.535c46.715,0,88.727-21.022,118.298-59.189 c28.679-37.02,44.474-88.618,44.474-145.282C457.206,127.983,438.182,84.311,405.017,52.467z"
              ></path>{" "}
            </g>
          </svg>
        </div>
        <div className="text-center p-8">
          <h1 className="text-4xl font-extrabold mb-2 text-white">
            Welcome to Pinterest
          </h1>
          <sub className="text-lg text-gray-200">
            Made By Kunal Khude{" "}
            <span role="img" aria-label="heart">
              ❤️
            </span>
          </sub>
        </div>

        <button className="w-full bg-red-600 text-white py-2 px-4 rounded-md mb-3">
          <a href="/api/auth/login">Continue with email</a>
        </button>
        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md mb-3">
          <a href="/api/auth/login"> Continue with Google </a>
        </button>
        <div className=" mb-3 text-white">
          Already a member?{" "}
          <a href="/api/auth/login" className="text-white">
            {" "}
            Log in
          </a>
        </div>
        <div className="text-white mb-3">
          Are you a business?{" "}
          <a href="/api/auth/login" className="text-white">
            Get started here
          </a>
        </div>
        <div className="text-white text-sm">
          By continuing, you agree to Pinterest's{" "}
          <a href="#" className="text-white">
            Terms of Service
          </a>{" "}
          and acknowledge you've read our{" "}
          <a href="#" className="text-white">
            Privacy Policy
          </a>
          .
        </div>
      </div>
    </div>
  );
};

export default PinterestWelcome;
