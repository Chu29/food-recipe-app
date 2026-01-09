import { Plus } from "lucide-react";
import React from "react";

const NewMealBtn = () => {
  return (
    <div className=" group ">
      <Plus className="fixed bottom-8 right-8 w-16 h-16 bg-orange-500 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-orange-600 transition-colors duration-200 cursor-pointer" />
      {/* <span className=" absolute inset-0 group-hover:translate-y-0 ">
        Add Meal
      </span> */}
    </div>
  );
};

export default NewMealBtn;
