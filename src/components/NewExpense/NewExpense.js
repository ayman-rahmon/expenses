import React , {useState}  from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  const [hidden , setHidden ] = useState(true) ; 

  const toggleShowForm = () =>{
    setHidden(!hidden) ;
  }

  const hideAdditionHandler = ()=>{
    setHidden(!hidden);
    console.log('cancel addition...');
  }

  if(hidden) {
    return (
      <div className='new-expense'>
        <button onClick={toggleShowForm}>Add New Expense</button>
      </div>
       ) ;
  } 


  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onHideAddition={hideAdditionHandler}/>
    </div>
  );
};

export default NewExpense;
