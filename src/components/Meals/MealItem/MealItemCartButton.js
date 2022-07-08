import classes from "./MealItemCartButton.module.css";
import React from "react";
import { useSelector } from "react-redux";

import { BiPlus, BiMinus } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";

const MealItemCartButton = props => {
  const updatedItem = useSelector(state => state.cart.items)?.find(
    item => item.id === props.id
  );

  return (
    <div className={classes.actions}>
      {!updatedItem && (
        <button onClick={props.onAdd} className={classes["actions-button"]}>
          ADD TO CART
        </button>
      )}

      {updatedItem && (
        <div className={classes["actions-container"]}>
          {updatedItem.amount !== 1 ? (
            <BiMinus className={classes.icons} onClick={props.onRemove} />
          ) : (
            <RiDeleteBinLine
              className={classes.icons}
              onClick={props.onRemove}
            />
          )}

          <span className={classes.amount}>{updatedItem.amount}</span>
          <BiPlus className={classes.icons} onClick={props.onAdd} />
        </div>
      )}
    </div>
  );
};

export default MealItemCartButton;
