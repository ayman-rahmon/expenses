
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import React , {useState} from 'react';

const Expenses = (props) => {

  const [currentDate , setCurrentDate] = useState('') ; 

  const FilteredHandler  = (date) => {
    console.log(date);
    setCurrentDate(date) ; 

  }

  const filteredExpenses = props.items.filter(expense =>{
      return expense.date.getFullYear().toString() === currentDate ; 
  }) ;


  let expenseContent = <p>No Expenses Found.</p>;

  if(filteredExpenses.length > 0 ) {
    expenseContent = filteredExpenses.map(item => <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date}/>)  ;

  }


  return (
    <Card className="expenses">
      <ExpenseFilter value={currentDate} onFilteredHandler={FilteredHandler}/>

      {expenseContent}
      
      {/* {  filteredExpenses.length === 0  ? (<p> nNo Expenses found.</p>) : (filteredExpenses.map(item => <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date}/>)) } */}
      
    </Card>
  );
}

export default Expenses;
