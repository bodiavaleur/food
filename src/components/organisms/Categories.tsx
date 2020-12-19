import React, { useEffect, useState } from "react";
import { getAllMealCategories } from "../../api/mealApi";
import { MealCategory } from "../../types/MealTypes";
import { TopicTitle } from "../../ui/atoms";
import { CategoryItem, CategoryList } from "../../ui/organisms";

export function Categories() {
  const [categories, setCategories] = useState<MealCategory[]>([]);

  useEffect(() => {
    getAllMealCategories().then((data) => setCategories(data));
  }, []);

  return (
    <>
      <TopicTitle>Categories</TopicTitle>
      <CategoryList>
        {categories.map((category: MealCategory) => (
          <CategoryItem
            to={`/filter/category/${category.strCategory}`}
            key={category.idCategory}
            thumb={category.strCategoryThumb}
          >
            {category.strCategory}
          </CategoryItem>
        ))}
      </CategoryList>
    </>
  );
}
