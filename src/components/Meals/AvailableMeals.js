import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = props => {
  const mealsList = props.meals.map(meal => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <ul className={classes["meals-list"]}>{mealsList}</ul>
    </section>
  );
};

export default AvailableMeals;
