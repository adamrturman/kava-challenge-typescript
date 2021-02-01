import React from 'react';
import Transaction from '../../interfaces/Transaction';
import styles from '../TransactionData/TransactionData.module.css';

interface Props {
    transactions: Transaction[];
}

function Average(props: Props) {
    const { transactions } = props;

    function sum(transactions: Transaction[]) {
        let total = 0;
        transactions.forEach((transaction) => total += parseInt(transaction.shares));
        return total;
    }

    const totalTransactions: number = transactions.length;
    const averageTransaction: number = sum(transactions) / totalTransactions;
    
    return (
        <div>
            The average value of all transactions is <span className={styles.emphasize}>{averageTransaction}</span>
        </div>
    );
}

export default Average;