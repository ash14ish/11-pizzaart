import classes from "./MealItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../redux/cartSlice";
import MealItemForm from "./MealItemForm";
import React from "react";
import Image from "../../../asssets/Indi-T.jpg";

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
        <img src={Image} />
        <div className={classes.price}>{price}</div>
        <h4>{props.name}</h4>
        <p className={classes.description}>{props.description}</p>
      </div>
    </li>
  );
};

export default MealItem;
