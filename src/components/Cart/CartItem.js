import classes from "./CartItem.module.css";
import { TiPlus, TiMinus } from "react-icons/ti";
import { RiDeleteBinLine } from "react-icons/ri";

const CartItem = props => {
  const price = `₹ ${(props.price * props.amount).toFixed(2)}`;

  return (
    <li className={classes["cart-item"]}>
      <div className={classes["image-container"]}>
        <img src={props.image} />
      </div>

      <div className={classes["cart-item-description"]}>
        <h3>{props.name}</h3>

        <div className={classes["cart-item-amount"]}>
          <div className={classes["actions-container"]}>
            {props.amount !== 1 ? (
              <TiMinus className={classes.icons} onClick={props.onRemove} />
            ) : (
              <RiDeleteBinLine
                className={classes.icons}
                onClick={props.onRemove}
              />
            )}

            <span className={classes["item-amount"]}>{props.amount}</span>

            <TiPlus className={classes.icons} onClick={props.onAdd} />
          </div>

          <span className={classes.price}>{price}</span>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
