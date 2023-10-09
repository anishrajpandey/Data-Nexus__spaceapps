import React from "react";

function Skeleton() {
  return (
    <div role="status" className="my-10 animate-pulse">
      <div className="w-full flex-row justify-start">
        <div className="h-6 bg-gray-200 rounded-full dark:bg-gray-700 mb-2 w-72"></div>
        <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-96"></div>
        <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-96 my-1"></div>
        <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-96 mb-4"></div>
        <div className="flex mb-4">
          <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-12 mr-2"></div>
          <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-12 "></div>
        </div>
      </div>
    </div>
  );
}

export default Skeleton;
