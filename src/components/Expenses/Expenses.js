import React from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

class Expenses extends React.Component {
  render() {
    return (
      <Card className="expenses">
        <ExpenseItem
          title={this.props.items[0].title}
          date={this.props.items[0].date}
          price={this.props.items[0].price}
        ></ExpenseItem>
        <ExpenseItem
          title={this.props.items[1].title}
          date={this.props.items[1].date}
          price={this.props.items[1].price}
        ></ExpenseItem>
        <ExpenseItem
          title={this.props.items[2].title}
          date={this.props.items[2].date}
          price={this.props.items[2].price}
        ></ExpenseItem>
      </Card>
    );
  }
}

export default Expenses;
