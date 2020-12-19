import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { findMealById } from "../../api/mealApi";
import { PageWrapper } from "../../ui/templates";
import { MealInfo } from "../organisms";
import { MealInfoType } from "../../types/MealTypes";

interface MealInfoPageProps {
  id: string;
}

export function MealInfoPage() {
  const [meal, setMeal] = useState<MealInfoType>(null);
  const { id } = useParams<MealInfoPageProps>();

  useEffect(() => {
    findMealById(id).then((data) => setMeal(data));
  }, [id]);

  return <PageWrapper>{meal && <MealInfo meal={meal} />}</PageWrapper>;
}
