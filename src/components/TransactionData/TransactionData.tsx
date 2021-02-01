import React from 'react';
import TotalTransactions from '../TotalTransactions/TotalTransactions';
import Median from '../Median/Median';
import Average from '../Average/Average';
import MaxTransaction from '../MaxTransaction/MaxTransaction';
import Chart from '../TransactionDataChart/TransactionDataChart';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import styles from './TransactionData.module.css';
import Transaction from '../../interfaces/Transaction';

interface Props {
    transactions: Transaction[];
    setShowData: (flagValue: boolean) => void;
}

function Data(props:Props) {
    const { transactions, setShowData } = props;

    return (
        <>
            <div className="col-sm-10 col-md-6 mx-auto mt-5">
                <Card className={styles.info}>
                    <Card.Header>Data</Card.Header>
                    <Card.Body>
                        <TotalTransactions transactions={transactions}/>
                        <Median transactions={transactions} />
                        <Average transactions={transactions} />
                        <MaxTransaction transactions={transactions} />
                        <Button className={styles.button} 
                                onClick={() => setShowData(false)}>
                            Return to Homepage
                        </Button>
                    </Card.Body>
                </Card>
            </div>
            <div className="col-sm-10">
                <Chart transactions={transactions}/>
            </div>
        </>
    );
}

export default Data;
