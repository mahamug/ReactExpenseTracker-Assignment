import React, { useState } from 'react'
import "../Styles/Styles.css"

export const OverViewComponent = (props) => {
  const AddTransactionView = () =>{
        const[amount,setAmount] = useState('');
         const[desc,setDesc] = useState(''); 
         const[type,setType] = useState("EXPENSE");
          const[errorMessages,setErrorMessages] = useState('')
       const AddTransaction = ()=>{
        if (!amount.trim() || !desc.trim()) {
          setErrorMessages('Please fill in both Amount and Description fields.');
        } else {
          props.addTransaction({ amount: Number(amount), desc, type, id: Date.now() });
          setErrorMessages('');
          setAmount('');
          setDesc('');
        }
           };
           
        
  
    return(
      <div className='AddTransactionContainer'>
      <input  
      placeholder='Amount' 
      value={amount} 
      type='number'
      onChange={(e) =>setAmount(e.target.value)}
      required/>
      <input  
      placeholder='Description' 
      value={desc} 
      onChange={(e) =>setDesc(e.target.value)}
      required />
      <div className='RadioBox'>
        <input 
        type="radio" 
        id='expense' 
        name='type' 
        value= "EXPENSE" 
        checked={type==="EXPENSE"}  
        onChange={(e)=>setType(e.target.value)} />
        <label htmlFor="expense">Expense</label>
        <input 
        type="radio" 
        id='income' 
        name='type' 
        value= "INCOME" 
        checked={type==="INCOME"} 
        onChange={(e)=>setType(e.target.value)}/>
        <label htmlFor="income">Income</label>
      </div>
      <div className='error'>{errorMessages}</div>
      <button onClick={AddTransaction}>Add Transaction</button>
    </div>
    );
  };
  return (
    <div className='ExpanceCardOverViewContainer'>
    <div className='BalanceBox'>Balance: ${props.income - props.expense}
    </div>
    <AddTransactionView
    addTransaction = {props.addTransaction}
    />
    <div className='ExpenseContainer'>
      <div className='ExpenseBox' isIncome={false}>
        Expense<span style={{color:"#FF5F1F"}}>${props.expense}</span>
      </div>
      <div className='ExpenseBox' isIncome={true}>
        Income<span style={{color:"#36454F"}} >${props.income}</span>
      </div>
    </div>
      </div>
  )
}
