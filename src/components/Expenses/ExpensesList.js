import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

class ExpensesList extends React.Component {
  render() {
    if (this.props.items.length === 0) {
      return <h2 className="expenses-list__fallback">No expenses found.</h2>;
    }

    return (
      <ul className="expenses-list">
        {this.props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            price={expense.price}
            date={expense.date}
          />
        ))}
      </ul>
    );
  }
}

export default ExpensesList;
