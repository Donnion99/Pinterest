"use client";
import Header_nx from "@/components/header_nx";
import { useState, useEffect } from "react";
import axios from "axios";

function Explore() {
  const [videos, setVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // fectching video
  const fetchImages = async () => {
    for (let i = 0; i < 1; i++) {
      try {
        const response = await axios.get("/videos/", {
          params: {
            query: searchTerm || "Fashion",
          },
        });
        setVideos(response.data.hits);
        // setVideos((prevImages) => [...prevImages, ...response.data.hits]);
        // console.log(response.data);
        // console.log(response.data.photos);
      } catch (error) {
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
      <div className="min-h-screen bg-gray-100 p-6">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {videos?.map((video, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md relative"
              >
                <video controls className="w-full h-96 object-cover rounded-lg">
                  <source src={video.videos.small.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <button
                  onClick={() => handleDownload(video.videoURL, "video.mp4")}
                  className="absolute bottom-4 right-4 bg-blue-500 hover:bg-blue-600 m-2 text-white py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out"
                >
                  Download
                </button>
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 m-2 py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out">
                  Views: {video.views}
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
