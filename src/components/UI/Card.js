import React from "react";
import "./Card.css";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.classes = "card " + props.className;
  }

  render() {
    return <div className={this.classes}>{this.props.children}</div>;
  }
}

export default Card;
