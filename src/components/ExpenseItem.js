import React from 'react'
// you can include or not the top code
// in the bottom code the reason i dont specify or add the
// import ExpenseItem from "./ExpenseItem.css" because 
// our js components and the css file have the same name
// so it will show an error. that's why i only wrote the 
// import "./ExpenseItem.css"
import "./ExpenseItem.css";

const ExpenseItem = () => {

    const expenseDate= new Date(2022,2,13);
    const expenseTitle= "Car Insurance";
    const expenseAmount = 10000;

    return (

        // the className are like class in javascript
        // but the code use or execution of the code
        // are like in css or html class like a selector i guess? IM NOT SURE
        <div className="expense-item">

           <div>{expenseDate.toISOString()}</div>
           <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">Php{expenseAmount}</div>
           </div>
        </div>
    );
};

export default ExpenseItem;
