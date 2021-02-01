import React from 'react';
import Transaction from '../../interfaces/Transaction';
import styles from '../TransactionData/TransactionData.module.css'

interface Props {
    transactions: Transaction[];
}

function Median(props: Props) {
    const { transactions } = props;

    function sortedData(transactions: Transaction[]) {
        const allShares = transactions.map((transaction) => parseInt(transaction.shares));

        return allShares.sort((a: number, b: number) => a - b);
    }

    function findMedianIndex() {
        return Math.floor(transactions.length / 2 + 1);
    }

    function getMedianTransaction() {
        const sortedTransactions: number[] = sortedData(transactions);
        const medianIndex: number = findMedianIndex();
        const medianTransaction: number = sortedTransactions[medianIndex];

        return medianTransaction;
    }

    return (
        <div>
            The median value is <span className={styles.emphasize}>{getMedianTransaction()}</span>
        </div>
    );
}

export default Median;