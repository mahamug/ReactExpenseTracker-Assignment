import React, { useEffect, useState } from 'react'
import '../Styles/Styles.css'
import { OverViewComponent } from './OverViewComponent'
import { TransactionComponent } from './TransactionComponent'

export const Home = () => {
  const[transactions,updateTransactions] = useState([])
  const[expense,setExpense] = useState(0)
  const[income,setIncome] = useState(0)

  const addTransaction =(payload)=>{
  const transactionArray = [...transactions]
  transactionArray.push(payload);
  updateTransactions(transactionArray)
  }
  
  const calculateBalance = () =>{
    let exp = 0;
    let inc = 0;
    transactions.map((payload)=>{
      payload.type ==="EXPENSE" ? (exp=exp+payload.amount) : (inc=inc+payload.amount)
    });
    setExpense(exp);
    setIncome(inc);
  };

  useEffect(()=>calculateBalance(),[transactions]);
  return (
    <div className='ExpanceCardContainer'>
      <OverViewComponent addTransaction={addTransaction} expense={expense} income={income}/>
      <TransactionComponent transactions={transactions}/>
    </div>
  )
}
