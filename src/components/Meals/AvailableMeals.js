import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = props => {
  const mealsList = props.meals.map(meal => (
    <MealItem meal={meal} key={meal.id} />
  ));

  return (
    <section className={classes.meals}>
      <ul className={classes["meals-list"]}>{mealsList}</ul>
    </section>
  );
};

export default AvailableMeals;
