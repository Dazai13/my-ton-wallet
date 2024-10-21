// src/app/pages/Transactions.tsx
"use client";
import React, { useState } from 'react';
import Header from '../components/Header';
import { TonConnect } from '@tonconnect/sdk';
import '../styles/styles.module.css'; // Убедитесь, что путь правильный

const Transactions: React.FC = () => {
  const [amount, setAmount] = useState<string>('');
  const [recipient, setRecipient] = useState<string>('');
  const [balance, setBalance] = useState<string>('0');
  const tonConnect = new TonConnect();

  const handleTransaction = async () => {
    try {
      alert(`Транзакция на ${amount} TON отправлена на адрес ${recipient}`);
      const newBalance = (parseFloat(balance) - parseFloat(amount)).toString();
      setBalance(newBalance);
    } catch (error) {
      console.error('Ошибка транзакции:', error);
    }
  };

  return (
    <div className="container">
      <Header title="Транзакции" balance={balance} onBack={() => window.history.back()} />
      <div className="wallet-container">
        <h2>Ввод количества TON:</h2>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Введите сумму"
        />
        <h2>Ввод адреса кошелька получателя:</h2>
        <input
          type="text"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          placeholder="Введите адрес получателя"
        />
        <button onClick={handleTransaction}>Отправить</button>
      </div>
    </div>
  );
};

export default Transactions;
