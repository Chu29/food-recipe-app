import React from "react";

const Hero = ({ email, setEmail, handleSubmit }) => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:py-32">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="text-7xl">
              <img className="w-40 h-40" src="./hero.svg" alt="" />
            </div>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-orange-500 bg-clip-text text-transparent">
            Discover Your Next Favorite Recipe
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of food lovers exploring delicious recipes, saving
            favorites, and creating culinary masterpieces at home.
          </p>
          <form className="flex flex-wrap gap-3 max-w-lg mx-auto mb-4">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              type="submit"
              onClick={handleSubmit}
              className="px-10 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all duration-200 shadow-lg hover:shadow-xl flex-1"
            >
              Get Started
            </button>
          </form>
          {/* <p className="text-sm text-gray-400">
            No credit card required • Free forever
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
