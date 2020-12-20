import React from "react";
import { MealFullInfo } from "../../types/MealTypes";
import {
  TopicTitle,
  TopicSubtitle,
  ImageFull,
  OptionalSubtitle,
  Instructions,
} from "../../ui/atoms";
import { IngredientItem, IngredientList } from "../../ui/molecules";
import { DishDetails } from "../../ui/organisms";

interface MealInfoProps {
  meal: MealFullInfo;
}

export function MealInfo({ meal }: MealInfoProps) {
  // Get value from all 'strIngredient' keys
  const ingredients = Object.keys(meal)
    .map((key) => key.includes("strIngredient") && meal[key])
    .filter(Boolean);
  const path = process.env.PUBLIC_URL;

  return (
    <DishDetails>
      <TopicTitle>{meal.strMeal}</TopicTitle>
      <OptionalSubtitle>{meal.strCategory}</OptionalSubtitle>
      <ImageFull src={meal.strMealThumb} alt={meal.strMeal} />
      <IngredientList>
        {ingredients.map((ingredient, idx) => (
          <IngredientItem
            key={idx}
            to={`${path}/filter/ingredient/${ingredient}`}
          >
            {ingredient}
          </IngredientItem>
        ))}
      </IngredientList>
      <TopicSubtitle>Instructions</TopicSubtitle>
      <Instructions>{meal.strInstructions}</Instructions>
    </DishDetails>
  );
}
