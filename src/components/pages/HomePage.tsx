import React, { useEffect, useState } from "react";
import { searchMealByName } from "../../api/mealApi";
import { MealFilter } from "../../types/MealTypes";
import { Input } from "../../ui/atoms";
import { PageWrapper } from "../../ui/templates";
import { Meals } from "../molecules";

export function HomePage() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [meals, setMeals] = useState<MealFilter[]>([]);

  const handleInputSearch = (evt: React.ChangeEvent<HTMLInputElement>) =>
    setSearchQuery(evt.target.value);

  useEffect(() => {
    searchMealByName(searchQuery).then((data) => setMeals(data));
  }, [searchQuery]);

  return (
    <PageWrapper>
      <Input placeholder='Search' onChange={handleInputSearch} />
      <Meals meals={meals} />
    </PageWrapper>
  );
}
