"use client";
import Header_nx from "@/components/header_nx";
import { useState, useEffect } from "react";
import axios from "axios";

function Explore() {
  const [images, setImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  // fectching images
  const fetchImages = async () => {
    for (let i = 0; i < 1; i++) {
      try {
        setLoading(true);
        const response = await axios.get("/images/", {
          params: {
            query: searchTerm || "Nature",
          },
        });
        setImages(response.data.hits);
        setLoading(false);
        // setImages((prevImages) => [...prevImages, ...response.data.hits]);
        // console.log(response.data);
        // console.log(response.data.photos);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching images:", error);
      }
    }
  };

  // download image
  const handleDownload = (url, filename) => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", filename);
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      })
      .catch((error) => console.error("Error downloading image:", error));
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <>
      <Header_nx />

      <div className="min-h-screen bg-gray-100 p-6 mt-44 md:mt-0">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-6">Explore</h1>
          <div className="flex justify-center mb-6">
            <input
              type="text"
              className="p-2 border border-gray-300 rounded-lg w-1/2"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              onClick={fetchImages}
              className="inset-y-0 right-0 px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none"
            >
              Search
            </button>
          </div>
          {loading ? (
            <div className="flex justify-center items-center">
              <button type="button" className="bg-light ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                  <radialGradient
                    id="a12"
                    cx=".66"
                    fx=".66"
                    cy=".3125"
                    fy=".3125"
                    gradientTransform="scale(1.5)"
                  >
                    <stop offset="0" stop-color="#000000"></stop>
                    <stop
                      offset=".3"
                      stop-color="#000000"
                      stop-opacity=".9"
                    ></stop>
                    <stop
                      offset=".6"
                      stop-color="#000000"
                      stop-opacity=".6"
                    ></stop>
                    <stop
                      offset=".8"
                      stop-color="#000000"
                      stop-opacity=".3"
                    ></stop>
                    <stop
                      offset="1"
                      stop-color="#000000"
                      stop-opacity="0"
                    ></stop>
                  </radialGradient>
                  <circle
                    transform-origin="center"
                    fill="none"
                    stroke="url(#a12)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-dasharray="200 1000"
                    stroke-dashoffset="0"
                    cx="100"
                    cy="100"
                    r="50"
                  >
                    <animateTransform
                      type="rotate"
                      attributeName="transform"
                      calcMode="spline"
                      dur="1.6"
                      values="360;0"
                      keyTimes="0;1"
                      keySplines="0 0 1 1"
                      repeatCount="indefinite"
                    ></animateTransform>
                  </circle>
                  <circle
                    transform-origin="center"
                    fill="none"
                    opacity=".2"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    cx="100"
                    cy="100"
                    r="50"
                  ></circle>
                </svg>
                loading
              </button>
            </div>
          ) : (
            ""
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images?.map((image, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md relative"
              >
                <img
                  src={image.largeImageURL}
                  alt={image.tags}
                  className="w-full h-96 object-cover rounded-lg"
                />
                <button
                  onClick={() =>
                    handleDownload(image.largeImageURL, "image.jpg")
                  }
                  className="absolute bottom-4 right-4 bg-blue-500 hover:bg-blue-600 m-2 text-white py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out"
                >
                  Download
                </button>
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 m-2 py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out">
                  Likes: {image.likes}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Explore;
