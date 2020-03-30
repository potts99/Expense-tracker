import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


export const Addtrans = () => {
  // Hook
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 10000000000),
      text,
      amount: +amount // Turns string into a number
    }

    addTransaction(newTransaction);
  }

    return (
        <div>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
        <div class="form-control">
          <label htmlFor="text">Text</label>
          <input 
          type="text" 
          value={text} 
          onChange={(e) => {setText(e.target.value)}} 
          placeholder="Enter text..." />
        </div>
        <div class="form-control">
          <label htmlFor="amount">Amount <br /> (negative - expense, positive - income)</label>
          <input 
          type="number" 
          value={amount} 
          onChange={(e) => {setAmount(e.target.value)}}
          placeholder="Enter amount..." />
        </div>
            <button class="btn">Add transaction</button>
        </form>
        </div>
    )
}
