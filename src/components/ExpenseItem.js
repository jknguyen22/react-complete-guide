// common convention to name new component file like this
// a component in react is JUST a javascript function

import "./ExpenseItem.css";

function ExpenseItem(props) {
  // may only have one root element per JSX code snippet
  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
