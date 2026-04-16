import React from "react";

const EmptyMessage = () => {
  return (
    <div className=" container mx-auto flex flex-col items-center justify-center h-64 text-center text-gray-500 bg-white shadow">
      <div className="text-5xl mb-3">💬</div>

      <h2 className="text-lg font-semibold text-gray-700">
         No messages yet
      </h2>

      <p className="text-sm mt-1">
       Start the conversation to see messages here.
      </p>
    </div>
  );
};

export default EmptyMessage;