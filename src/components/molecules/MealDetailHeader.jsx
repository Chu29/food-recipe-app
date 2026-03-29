import { X } from "lucide-react";

const MealDetailHeader = ({ title, onClose }) => {
  return (
    <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-700 bg-gray-900/95 px-5 py-4 backdrop-blur">
      <h2 className="text-xl font-bold text-white">{title}</h2>
      <button
        type="button"
        onClick={onClose}
        className="rounded-lg p-2 text-gray-300 hover:bg-gray-800 hover:text-white"
        aria-label="Close recipe details"
      >
        <X className="h-5 w-5" />
      </button>
    </div>
  );
};

export default MealDetailHeader;
