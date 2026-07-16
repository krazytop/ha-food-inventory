import React, { useState } from 'react';
import { Plus } from 'lucide-react';

interface AddFoodFormProps {
  onAdd: (name: string, date: string) => Promise<void>;
  loading: boolean;
}

const getDateParDefaut = () => {
  const now = new Date();
  now.setDate(now.getDate() + 4)
  return now.toISOString().split('T')[0];
}

export const AddFoodForm: React.FC<AddFoodFormProps> = ({ onAdd, loading }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState(getDateParDefaut());

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name?.trim()) return;
    
    await onAdd(name, date);
    
    // Reset local après soumission réussie
    setName("");
    setDate(getDateParDefaut());
  };

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <input 
        type="text" 
        placeholder="Nom" 
        value={name} 
        onChange={(e) => setName(e.target.value)}
        required
        maxLength={20}
        disabled={loading}
      />
      <div className="form-row">
        <input 
          type="date" 
          value={date} 
          onChange={(e) => setDate(e.target.value)}
          disabled={loading}
        />
        <button type="submit" className="submit-btn" disabled={loading}>
          <Plus size={20} />
        </button>
      </div>
    </form>
  );
};