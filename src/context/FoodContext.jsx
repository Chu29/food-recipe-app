import { useMemo } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { FoodContext } from ".";

const toNumber = (value, fallback = 0) => {
  const numericValue = Number(value);
  return Number.isFinite(numericValue) ? numericValue : fallback;
};

const normalizeRecipe = (recipe) => ({
  ...recipe,
  id: toNumber(recipe?.id),
  name: recipe?.name ?? "",
  image: recipe?.image ?? recipe?.images?.[0] ?? "",
  images: Array.isArray(recipe?.images)
    ? recipe.images
    : recipe?.image
      ? [recipe.image]
      : [],
  servings: toNumber(recipe?.servings),
  prepTimeMinutes: toNumber(recipe?.prepTimeMinutes),
  rating: toNumber(recipe?.rating),
  ingredients: Array.isArray(recipe?.ingredients) ? recipe.ingredients : [],
  instructions: Array.isArray(recipe?.instructions) ? recipe.instructions : [],
  isFavorite: Boolean(recipe?.isFavorite ?? recipe?.fav),
});

export const FoodContextProvider = ({ children }) => {
  // Persist user-created recipes in local storage.
  const [foodData, setFoodData] = useLocalStorage("foodData", []);

  const recipes = useMemo(
    () =>
      (Array.isArray(foodData) ? foodData : []).map((recipe) =>
        normalizeRecipe(recipe),
      ),
    [foodData],
  );

  const favoriteRecipes = useMemo(
    () => recipes.filter((recipe) => recipe.isFavorite),
    [recipes],
  );

  const addRecipe = (recipePayload) => {
    setFoodData((prev) => {
      const currentRecipes = Array.isArray(prev) ? prev : [];
      const nextId =
        currentRecipes.length > 0
          ? Math.max(
              ...currentRecipes.map((recipe) => Number(recipe.id) || 0),
            ) + 1 // return the last index and add 1 to it.
          : 1;

      return [
        normalizeRecipe({ ...recipePayload, id: nextId, isFavorite: false }),
        ...currentRecipes,
      ];
    });
  };

  const updateRecipe = (recipeId, recipePayload) => {
    setFoodData((prev) => {
      const currentRecipes = Array.isArray(prev) ? prev : [];

      return currentRecipes.map((recipe) => {
        if (toNumber(recipe.id) !== toNumber(recipeId)) {
          return recipe;
        }

        return normalizeRecipe({
          ...recipe,
          ...recipePayload,
          id: recipe.id,
          isFavorite: recipe.isFavorite,
        });
      });
    });
  };

  const toggleFavorite = (recipeId) => {
    setFoodData((prev) => {
      const currentRecipes = Array.isArray(prev) ? prev : [];

      return currentRecipes.map((recipe) => {
        if (toNumber(recipe.id) !== toNumber(recipeId)) {
          return recipe;
        }

        const nextFavoriteState = !(recipe.isFavorite ?? recipe.fav);

        return {
          ...recipe,
          isFavorite: nextFavoriteState,
          fav: nextFavoriteState,
        };
      });
    });
  };

  // create context value
  const contextValue = {
    foodData: recipes,
    favoriteRecipes,
    addRecipe,
    updateRecipe,
    toggleFavorite,
  };

  return (
    <FoodContext.Provider value={contextValue}>{children}</FoodContext.Provider>
  );
};
