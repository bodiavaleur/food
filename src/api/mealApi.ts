import {
  MealIngredientLabel,
  MealAreaLabel,
  MealCategory,
  MealFullInfo,
  MealFilter,
} from "../types/MealTypes";

const axios = require("axios");

const api = axios.create({
  baseURL: "https://www.themealdb.com/api/json/v1/1",
});

export async function searchMealByName(query: string): Promise<MealFilter[]> {
  const { data } = await api.get(`/search.php?s=${query}`);

  if (!data.meals) {
    return [];
  }

  // Change meals data to be in MealFilter shape
  const filteredMeals = data.meals.map((meal: MealFullInfo) => ({
    strMeal: meal.strMeal,
    strMealThumb: meal.strMealThumb,
    idMeal: meal.idMeal,
  }));

  return filteredMeals;
}

export async function findMealById(id: string): Promise<MealFullInfo | null> {
  const { data } = await api.get(`/lookup.php?i=${id}`);
  // If data can't be found by given id then return null
  return data.meals ? data.meals[0] : null;
}

export async function getRandomMeal(): Promise<MealFullInfo> {
  const { data } = await api.get("/random.php");
  return data.meals[0];
}

export async function getAllMealCategories(): Promise<MealCategory[]> {
  const { data } = await api.get("/categories.php");
  return data.categories;
}

export async function getMealListByArea(): Promise<MealAreaLabel[]> {
  const { data } = await api.get("/list.php?a=list");
  return data.meals;
}

export async function getMealListByIngredient(): Promise<
  MealIngredientLabel[]
> {
  const { data } = await api.get("/list.php?i=list");
  return data.meals;
}

export async function filterMealsByIngredient(
  ingredient: string
): Promise<MealFilter[]> {
  const { data } = await api.get(`/filter.php?i=${ingredient}`);
  return data.meals;
}

export async function filterMealsByCategory(
  category: string
): Promise<MealFilter[]> {
  const { data } = await api.get(`/filter.php?c=${category}`);
  return data.meals;
}

export async function filterMealsByArea(area: string): Promise<MealFilter[]> {
  const { data } = await api.get(`/filter.php?a=${area}`);
  return data.meals;
}
