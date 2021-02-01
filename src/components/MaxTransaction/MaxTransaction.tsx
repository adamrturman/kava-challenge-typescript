import React from 'react';
import Transaction from '../../interfaces/Transaction';
import styles from '../TransactionData/TransactionData.module.css';

interface Props {
    transactions: Transaction[];
}

function MaxTransaction(props: Props) {
    const { transactions } = props;

    function maxTransaction(transactions: Transaction[]) {
        const allShares = transactions.map((transaction) => parseInt(transaction.shares));

        return Math.max(...allShares);
    }
    
    function findInvestor(transactions: Transaction[], amount: number) {
        const relevantTransaction = transactions.find((transaction) => parseInt(transaction.shares) === amount);
        return relevantTransaction && relevantTransaction.delegator_address;
    }

    const largestTransaction: number = maxTransaction(transactions);
    const maxInvestor: string | undefined = findInvestor(transactions, largestTransaction);

    return (
        <div>
            The maximum transaction value is <span className={styles.emphasize}>{largestTransaction}</span>
            <br /> 
            and was made by <span className={styles.emphasize}>{maxInvestor}</span>
        </div>
    );
}

export default MaxTransaction;