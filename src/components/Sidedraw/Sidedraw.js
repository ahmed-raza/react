import React from "react";
import Card from "../UI/Card";
import classes from "./Sidedraw.module.css";

class Sidedraw extends React.Component {
  render() {
    return (
      <Card
        className={`${classes.sidedraw} ${
          this.props.openSidedraw ? classes.open : ""
        }`}
      >
        <ul>
          <li>
            <a href="/#">Home</a>
          </li>
          <li>
            <a href="/#">About</a>
          </li>
          <li>
            <a href="/#">Contact</a>
          </li>
        </ul>
      </Card>
    );
  }
}

export default Sidedraw;
