import React from 'react'
import Transaction from '../Transaction/index'


const Transactions = ({ transactions = [] }) => {
    debugger
    return (
        <div>
            {transactions.map((transaction) => <Transaction key={transaction.id} transaction={transaction} />)}
            <hr />
        </div>
    )
}

export default Transactions
