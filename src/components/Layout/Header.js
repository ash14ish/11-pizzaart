import React from "react";
import classes from "./Header.module.css";
import { IoMdPizza } from "react-icons/io";

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h2>
          Explore Menu <IoMdPizza className={classes["pizza-icon"]} />
        </h2>
      </header>
    </>
  );
};

export default Header;
