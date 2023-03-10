import React, {useState} from 'react'; 
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false); 

    const buttonHandler = () => {
      setIsEditing(true); 
    }

    const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData); 
    setIsEditing(false); 
  };

  const isCanceling = () => {
    setIsEditing(false);
  }

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={buttonHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} cancel={isCanceling}/>}
    </div>
  );
};

export default NewExpense;
