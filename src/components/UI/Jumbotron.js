import React from "react";
import classes from "../Styles/jumbotron.module.css";

const Jumbotron = ({ heading, children }) => {
  return (
    <div className={classes.jumbotron}>
      {heading && <h1 className="display-4">{heading}</h1>}
      <p className="lead">{children}</p>
    </div>
  );
};

export default Jumbotron;
