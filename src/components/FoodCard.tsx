import React from 'react';
import { Trash2, Calendar } from 'lucide-react';
import type { Food } from '../types';

interface FoodCardProps {
  food: Food;
  onDelete: (uid: string) => void;
  loading: boolean;
}

export const FoodCard: React.FC<FoodCardProps> = ({ 
  food,  
  onDelete, 
  loading 
}) => {
  
  // Calcul de la date et de la couleur de la pastille
  const getDaysStatus = (due?: string) => {
    if (!due) return { text: 'Sans date', class: 'status-gray' };
    
    const diffTime = new Date(due).getTime() - new Date().getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) return { text: `Périmé (${Math.abs(diffDays)}j)`, class: 'status-red' };
    if (diffDays === 0) return { text: "Aujourd'hui !", class: 'status-orange-urgent' };
    if (diffDays <= 2) return { text: `${diffDays}j restants`, class: 'status-orange' };
    return { text: `${diffDays}j restants`, class: 'status-green' };
  };

  const status = getDaysStatus(food.due);

  return (
    <div className="food-card">
      <div className="card-main">
        <div className="info">
          <span className="item-name">{food.summary}</span>
          <span className={`status-badge ${status.class}`}>
            <Calendar size={12} style={{ marginRight: '4px' }} />
            {status.text}
          </span>
        </div>
        
        <div className="actions">
          <button 
            className="delete-btn" 
            onClick={() => onDelete(food.uid)} 
            disabled={loading}
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};