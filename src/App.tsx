import styles from './App.module.css';
import { fetchData } from './services/dataService';
import React, { useState } from 'react';
import Landing from './components/Landing/Landing';
import TransactionData from './components/TransactionData/TransactionData';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';

const App: React.FC = () =>  {
  const [transactions, setTransactions] = useState([]);
  const [showData, setShowData] = useState(false);
  const [loading, setLoading] = useState(false);

  const displayData = () => {
    setLoading(true);
    fetchData()
      .then(({ data }) => {
        setTransactions(data.app_state.staking.delegations);
        setShowData(true);
        setLoading(false);
      });
  }

  if(!showData) {
    return (
      <div className={styles.App}>
        <Landing displayData={displayData} />
        {loading && <LoadingSpinner />}
      </div>
    );
  }

  return (
    <div className={styles.App}>
      <TransactionData setShowData={setShowData} transactions={transactions} />
    </div>
  );
}

export default App;
