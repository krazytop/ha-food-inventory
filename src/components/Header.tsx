import React from 'react';
import { RefreshCw } from 'lucide-react';

interface HeaderProps {
  onRefresh: () => void;
  loading: boolean;
}

export const Header: React.FC<HeaderProps> = ({ onRefresh, loading }) => {
  return (
    <header className="app-header">
      <h1>🍳 Mon Frigo Intelligent</h1>
      <button className="refresh-btn" onClick={onRefresh} disabled={loading}>
        <RefreshCw className={loading ? 'spinning' : ''} size={20} />
      </button>
    </header>
  );
};