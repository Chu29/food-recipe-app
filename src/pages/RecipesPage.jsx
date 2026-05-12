import { useState } from "react";
import MealDetail from "../components/MealDetail";
import { RecipeCard } from "../components/organisms";
import { RecipesLayout } from "../components/templates";
import { useFoodContext } from "../hooks/useFoodContext";

const RecipesPage = () => {
  const { foodData, toggleFavorite, deleteRecipe, searchRecipe } =
    useFoodContext();
  const [showForm, setShowForm] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [selectedDetailRecipe, setSelectedDetailRecipe] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const normalizedSearchQuery = searchQuery.trim();
  const recipesToRender = normalizedSearchQuery
    ? searchRecipe(normalizedSearchQuery)
    : foodData;

  const handleShowForm = () => {
    setSelectedRecipe(null);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setSelectedRecipe(null);
  };

  const handleEditRecipe = (recipe) => {
    setSelectedRecipe(recipe);
    setShowForm(true);
  };

  const handleOpenRecipeDetail = (recipe) => {
    setSelectedDetailRecipe(recipe);
  };

  const handleCloseRecipeDetail = () => {
    setSelectedDetailRecipe(null);
  };

  const handleDeleteRecipe = (recipeId) => {
    deleteRecipe(recipeId);
  };

  return (
    <RecipesLayout
      showForm={showForm}
      onToggleForm={showForm ? handleCloseForm : handleShowForm}
      recipeToEdit={selectedRecipe}
      searchQuery={searchQuery}
      onSearchQueryChange={setSearchQuery}
    >
      <main className="min-h-[calc(100vh-6rem)] bg-gray-900 text-gray-100 px-4 py-10">
        {recipesToRender.length === 0 ? (
          <div className="mx-auto mt-16 w-[min(92%,42rem)] rounded-2xl border border-dashed border-gray-700 bg-gray-800/60 px-6 py-12 text-center">
            <h2 className="text-2xl font-bold text-white">
              {normalizedSearchQuery ? "No matching recipes" : "No recipes yet"}
            </h2>
            <p className="mt-3 text-gray-400">
              {normalizedSearchQuery
                ? "Try a different search term to find your meal."
                : "Start building your cookbook by adding your first meal."}
            </p>
          </div>
        ) : (
          <div className="grid grid-flow-row md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {recipesToRender.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                data={recipe}
                onToggleFavorite={toggleFavorite}
                onEdit={handleEditRecipe}
                onOpenDetails={handleOpenRecipeDetail}
                onDelete={handleDeleteRecipe}
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
    </RecipesLayout>
  );
};

export default RecipesPage;
