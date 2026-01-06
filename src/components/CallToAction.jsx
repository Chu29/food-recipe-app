import React from "react";

const CallToAction = ({ handleSubmit }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-24 text-center">
      <h2 className="text-4xl font-bold mb-6 text-white">
        Ready to Transform Your Cooking?
      </h2>
      <p className="text-xl text-gray-300 mb-8">
        Start exploring thousands of recipes today. It's free and takes less
        than a minute.
      </p>
      <button
        onClick={handleSubmit}
        className="px-10 py-4 bg-orange-500 text-white text-lg font-semibold rounded-lg hover:bg-orange-600 transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105"
      >
        Start Cooking Now
      </button>
    </div>
  );
};

export default CallToAction;
