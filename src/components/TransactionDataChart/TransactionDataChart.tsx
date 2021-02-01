import React from "react";
import styles from './TransactionDataChart.module.css';
import { Line } from "react-chartjs-2";
import Transaction from "../../interfaces/Transaction";

interface Props {
    transactions: Transaction[];
}

interface Dataset {
    label: string;
    data: string[];
    fill: boolean;
    backgroundColor: string;
    borderColor: string;
}

interface Chart {
    labels : string[];
    datasets: Dataset[];
}

function DataChart(props: Props) {
    const { transactions } = props;

    const addresses: string[] = transactions.map((transaction: Transaction) => transaction.delegator_address);

    const amounts: string[] = transactions.map((transaction: Transaction) =>  transaction.shares);

    const chartData: Chart = {
        labels: addresses,
        datasets: [
            {
                label: "Shares per delegation",
                data: amounts,
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)"
            },
        ]
    };
    
    return (
        <div className={styles.chart}>
            <Line data={chartData}/>
        </div>
    );
}

export default DataChart;