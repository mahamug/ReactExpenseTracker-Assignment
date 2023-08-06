import React from 'react'
import '../Styles/Styles.css'

export const TransactionComponent = (props) => {
  const TransactionCell = (props) =>{
     return(
      <div className='cell' style={{ color : props.payload?.type==="EXPENSE" ? "#FF5F1F" :"#36454F"}}>
        <span>{props.payload.desc}</span>
        <span>${props.payload.amount}</span>
      </div>
     )
  }
  return (
    <div className='ExpanceCardTransactionContainer'>
      Transactions History
      {props.transactions?.length?props.transactions.map((payload)=><TransactionCell payload={payload}/>):""}
      </div>
  )
}
