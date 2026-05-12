import { MealMetaItem } from "../atoms";

const MealMetaGrid = ({ servings, prepTimeMinutes, rating }) => {
  return (
    <div className="grid grid-cols-3 gap-3 rounded-xl border border-gray-700 bg-gray-800/60 p-4 text-sm">
      <MealMetaItem label="Servings" value={servings || 0} />
      <MealMetaItem
        label="Prep Time"
        value={`${prepTimeMinutes || 0} mins`}
      />
      <MealMetaItem label="Rating" value={rating || 0} />
    </div>
  );
};

export default MealMetaGrid;
