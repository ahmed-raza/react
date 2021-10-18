import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import React from "react";

class NewExpense extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showForm: false };
    this.formHandler = this.formHandler.bind(this);
  }

  formHandler() {
    this.setState((prevState) => ({
      showForm: !prevState.showForm,
    }));
  }

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
        {!this.state.showForm && (
          <button onClick={this.formHandler}>Add New Expense</button>
        )}
        {this.state.showForm && (
          <ExpenseForm
            onCancel={this.formHandler}
            onSaveExpense={this.saveExpenseDataHandler}
          />
        )}
      </div>
    );
  }
}

export default NewExpense;
