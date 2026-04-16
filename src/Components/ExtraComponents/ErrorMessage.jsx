import React from 'react';
import { useNavigate } from 'react-router';

const ErrorMessage = () => {
    const navigate = useNavigate()
    return (
     
<div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
  <div className="bg-white shadow-xl rounded-2xl p-8 max-w-sm w-full text-center">
    
    {/* Title */}
    <h2 className="text-2xl font-semibold text-red-500 mb-2">
      Oops!
    </h2>

    {/* Message */}
    <p className="text-gray-600 mb-6">
      Something went wrong. Please try again later.
    </p>

    {/* Button */}
    <button
      onClick={() => navigate('/')}
      className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg transition duration-300"
    >
      Back to Home
    </button>

  </div>
</div>
          
    );
};

export default ErrorMessage;