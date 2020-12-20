import React from "react";
import { MealFilter } from "../../types/MealTypes";
import { ImagePreview, PreviewName } from "../../ui/atoms";
import { DishList, DishListItem } from "../../ui/organisms";

interface MealsProps {
  meals: MealFilter[];
}

export function Meals({ meals }: MealsProps) {
  const path = process.env.PUBLIC_URL;
  const formatOverflow = (name: string) => {
    if (name.length > 20) {
      return name.slice(0, 20) + "...";
    }

    return name;
  };

  return (
    <>
      <DishList>
        {meals.map((meal) => (
          <DishListItem key={meal.idMeal} to={`${path}/meal/${meal.idMeal}`}>
            <ImagePreview src={meal.strMealThumb} alt={meal.strMeal} />
            <PreviewName>{formatOverflow(meal.strMeal)}</PreviewName>
          </DishListItem>
        ))}
      </DishList>
    </>
  );
}
