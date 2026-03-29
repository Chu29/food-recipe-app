import { useState } from "react";
import Header from "../components/Header";
import MealDetail from "../components/MealDetail";
import { AddRecipeModal, RecipeCard } from "../components/organisms";
import { useFoodContext } from "../hooks/useFoodContext";

const FavouritesPage = () => {
  const { favoriteRecipes, toggleFavorite } = useFoodContext();
  const [showForm, setShowForm] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [selectedDetailRecipe, setSelectedDetailRecipe] = useState(null);

  const handleEditRecipe = (recipe) => {
    setSelectedRecipe(recipe);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setSelectedRecipe(null);
  };

  const handleOpenRecipeDetail = (recipe) => {
    setSelectedDetailRecipe(recipe);
  };

  const handleCloseRecipeDetail = () => {
    setSelectedDetailRecipe(null);
  };

  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-6rem)] bg-gray-900 text-gray-100 px-4 py-10">
        {favoriteRecipes.length === 0 ? (
          <div className="mx-auto mt-16 w-[min(92%,42rem)] rounded-2xl border border-dashed border-gray-700 bg-gray-800/60 px-6 py-12 text-center">
            <h2 className="text-2xl font-bold text-white">No favorites yet</h2>
            <p className="mt-3 text-gray-400">
              Tap the heart icon on any recipe to save it here.
            </p>
          </div>
        ) : (
          <div className="grid grid-flow-row md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {favoriteRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                data={recipe}
                onToggleFavorite={toggleFavorite}
                onEdit={handleEditRecipe}
                onOpenDetails={handleOpenRecipeDetail}
              />
            ))}
          </div>
        )}

        <MealDetail
          recipe={selectedDetailRecipe}
          isOpen={Boolean(selectedDetailRecipe)}
          onClose={handleCloseRecipeDetail}
        />
      </main>

      {showForm && (
        <AddRecipeModal
          onClose={handleCloseForm}
          recipeToEdit={selectedRecipe}
        />
      )}
    </>
  );
};

export default FavouritesPage;
