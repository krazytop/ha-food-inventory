import React from 'react';
import { ShoppingBasket } from 'lucide-react';
import type { Food } from '../types';
import { FoodCard } from './FoodCard';

interface FoodListProps {
  foods: Food[];
  onDelete: (uid: string) => void;
  loading: boolean;
}

export const FoodList: React.FC<FoodListProps> = ({ 
  foods, 
  onDelete, 
  loading 
}) => {
  if (foods.length === 0) {
    return (
      <div className="empty-state">
        <ShoppingBasket size={48} />
        <p>Le frigo est vide !</p>
      </div>
    );
  }

  return (
    <main className="foods-list">
      {foods.map((food) => (
        <FoodCard 
          key={food.uid}
          food={food}
          onDelete={onDelete}
          loading={loading}
        />
      ))}
    </main>
  );
};