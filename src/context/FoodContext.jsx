import { useMemo } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { FoodContext } from ".";

export const FoodContextProvider = ({ children }) => {
  // Persist user-created recipes in local storage.
  const [foodData, setFoodData] = useLocalStorage("foodData", []);

  const recipes = useMemo(
    () => (Array.isArray(foodData) ? foodData : []), // checking if the passed var is an array - this is just for validation
    [foodData],
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

      return [{ ...recipePayload, id: nextId }, ...currentRecipes];
    });
  };

  // create context value
  const contextValue = {
    foodData: recipes,
    addRecipe,
  };

  return (
    <FoodContext.Provider value={contextValue}>{children}</FoodContext.Provider>
  );
};
