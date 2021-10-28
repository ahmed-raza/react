import React from "react";
import classes from "./Button.module.css";

class Button extends React.Component {
  render() {
    return (
      <button
        type={this.props.type}
        onClick={this.props.onClick}
        className={`${classes["pull-right"]} ${classes.button}`}
      >
        {this.props.children}
      </button>
    );
  }
}

export default Button;
