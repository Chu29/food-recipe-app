import { useQuery } from "@tanstack/react-query";
import { createContext } from "react";
import { fetchRecipes } from "../services/recipes.service";

const FoodContext = createContext();

export const FoodContextProvider = ({ children }) => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["foodData"],
    queryFn: () => fetchRecipes(),
  });

  // create context value
  const contextValue = {
    recipes: data,
    isPending,
    isError,
  };

  return (
    <FoodContext.Provider value={contextValue}>{children}</FoodContext.Provider>
  );
};
