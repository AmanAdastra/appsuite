import React from "react";

const LoadingSpinner = () => {
  return (
    <>
      <div>
        <div className="flex items-center justify-center h-screen">
          <div className="flex flex-col items-center justify-center h-full">
            <div className="flex items-center justify-center w-16 h-16 mb-4">
              <div className="w-8 h-8 border-t-2 border-b-2 border-indigo-500 rounded-full animate-spin"></div>
            </div>
            <div className="text-xl font-semibold text-gray-500">
              Loading...
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadingSpinner;
