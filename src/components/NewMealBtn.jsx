import { Plus } from "lucide-react";
import React from "react";
import { Button } from "./atoms";

const NewMealBtn = ({ handleShowForm }) => {
  return (
    <div className="group">
      <Button
        type="button"
        variant="floating"
        size="floating"
        onClick={handleShowForm}
        aria-label="Add new meal"
      >
        <Plus />
      </Button>
      {/* <span className=" absolute inset-0 group-hover:translate-y-0 ">
        Add Meal
      </span> */}
    </div>
  );
};

export default NewMealBtn;
