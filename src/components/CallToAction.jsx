import React from "react";
import { Button } from "./atoms";

const CallToAction = ({ handleSubmit }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-24 text-center flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-6 text-white">
        Ready to Transform Your Cooking?
      </h2>
      <p className="text-xl text-gray-300 mb-8">
        Start exploring thousands of recipes today. It's free and takes less
        than a minute.
      </p>
      <Button
        onClick={handleSubmit}
        size="lg"
        className="shadow-xl hover:shadow-2xl hover:scale-105"
      >
        Start Cooking Now
      </Button>
    </div>
  );
};

export default CallToAction;
