import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import React , {useState} from 'react';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {

  const [currentDate , setCurrentDate] = useState('') ; 

  const FilteredHandler  = (date) => {
    console.log(date);
    setCurrentDate(date) ; 
  }

  const filteredExpenses = props.items.filter(expense =>{
      return expense.date.getFullYear().toString() === currentDate ; 
  });


  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter value={currentDate} onFilteredHandler={FilteredHandler}/>
        <ExpensesList items={filteredExpenses} />
        {/* {  filteredExpenses.length === 0  ? (<p> nNo Expenses found.</p>) : (filteredExpenses.map(item => <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date}/>)) } */}        
      </Card>
    </div>
  );
}

export default Expenses;
