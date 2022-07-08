import React from "react";

import classes from "./Error.module.css";
import { BsEmojiFrown } from "react-icons/bs";

const Error = props => {
  return (
    <div className={classes["error-container"]}>
      <BsEmojiFrown className={classes.error} />
      <div className={classes.message}>{props.message}</div>
    </div>
  );
};

export default Error;
