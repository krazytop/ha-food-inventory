import type { Food } from '../types';

// Récupération des variables d'environnement
const HA_URL = "http://homeassistant.local:8123";
const HA_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiI4MTk0ODY1YmEwOWE0NzNhODhjNzZkMzM0YWExMTI5NiIsImlhdCI6MTc4NDIyMzU5OSwiZXhwIjoyMDk5NTgzNTk5fQ.bAGAHhiK4-URWLLsVww-faCUj-HL8SM3Yb9oJ7nDH18";

const ENTITY_ID = 'todo.aliments';

// Configuration par défaut des en-têtes
const getHeaders = () => ({
  "Authorization": `Bearer ${HA_TOKEN}`,
  "Content-Type": "application/json"
});

/**
 * Récupère tous les aliments
 */
export const getFoods = async (): Promise<Food[]> => {
  const response = await fetch(`${HA_URL}/api/services/todo/get_items?return_response=true`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify({ entity_id: ENTITY_ID })
  });

  if (!response.ok) {
    throw new Error(`Erreur lors de la récupération : ${response.statusText}`);
  }

  const data = await response.json();
  const foods: Food[] = data["service_response"]?.[ENTITY_ID]?.["items"];

  // Tri par date de péremption
  return foods.sort((a, b) => {
    if (!a.due) return 1;
    if (!b.due) return -1;
    return new Date(a.due).getTime() - new Date(b.due).getTime();
  });
};

/**
 * Ajoute un nouvel aliment
 */
export const addFood = async (name: string, date: string): Promise<void> => {
  const response = await fetch(`${HA_URL}/api/services/todo/add_item`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify({
      entity_id: ENTITY_ID,
      item: name,
      due_date: date || undefined
    })
  });

  if (!response.ok) {
    throw new Error(`Erreur lors de l'ajout : ${response.statusText}`);
  }
};

/**
 * Supprime un aliment
 */
export const deleteFood = async (uid: string): Promise<void> => {
  const response = await fetch(`${HA_URL}/api/services/todo/remove_item`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify({
      entity_id: ENTITY_ID,
      item: uid
    })
  });

  if (!response.ok) {
    throw new Error(`Erreur lors de la suppression : ${response.statusText}`);
  }
};