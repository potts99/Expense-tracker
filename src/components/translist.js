import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './transaction';

export const Translist = () => {
    const { transactions } = useContext(GlobalContext);        


    return (
        <div>
           <h3>History</h3>
            <ul id="list" class="list">
                {transactions.map(transactions => (<Transaction key={transactions.id} transaction={transactions} />))}
            </ul> 
        </div>
    )
}
