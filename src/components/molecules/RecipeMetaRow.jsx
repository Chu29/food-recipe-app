import { Star, Timer, Users } from "lucide-react";

const RecipeMetaRow = ({ servings, prepTimeMinutes, rating }) => {
  return (
    <div className="flex items-center justify-between text-sm text-gray-400">
      <div className="flex items-center gap-2">
        <Users className="w-4 h-4" />
        <span>{servings} servings</span>
      </div>
      <div className="flex items-center gap-2">
        <Timer className="w-4 h-4" />
        <span>{prepTimeMinutes} mins</span>
      </div>
      <div className="flex items-center gap-2">
        <Star className="w-4 h-4" />
        <span>{rating}</span>
      </div>
    </div>
  );
};

export default RecipeMetaRow;
