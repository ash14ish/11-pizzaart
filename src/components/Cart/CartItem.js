import classes from "./CartItem.module.css";
import { TiPlus, TiMinus } from "react-icons/ti";
import { RiDeleteBinLine } from "react-icons/ri";

const CartItem = props => {
  const price = `₹ ${(props.price * props.amount).toFixed(2)}`;

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h3>{props.name}</h3>

        <span className={classes.price}>{price}</span>
      </div>

      <div className={classes["actions-container"]}>
        {props.amount !== 1 ? (
          <TiMinus className={classes.icons} onClick={props.onRemove} />
        ) : (
          <RiDeleteBinLine className={classes.icons} onClick={props.onRemove} />
        )}

        <span className={classes["item-amount"]}>{props.amount}</span>
        <TiPlus className={classes.icons} onClick={props.onAdd} />
      </div>
    </li>
  );
};

export default CartItem;
