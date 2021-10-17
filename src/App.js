import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.expenses = this.getExpenses();
  }

  getExpenses() {
    return [
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
  }

  render() {
    return (
      <div className="App">
        <NewExpense />
        <Expenses items={this.expenses} />
      </div>
    );
  }
}

export default App;
