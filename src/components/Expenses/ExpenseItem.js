import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

class ExpenseItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: props.title };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler = () => {
    this.setState({
      title: "Updated!!",
    });
  };

  render() {
    return (
      <Card className="expense-item">
        <ExpenseDate date={this.props.date}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{this.state.title}</h2>
          <div className="expense-item__price">${this.props.price}</div>
          <button onClick={this.clickHandler}>Change Title</button>
        </div>
      </Card>
    );
  }
}

export default ExpenseItem;
