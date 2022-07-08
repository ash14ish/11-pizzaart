import React from "react";
import classes from "./LoadingSpinner.module.css";
import { IoMdPizza } from "react-icons/io";

const LoadingSpinner = () => {
  return <IoMdPizza className={classes.spinner} />;
};

export default LoadingSpinner;
