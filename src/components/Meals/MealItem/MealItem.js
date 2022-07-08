import classes from "./MealItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../redux/cartSlice";

import { BiCheckboxSquare } from "react-icons/bi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import MealItemForm from "./MealItemForm";
import React from "react";

const MealItem = props => {
  const price = `₹${props.meal.price.toFixed(2)}`;

  const dispatch = useDispatch();

  const addToCartHandler = amount => {
    dispatch(
      cartActions.addItem({
        id: props.meal.id,
        name: props.meal.name,
        amount,
        price: props.meal.price,
      })
    );
  };

  return (
    <li className={classes.meal}>
      <div>
        <div className={classes["img-container"]}>
          <img src={props.meal.img} />

          {props.meal.recommended && (
            <div className={classes["recommended-badge"]}>Recommended</div>
          )}

          <AiOutlineHeart />
          <AiFillHeart />
        </div>

        <div
          className={
            props.meal.veg ? classes["veg-icon"] : classes["non-veg-icon"]
          }
        >
          <span>{price}</span>
          <BiCheckboxSquare className={classes["foot-habit-icon"]} />
        </div>

        <h4>{props.meal.name}</h4>
        <p className={classes.description}>{props.meal.description}</p>
      </div>
    </li>
  );
};

export default MealItem;
