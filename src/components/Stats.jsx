import React from "react";

const Stats = () => {
  return (
    <div className="bg-linear-to-r from-orange-500/10 to-red-500/10 py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-5xl font-bold text-orange-400 mb-2">5K+</div>
            <div className="text-gray-300">Recipes Available</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-orange-400 mb-2">50K+</div>
            <div className="text-gray-300">Active Users</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-orange-400 mb-2">4.9★</div>
            <div className="text-gray-300">Average Rating</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
