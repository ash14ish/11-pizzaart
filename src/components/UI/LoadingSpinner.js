import React from "react";
import classes from "./LoadingSpinner.module.css";
import { GiFullPizza } from "react-icons/gi";

const LoadingSpinner = () => {
  return <GiFullPizza className={classes.spinner} />;
};

export default LoadingSpinner;
