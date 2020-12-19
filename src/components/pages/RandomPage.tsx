import React, { useEffect, useState } from "react";
import { getRandomMeal } from "../../api/mealApi";
import { PageWrapper } from "../../ui/templates";
import { MealInfo } from "../organisms";
import { MealInfoType } from "../../types/MealTypes";

export function RandomPage() {
  const [randomMeal, setRandomMeal] = useState<MealInfoType>(null);

  useEffect(() => {
    getRandomMeal().then((data) => setRandomMeal(data));
  }, []);

  return (
    <PageWrapper>{randomMeal && <MealInfo meal={randomMeal} />}</PageWrapper>
  );
}
