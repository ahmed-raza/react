import React from "react";
import "./ExpenseForm.css";

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { enteredTitle: "", enteredPrice: "", enteredDate: "" };

    this.titleChangeHandler = this.titleChangeHandler.bind(this);
    this.priceChangeHandler = this.priceChangeHandler.bind(this);
    this.dateChangeHandler = this.dateChangeHandler.bind(this);
  }

  titleChangeHandler(event) {
    this.setState({
      enteredTitle: event.target.value,
    });
  }

  priceChangeHandler(event) {
    this.setState({
      enteredPrice: event.target.value,
    });
  }

  dateChangeHandler(event) {
    this.setState({
      enteredDate: event.target.value,
    });
  }

  render() {
    return (
      <form>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" onChange={this.titleChangeHandler} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={this.priceChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              onChange={this.dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit"> Add Expense</button>
        </div>
      </form>
    );
  }
}

export default ExpenseForm;
