import React, { createContext, useReducer } from 'react';
import axios from 'axios';
import AppReducer from './AppReducer.js';


// Initial State
const initialState = {
    transactions: [],
    error: null,
    loading: true
}

// Create context 
export const GlobalContext = createContext(initialState);

// Provider comp
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // actions
    async function getTransactions() {
        try {
            const res = await axios.get('/api/v1/transactions');

            dispatch({
                type: 'GET_TRANSACTIONS',
                payload: res.data.data
            });
        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
              });
        }
    }


    async function deleteTransaction(id) {
      try {
        await axios.delete(`/api/v1/transactions/${id}`);
  
        dispatch({
          type: 'DELETE_TRANSACTION',
          payload: id
        });
      } catch (err) {
        dispatch({
          type: 'TRANSACTION_ERROR',
          payload: err.response.data.error
        });
      }
    }

    async function addTransaction(transaction) {
        const config = {
          headers: {
            'Content-Type': 'application/json'
          }
        }
    
        try {
          const res = await axios.post('/api/v1/transactions', transaction, config);
    
          dispatch({
            type: 'ADD_TRANSACTION',
            payload: res.data.data
          });
        } catch (err) {
          dispatch({
            type: 'TRANSACTION_ERROR',
            payload: err.response.data.error
          });
        }
      }

    return(
    
    // This allows us to use in any component by use usecontext
    // Which is the react hook
    <GlobalContext.Provider value={{
        transactions: 
        state.transactions,
        error: state.error,
        loading: state.loading,
        getTransactions,
        deleteTransaction,
        addTransaction
        }}>
        {children} 
    </GlobalContext.Provider>);
}