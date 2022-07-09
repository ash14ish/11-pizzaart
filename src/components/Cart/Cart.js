import React, { useState } from "react";
import classes from "./Cart.module.css";

import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../redux/cartSlice";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import { BsCartXFill, BsBagCheck } from "react-icons/bs";
import { GiFullPizza } from "react-icons/gi";

const Cart = props => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const cart = useSelector(state => state.cart);

  const dispatch = useDispatch();

  const subTotal = `${(+cart.totalAmount).toFixed(2)}`;
  const taxes = `${(+subTotal * 0.05).toFixed(2)}`;
  const grandTotal = `${(+(+subTotal + +taxes)).toFixed(2)}`;

  const hasItems = cart.items.length > 0;

  const cartItemRemoveHandler = id => {
    dispatch(cartActions.removeItem(id));
  };

  const cartItemAddHandler = item => {
    dispatch(cartActions.addItem({ ...item, amount: 1 }));
  };

  const userDataHandler = userData => {
    setIsSubmitting(true);

    fetch("https://foodifite-default-rtdb.firebaseio.com/pizza-orders.json", {
      method: "POST",
      body: JSON.stringify({ user: userData, orderedItems: cart.items }),
    });

    setTimeout(() => {
      setIsSubmitting(false);
      dispatch(cartActions.clearCart());
    }, 3000);

    setDidSubmit(true);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cart.items.map(item => {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            image={item.img}
            veg={item.veg}
            onRemove={() => {
              cartItemRemoveHandler(item.id);
            }}
            onAdd={() => {
              cartItemAddHandler(item);
            }}
          />
        );
      })}
    </ul>
  );

  const orderHandler = () => {
    setIsCheckout(!isCheckout);
  };

  const modalActions = (
    <div className={classes.actions}>
      <button onClick={props.onClose} className={classes["button--alt"]}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <>
      {cartItems}

      {!hasItems && (
        <>
          <BsCartXFill className={classes["empty-cart"]} />
          <div className={classes.message}>Cart is empty</div>
        </>
      )}

      {hasItems && (
        <>
          <div className={`${classes.total} ${classes["sub-total"]}`}>
            <span>Subtotal</span>
            <span>₹ {subTotal}</span>
          </div>

          <div className={classes.total}>
            <span>Taxes and Charges</span>
            <span>₹ {taxes}</span>
          </div>

          <div className={`${classes.total} ${classes["grand-total"]}`}>
            <span>Grand Total</span>
            <span>₹ {grandTotal}</span>
          </div>
        </>
      )}

      {isCheckout && (
        <Checkout onOrder={userDataHandler} onCancel={orderHandler} />
      )}

      {!isCheckout && modalActions}
    </>
  );

  const isSubmittingLoader = (
    <>
      <GiFullPizza className={classes["submit-spinner"]} />
      <p className={classes.message}>Confirming Order</p>
    </>
  );

  const checkoutMessage = (
    <>
      <span className={classes.success}>
        <BsBagCheck className={classes["order-icon"]} />
        <p>Order Placed.</p>
      </span>
      <div className={classes.actions}>
        <button onClick={props.onClose} className={classes.button}>
          Close
        </button>
      </div>
    </>
  );

  return (
    <Modal onClick={props.onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingLoader}
      {!isSubmitting && didSubmit && checkoutMessage}
    </Modal>
  );
};

export default Cart;
