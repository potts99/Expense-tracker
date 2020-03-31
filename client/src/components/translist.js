import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './transaction';

export const Translist = () => {
    const { transactions, getTransactions } = useContext(GlobalContext);        

    useEffect(() => {
        getTransactions();
        // eslint-disable-next-line
    }, []);

    return (
        <div>
           <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction => (<Transaction key={transaction._id} transaction={transaction} />))}
            </ul> 
        </div>
    )
}
