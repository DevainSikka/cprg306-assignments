"use client";
import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  if (!ingredient) return [];
  let link = "https://www.themealdb.com/api/json/v1/1/filter.php?i=" + ingredient;
  console.log(link);
  const response = await fetch(link);
  const data = await response.json();
  return data.meals || [];
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  const loadMealIdeas = async () => {
    const mealIdeas = await fetchMealIdeas(ingredient);
    setMeals(mealIdeas);
  };

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Meal Ideas</h2>
      {ingredient ? (
        <ul className="space-y-3">
          {meals.length > 0 ? (
            meals.map((meal) => (
              <li
                key={meal.idMeal}
                className="p-3 bg-gray-50 rounded-lg shadow-sm flex items-center space-x-4"
              >
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="w-16 h-16 rounded-lg object-cover border border-gray-300"
                />
                <h3 className="text-lg font-semibold text-gray-700">{meal.strMeal}</h3>
              </li>
            ))
          ) : (
            <p className="text-gray-500">No meal ideas found for {ingredient}</p>
          )}
        </ul>
      ) : (
        <p className="text-gray-500">Select an item to see meal ideas</p>
      )}
    </div>
  );
}