import { useQuery } from "@tanstack/react-query";
import { createContext, useContext } from "react";
import { fetchRecipes } from "../services/recipes.service";

const FoodContext = createContext();

export const FoodContextProvider = ({ children }) => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["foodData"],
    queryFn: fetchRecipes,
  });

  // create context value
  const contextValue = {
    data,
    isPending,
    isError,
  };

  return (
    <FoodContext.Provider value={contextValue}>{children}</FoodContext.Provider>
  );
};

export const useFoodContext = () => useContext(FoodContext);
