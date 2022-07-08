import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { MdShoppingCart } from "react-icons/md";

const HeaderCartButton = props => {
  const cart = useSelector(state => state.cart);
  const [isBtnBumping, setIsBtnBumping] = useState(false);

  const numberOfCartItems = cart.items.reduce(
    (acc, curr) => acc + curr.amount,
    0
  );

  const bumpClass = `${classes.button} ${isBtnBumping ? classes.bump : ""}`;

  useEffect(() => {
    if (cart.items.length === 0) {
      return;
    }

    const timer = setIsBtnBumping(true);
    setTimeout(() => setIsBtnBumping(false), 300);

    return clearTimeout(timer);
  }, [cart.items]);

  return (
    <button onClick={props.onClick} className={bumpClass}>
      <span className={classes.icon}>
        <MdShoppingCart className={classes.icon} />
      </span>
      <span className={classes.text}>View Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
