import React from "react";
import { Button, TextInput } from "./atoms";

const Hero = ({ email, setEmail, handleSubmit }) => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:py-32">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="text-7xl mt-8 md:mt-0">
              <img className="w-40 h-40" src="./hero.svg" alt="" />
            </div>
          </div>
          <h1 className="md:text-5xl text-4xl font-bold mb-6 bg-orange-500 bg-clip-text text-transparent">
            Discover Your Next Favorite Recipe
          </h1>
          <p className="text-l md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of food lovers exploring delicious recipes, saving
            favorites, and creating culinary masterpieces at home.
          </p>
          <form className="flex flex-wrap gap-3 max-w-lg mx-auto mb-4">
            <TextInput
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="mt-0 flex-1 bg-gray-800 placeholder-gray-400"
            />
            <Button type="submit" onClick={handleSubmit} className="flex-1">
              Get Started
            </Button>
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
