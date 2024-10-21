// src/app/pages/WalletComponent.tsx
"use client";
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { TonConnect, WalletConnectionSource } from '@tonconnect/sdk';

interface ConnectedWallet {
  address: string;
}

const WalletComponent: React.FC = () => {
  const [balance, setBalance] = useState<string>('0');
  const [walletAddress, setWalletAddress] = useState<string>('');

  const tonConnect = new TonConnect();

  useEffect(() => {
    const fetchBalance = async () => {
      if (walletAddress) {
        const fetchedBalance = '100';
        setBalance(fetchedBalance);
      }
    };

    fetchBalance();
  }, [walletAddress]);

  const connectWallet = async () => {
    try {
      const wallet: WalletConnectionSource = {
        bridgeUrl: 'https://bridge.tonconnect.org',
        universalLink: 'https://youruniversal.link',
      };

      const connectedWallet = await tonConnect.connect(wallet);

      if (typeof connectedWallet === 'string') {
        setWalletAddress(connectedWallet);
      } else {
        const walletInfo = connectedWallet as ConnectedWallet;
        setWalletAddress(walletInfo.address);
      }
    } catch (error) {
      console.error('Ошибка подключения:', error);
    }
  };

  return (
    <div className="container">
      <Header title="Кошелек" balance={balance} onConnect={connectWallet} />
      <div className="wallet-container">
        <h2>Адрес кошелька:</h2>
        <p>{walletAddress || 'Кошелек не привязан'}</p>
      </div>
    </div>
  );
};

export default WalletComponent;
