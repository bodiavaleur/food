import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MealFilter } from "../../types/MealTypes";
import { PageWrapper } from "../../ui/templates";
import { Meals } from "../molecules";
import {
  filterMealsByArea,
  filterMealsByCategory,
  filterMealsByIngredient,
} from "../../api/mealApi";

interface MealsPageProps {
  filter: string;
  value: string;
}

export function MealsPage() {
  const [meals, setMeals] = useState<MealFilter[]>([]);
  const { filter, value } = useParams<MealsPageProps>();

  useEffect(() => {
    switch (filter) {
      case "category":
        filterMealsByCategory(value).then((data) => setMeals(data));
        break;
      case "area":
        filterMealsByArea(value).then((data) => setMeals(data));
        break;
      case "ingredient":
        filterMealsByIngredient(value).then((data) => setMeals(data));
        break;
    }
  }, [filter, value]);

  return (
    <PageWrapper>
      <Meals meals={meals} />
    </PageWrapper>
  );
}
