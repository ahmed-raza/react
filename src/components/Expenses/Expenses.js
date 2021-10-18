import React from "react";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

class Expenses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filtered: false,
      selectedFilterYear: new Date().getFullYear().toString(),
      filteredItems: this.props.items,
    };
    this.filterChangeHandler = this.filterChangeHandler.bind(this);
  }

  filterChangeHandler(selectedYear) {
    let filteredResults = this.props.items.filter((expense) => {
      return expense.date.getFullYear().toString() === selectedYear;
    });

    this.setState((prevState) => ({
      filtered: true,
      selectedFilterYear: selectedYear,
      filteredItems: filteredResults,
    }));
  }

  render() {
    return (
      <Card className="expenses">
        <ExpensesFilter
          onChangeFilterYear={this.filterChangeHandler}
          defaultValue={this.state.selectedFilterYear}
        />
        <ExpensesChart expenses={this.state.filteredItems} />
        <ExpensesList
          items={
            !this.state.filtered ? this.props.items : this.state.filteredItems
          }
        />
      </Card>
    );
  }
}

export default Expenses;
