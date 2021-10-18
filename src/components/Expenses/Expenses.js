import React from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

class Expenses extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedFilterYear: "2020" };
    this.filterChangeHandler = this.filterChangeHandler.bind(this);
  }

  filterChangeHandler(selectedYear) {
    this.setState({
      selectedFilterYear: selectedYear,
    });
  }

  render() {
    return (
      <Card className="expenses">
        <ExpensesFilter
          onChangeFilterYear={this.filterChangeHandler}
          defaultValue={this.state.selectedFilterYear}
        />
        {this.props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            price={expense.price}
            date={expense.date}
          />
        ))}
      </Card>
    );
  }
}

export default Expenses;
