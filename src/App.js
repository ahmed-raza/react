import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    price: "294.67",
    date: new Date(2021, 9, 13),
  },
  {
    id: "e2",
    title: "Doctor Fee",
    price: "312.67",
    date: new Date(2021, 5, 8),
  },
  {
    id: "e3",
    title: "Grocery",
    price: "321.67",
    date: new Date(2021, 8, 24),
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { expenses: DUMMY_EXPENSES };
    this.addExpenseHandler = this.addExpenseHandler.bind(this);
  }

  addExpenseHandler(expense) {
    this.setState({ expenses: [expense, ...this.state.expenses] });
  }

  render() {
    return (
      <div className="App">
        <NewExpense onAddExpense={this.addExpenseHandler} />
        <Expenses items={this.state.expenses} />
      </div>
    );
  }
}

export default App;
