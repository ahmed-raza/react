import React from "react";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

class Expenses extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedFilterYear: new Date().getFullYear().toString() };
    this.filterChangeHandler = this.filterChangeHandler.bind(this);
  }

  filterChangeHandler(selectedYear) {
    this.setState({ selectedFilterYear: selectedYear });
  }

  render() {
    const filteredItems = this.props.items.filter((expense) => {
      return (
        expense.date.getFullYear().toString() === this.state.selectedFilterYear
      );
    });

    return (
      <Card className="expenses">
        <ExpensesFilter
          onChangeFilterYear={this.filterChangeHandler}
          defaultValue={this.state.selectedFilterYear}
        />
        <ExpensesChart expenses={filteredItems} />
        <ExpensesList items={filteredItems} />
      </Card>
    );
  }
}

export default Expenses;
