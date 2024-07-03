"use client";
import Header_nx from "@/components/header_nx";
import { useState, useEffect } from "react";
import axios from "axios";

function Explore() {
  const [videos, setVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  // fectching video
  const fetchImages = async () => {
    for (let i = 0; i < 1; i++) {
      try {
        setLoading(true);
        const response = await axios.get("/videos/", {
          params: {
            query: searchTerm || "Fashion",
          },
        });
        setVideos(response.data.hits);
        setLoading(false);
        // setVideos((prevImages) => [...prevImages, ...response.data.hits]);
        // console.log(response.data);
        // console.log(response.data.photos);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching Videos:", error);
      }
    }
  };

  // download Videos
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
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {loading ? (
              <div className="flex justify-center items-center h-screen">
                <button type="button" class="bg-light ">
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
              videos?.map((video, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-lg relative hover:shadow-xl transition duration-300 ease-in-out"
                >
                  <div
                    className="relative"
                    style={{ height: "180px", width: "100%" }}
                  >
                    <img
                      src={video.videos.large.thumbnail}
                      alt="Video Thumbnail"
                      className="w-full h-full object-cover rounded-lg"
                      style={{ height: "180px", width: "100%" }}
                    />
                    <video
                      controls
                      className="absolute inset-0 w-full h-full opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg"
                    >
                      <source src={video.videos.small.url} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <button
                      onClick={() =>
                        handleDownload(video.videoURL, "video.mp4")
                      }
                      className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out"
                    >
                      Download
                    </button>
                    <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out">
                      Views: {video.views}
                    </button>
                  </div>
                </div>
              ))
            )}
          </div> */}
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
            {videos?.map((video, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-lg relative hover:shadow-xl transition duration-300 ease-in-out"
              >
                <div
                  className="relative"
                  style={{ height: "180px", width: "100%" }}
                >
                  <img
                    src={video.videos.large.thumbnail}
                    alt="Video Thumbnail"
                    className="w-full h-full object-cover rounded-lg"
                    style={{ height: "180px", width: "100%" }}
                  />
                  <video
                    controls
                    className="absolute inset-0 w-full h-full opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg"
                  >
                    <source src={video.videos.small.url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <button
                    onClick={() => handleDownload(video.videoURL, "video.mp4")}
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out"
                  >
                    Download
                  </button>
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out">
                    Views: {video.views}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Explore;
