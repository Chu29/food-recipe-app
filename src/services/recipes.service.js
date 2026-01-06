import { api } from "./api";

export const fetchRecipes = async () => {
  try {
    const res = await api.get("all").json();
    return res.recipes;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    throw error;
  }
};
