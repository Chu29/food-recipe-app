import { Edit, Heart } from "lucide-react";
import { RecipeMetaRow } from "../molecules";

const RecipeCard = ({ data }) => {
  const { image, name, servings, prepTimeMinutes, rating } = data;

  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105 group">
      <div className="relative overflow-hidden h-48">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />

        <div className="flex gap-2 absolute bottom-3 left-3">
          <button className="z-10 w-10 h-10 bg-gray-900/70 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-300 hover:text-red-500 hover:bg-gray-900 transition-all duration-200 cursor-pointer">
            <Heart className="w-5 h-5" />
          </button>
          <button className="z-10 w-10 h-10 bg-gray-900/70 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-300 hover:bg-gray-900 transition-all duration-200 cursor-pointer">
            <Edit className="w-5 h-5" />
          </button>
        </div>

        <div className="absolute inset-0 bg-linear-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="p-5">
        <h2 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors line-clamp-2">
          {name}
        </h2>

        <RecipeMetaRow
          servings={servings}
          prepTimeMinutes={prepTimeMinutes}
          rating={rating}
        />
      </div>
    </div>
  );
};

export default RecipeCard;
