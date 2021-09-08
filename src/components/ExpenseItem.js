import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "./Card";
// import Moment from "moment";

function ExpenseItem(props) {
  console.log(props);
  return (
    <Card className="expense-item">
      <div className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">{props.amount}</div>
        </div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
