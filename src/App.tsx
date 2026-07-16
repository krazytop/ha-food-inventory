import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { AddFoodForm } from './components/AddFoodForm';
import { FoodList } from './components/FoodList';
import type { Food } from './types';
import { FoodFormatter } from './utils/foodFormatter';
import './App.css';

const HA_URL = import.meta.env.HA_URL;
const HA_TOKEN = import.meta.env.HA_TOKEN;

const ENTITY_ID = "todo.aliments";

function App() {
  const [foods, setFoods] = useState<Food[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // Récupération
  const fetchFoods = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${HA_URL}/api/services/todo/get_items?return_response=true`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${HA_TOKEN}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ entity_id: ENTITY_ID })
      });
      const data = await response.json();
      const foods: Food[] = data["service_response"][ENTITY_ID]["items"];

      // Trier par date
      foods.sort((a, b) => {
        if (!a.due) return 1;
        if (!b.due) return -1;
        return new Date(a.due).getTime() - new Date(b.due).getTime();
      });

      setFoods(foods);
    } catch (error) {
      console.error("Erreur de récupération HA:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  // Ajout
  const handleAddFood = async (name: string, date: string) => {
    setLoading(true);
    try {
      await fetch(`${HA_URL}/api/services/todo/add_item`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${HA_TOKEN}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          entity_id: ENTITY_ID,
          item: FoodFormatter.format(name).name,
          due_date: date
        })
      });
      await fetchFoods();
    } catch (error) {
      console.error("Erreur ajout:", error);
      setLoading(false);
    }
  };

  // Suppression
  const handleDeleteFood = async (uid: string) => {
    setLoading(true);
    try {
      await fetch(`${HA_URL}/api/services/todo/remove_item`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${HA_TOKEN}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          entity_id: ENTITY_ID,
          item: [uid]
        })
      });
      await fetchFoods();
    } catch (error) {
      console.error("Erreur suppression:", error);
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <Header onRefresh={fetchFoods} loading={loading} />
      <AddFoodForm onAdd={handleAddFood} loading={loading} />
      <FoodList 
        foods={foods} 
        onDelete={handleDeleteFood}
        loading={loading}
      />
    </div>
  );
}

export default App;