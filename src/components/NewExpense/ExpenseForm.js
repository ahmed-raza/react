import React from "react";
import "./ExpenseForm.css";

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { enteredTitle: "", enteredAmount: "", enteredDate: "" };

    this.titleChangeHandler = this.titleChangeHandler.bind(this);
    this.amountChangeHandler = this.amountChangeHandler.bind(this);
    this.dateChangeHandler = this.dateChangeHandler.bind(this);
    this.formSubmitHandler = this.formSubmitHandler.bind(this);
  }

  titleChangeHandler(event) {
    this.setState({
      enteredTitle: event.target.value,
    });
  }

  amountChangeHandler(event) {
    this.setState({
      enteredAmount: event.target.value,
    });
  }

  dateChangeHandler(event) {
    this.setState({
      enteredDate: event.target.value,
    });
  }

  formSubmitHandler(event) {
    event.preventDefault();

    const expenseData = {
      title: this.state.enteredTitle,
      price: +this.state.enteredAmount,
      date: new Date(this.state.enteredDate),
    };

    this.props.onSaveExpense(expenseData);
    this.props.onCancel();
    this.setState({ enteredTitle: "", enteredAmount: "", enteredDate: "" });
  }

  render() {
    return (
      <form onSubmit={this.formSubmitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={this.state.enteredTitle}
              onChange={this.titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={this.state.enteredAmount}
              onChange={this.amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              value={this.state.enteredDate}
              onChange={this.dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={this.props.onCancel}>
            Cancel
          </button>
          <button type="submit"> Add Expense</button>
        </div>
      </form>
    );
  }
}

export default ExpenseForm;
