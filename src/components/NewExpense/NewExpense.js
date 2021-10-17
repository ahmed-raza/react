import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import React from "react";

class NewExpense extends React.Component {
  render() {
    return (
      <div className="new-expense">
        <ExpenseForm />
      </div>
    );
  }
}

export default NewExpense;
