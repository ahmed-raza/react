import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Test from "./components/Test";

function App() {
  const expenses = [
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

  return (
    <div className="App">
      <Test name="Ahmed" />
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
