import React from 'react'
import '../Styles/Styles.css'

export const TransactionComponent = (props) => {
  const TransactionCell = (props) =>{
    const handleDelete = () => {
      props.deleteTransaction(props.payload.id);
    };
     return(
      <>
        <div className='cell' style={{ color : props.payload?.type==="EXPENSE" ? "#FF5F1F" :"#36454F"}}>
        <span>{props.payload.desc}</span>
        <span>${props.payload.amount}</span>
      </div>
        <button onClick={handleDelete} className='cellButn'>Delete</button>
      </>
    
     )
  } 
  return (
    <div className='ExpanceCardTransactionContainer'>
      Transactions History: 
      {props.transactions?.length
        ? props.transactions.map((payload) => <TransactionCell key={payload.id} payload={payload} deleteTransaction={props.deleteTransaction} />)
        : <span>No transactions found.</span> }
      </div>
  )
}
