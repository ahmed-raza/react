import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import React from "react";

class NewExpense extends React.Component {
  saveExpenseDataHandler = (enteredData) => {
    const expenseData = {
      ...enteredData,
      id: Math.random().toString(),
    };
    this.props.onAddExpense(expenseData);
  };

  render() {
    return (
      <div className="new-expense">
        <ExpenseForm onSaveExpense={this.saveExpenseDataHandler} />
      </div>
    );
  }
}

export default NewExpense;
