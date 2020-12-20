import React, { useEffect, useState } from "react";
import { getMealListByArea } from "../../api/mealApi";
import { MealAreaLabel } from "../../types/MealTypes";
import { TopicTitle } from "../../ui/atoms";
import { CategoryItem, CategoryList } from "../../ui/organisms";

export function Cuisines() {
  const [cuisines, setCuisines] = useState<MealAreaLabel[]>([]);
  const path = process.env.PUBLIC_URL;

  useEffect(() => {
    getMealListByArea().then((data) => setCuisines(data));
  }, []);

  return (
    <>
      <TopicTitle>Cuisines</TopicTitle>
      <CategoryList>
        {cuisines.map((cuisine: MealAreaLabel, idx) => (
          <CategoryItem to={`${path}/filter/area/${cuisine.strArea}`} key={idx}>
            {cuisine.strArea}
          </CategoryItem>
        ))}
      </CategoryList>
    </>
  );
}
