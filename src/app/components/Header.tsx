import React from 'react';

interface HeaderProps {
  title: string;
  onBack?: () => void;
  balance: string;
  onConnect?: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, onBack, balance, onConnect }) => {
  return (
    <header style={{ padding: '16px', backgroundColor: '#f8f8f8', borderBottom: '1px solid #ddd' }}>
      {onBack && <button onClick={onBack}>Назад</button>}
      <h1>{title}</h1>
      <div style={{ marginTop: '8px' }}>Баланс: {balance} TON</div>
      {onConnect && <button onClick={onConnect}>Привязать кошелек</button>}
    </header>
  );
};

export default Header;
