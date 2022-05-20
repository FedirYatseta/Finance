import React, { useState, useEffect } from 'react'
import Balance from '../Balance';
import ErrorBoundary from '../ErrorBoundry';
import Form from '../Form';
import Transactions from '../Transactions';

import { addItem, getItems } from '../../utils/indexdb'

const Home = () => {

    const [balance, setBalance] = useState(0);
    const [transactions, setTransaction] = useState([])
    useEffect(() => {
        getItems().then((item) => {
            setTransaction(item)
        }).catch((e) => {
            console.error('error', e)
        })
    }, [setTransaction])


    const onChange = ({ value, date, comment }) => {

        const transaction = {
            value: +value,
            date,
            comment,
            id: Date.now()
        }

        setTransaction([transaction
            , ...transactions])
        setBalance(balance + Number(value))

        addItem(transaction);
    }

    return (
        <>
            <ErrorBoundary >
                <Balance balance={balance} />
                <Form onChange={onChange} />
                <hr />
                <Transactions transactions={transactions} />
            </ErrorBoundary>

        </>
    )
}


export default Home;