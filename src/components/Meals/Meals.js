import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import classes from "./Meals.module.css";

import Error from "../UI/Error";
import { GiFullPizza } from "react-icons/gi";

import { Routes, Route, Navigate } from "react-router-dom";

const AvailableMeals = React.lazy(() => import("./AvailableMeals"));

const Meals = () => {
  const meals = useSelector(state => state.meals);

  const bestSellers = meals.filter(item => item.recommended);
  const newLaunches = meals.filter(item => item.newLaunch);
  const parathaPizza = meals.filter(item => item.type === "paratha-pizza");
  const vegPizza = meals.filter(
    item => item.veg && item.type.includes("pizza")
  );
  const nonVegPizza = meals.filter(
    item => !item.veg && item.type.includes("pizza")
  );
  const beverages = meals.filter(item => item.type === "beverages");
  const dessert = meals.filter(item => item.type === "dessert");
  const mealfor4 = meals.filter(item => item.type === "meal-for-4");

  return (
    <Suspense
      fallback={
        <>
          <GiFullPizza className={classes["spinner"]} />
        </>
      }
    >
      <Routes>
        <Route path="/" element={<Navigate to="bestsellers" />} />

        <Route
          path="bestsellers"
          element={<AvailableMeals meals={bestSellers} />}
        />

        <Route
          path="new-launches"
          element={<AvailableMeals meals={newLaunches} />}
        />

        <Route
          path="paratha-pizza"
          element={<AvailableMeals meals={parathaPizza} />}
        />

        <Route path="veg-pizza" element={<AvailableMeals meals={vegPizza} />} />

        <Route
          path="non-veg-pizza"
          element={<AvailableMeals meals={nonVegPizza} />}
        />

        <Route
          path="beverages"
          element={<AvailableMeals meals={beverages} />}
        />

        <Route path="dessert" element={<AvailableMeals meals={dessert} />} />

        <Route
          path="meal-for-4"
          element={<AvailableMeals meals={mealfor4} />}
        />

        <Route path="*" element={<Error message="Page Not Found" />} />
      </Routes>
    </Suspense>
  );
};

export default Meals;
