import { useQuery } from "@tanstack/react-query";
import { createContext, useContext, useEffect } from "react";
import { fetchRecipes } from "../services/recipes.service";
import { useLocalStorage } from "../hooks/useLocalStorage";

const FoodContext = createContext();

export const FoodContextProvider = ({ children }) => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["foodData"],
    queryFn: () => fetchRecipes(),
  });

  // use local storage to persist data
  const [foodData, setFoodData] = useLocalStorage("foodData", null);

  // Sync API data to localStorage when it's received
  useEffect(() => {
    if (data && !isPending) {
      setFoodData(data);
    }
  }, [data, isPending, setFoodData]);

  // create context value
  const contextValue = {
    foodData: foodData || data, // Use localStorage data if available, otherwise use API data
    setFoodData,
    isPending,
    isError,
  };

  return (
    <FoodContext.Provider value={contextValue}>{children}</FoodContext.Provider>
  );
};

export const useFoodContext = () => useContext(FoodContext);
