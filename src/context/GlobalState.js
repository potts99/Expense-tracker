import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer.js';


// Initial State
const initialState = {
    transactions: []
}

// Create context 
export const GlobalContext = createContext(initialState);

// Provider comp
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // actions
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    function addTransaction(transactions) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transactions
        })
    }

    return(
    
    // This allows us to use in any component by use usecontext
    // Which is the react hook
    <GlobalContext.Provider value={{
        transactions: 
        state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children} 
    </GlobalContext.Provider>);
}