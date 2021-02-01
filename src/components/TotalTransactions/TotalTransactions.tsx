import React from 'react';
import Transaction from '../../interfaces/Transaction';
import styles from '../TransactionData/TransactionData.module.css'

interface Props {
    transactions: Transaction[];
}

function TotalTransactions(props: Props) {
    const { transactions } = props;

    const totalTransactions = transactions.length;

    return (
        <div>
            There are <span className={styles.emphasize}>{totalTransactions}</span> total transactions
        </div>
    );
}

export default TotalTransactions;