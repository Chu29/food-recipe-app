import { api } from "./api";

export const fetchRecipes = async () => {
  try {
    const res = await api.get("").json();
    return res.recipes;
  } catch (error) {
    console.error("Error fetching recipes:", error);
  }
};

export const searchRecipes = async (query) => {
  try {
    const res = await api
      .get("search", {
        searchParams: {
          q: query,
        },
      })
      .json();
    return res;
  } catch (error) {
    console.error("Error searching recipe", error);
  }
};
