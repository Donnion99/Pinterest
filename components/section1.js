import React from "react";

function Section1() {
  return (
    <>
      <div className="bg-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-white">Your Interests</h2>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Add Interest
            </button>
          </div>
          <div className="mt-4">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                <div className="bg-white rounded-lg shadow-md p-4">
                  <h3 className="text-lg font-semibold mb-2">Interest 1</h3>
                  <p className="text-gray-700">Description of interest 1.</p>
                  <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                    Edit
                  </button>
                </div>
              </div>
              {/* Repeat similar structure for other interests */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section1;
