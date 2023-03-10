import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import { useState } from "react";
import "./Expenses.css";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState('2020');

  const filterChangeHandler = (option) => {
    setSelectedYear(option);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === selectedYear; 
  }); 

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={selectedYear} onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/> 
      </Card>
    </div>
  );
}

export default Expenses;
