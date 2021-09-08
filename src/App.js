import Expenses from "./components/Expenses";
function App() {
  const expenses = [
    { title: "car", amount: 900, date: new Date(2021, 7, 14) },
    { title: "helicopter", amount: 1500, date: new Date(2021, 4, 14) },
    { title: "mobile", amount: 5600, date: new Date(2021, 2, 14) },
  ];

  return <Expenses expenses={expenses} />;
}

export default App;
