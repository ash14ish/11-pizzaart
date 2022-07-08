import classes from "./MealItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../redux/cartSlice";
import MealItemForm from "./MealItemForm";
import React from "react";

const MealItem = props => {
  const price = `₹${props.price.toFixed(2)}`;

  const dispatch = useDispatch();

  const addToCartHandler = amount => {
    dispatch(
      cartActions.addItem({
        id: props.id,
        name: props.name,
        amount,
        price: props.price,
      })
    );
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
    </li>
  );
};

export default MealItem;
