import ExpenseItem from './ExpenseItem'

import './ExpenseList.css'

function ExpensesList(props) {

    
  
    if(props.items.length === 0) {
        return <p>No Items Available </p>;
    } 

    return(
        <ul className="expenses-list">
            {props.items.map(item => <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date}/>) }
        </ul>
    ) ;


} 






export default ExpensesList ;