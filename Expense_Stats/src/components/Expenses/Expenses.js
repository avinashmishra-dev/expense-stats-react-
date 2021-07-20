import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseChart from "./ExpenseChart";
import ExpenseList from "./ExpenseList";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    // console.log('Expenses.js');
    setFilteredYear(selectedYear);
  };

  const filterExpense = props.items.filter((expense)=>{
    return expense.date.getFullYear().toString() === filteredYear;
  });


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseChart expense = {filterExpense}/>
        <ExpenseList items = {filterExpense}/>
      </Card>
    </div>
  );
};

export default Expenses;
