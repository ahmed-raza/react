import React from "react";
import classes from "../Styles/card.module.css";

const Card = (props) => {
  return (
    <div className={classes.card}>
      <h2>{props.title}</h2>
      <div className={classes.center}>{props.children}</div>
    </div>
  );
};

export default Card;
