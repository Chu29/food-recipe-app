import { useState } from "react";
import { RecipeCard } from "../components/organisms";
import { RecipesLayout } from "../components/templates";
import { useFoodContext } from "../hooks/useFoodContext";

const RecipesPage = () => {
  const { foodData } = useFoodContext();
  // handle form popup
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  return (
    <RecipesLayout showForm={showForm} onToggleForm={handleShowForm}>
      <>
        {foodData.length === 0 ? (
          <div className="mx-auto mt-16 w-[min(92%,42rem)] rounded-2xl border border-dashed border-gray-700 bg-gray-800/60 px-6 py-12 text-center">
            <h2 className="text-2xl font-bold text-white">No recipes yet</h2>
            <p className="mt-3 text-gray-400">
              Start building your cookbook by adding your first meal.
            </p>
          </div>
        ) : (
          <div className="grid grid-flow-row md:grid-cols-2 lg:grid-cols-4 gap-8 p-8 max-w-7xl mx-auto">
            {foodData.map((recipe) => (
              <RecipeCard key={recipe.id} data={recipe} />
            ))}
          </div>
        )}
      </>
    </RecipesLayout>
  );
};

export default RecipesPage;
