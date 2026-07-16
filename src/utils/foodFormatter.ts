export interface FormattedFood {
  emoji: string;
  name: string;
}

interface FoodRule {
  emoji: string;
  name: string; // Le nom propre formaté (ex: "Tomate")
  matchers: string[]; // Tous les mots-clés qui déclenchent cette règle
}

const FOOD_RULES: FoodRule[] = [
  // ==========================================
  // PRODUITS LAITIERS & ALTERNATIVES (Frais)
  // ==========================================
  {
    emoji: "🥛",
    name: "Lait de soja",
    matchers: ["lait de soja", "lait soja", "soja", "soy milk"]
  },
  {
    emoji: "🥛",
    name: "Lait d'amande",
    matchers: ["lait d'amande", "lait amande", "almond milk"]
  },
  {
    emoji: "🥛",
    name: "Lait",
    matchers: ["lait", "laits", "milk", "brique de lait"]
  },
  {
    emoji: "🥛",
    name: "Crème fraîche",
    matchers: ["creme", "crème", "creme fraiche", "crème fraîche", "cream"]
  },
  {
    emoji: "🍦",
    name: "Yaourt",
    matchers: ["yaourt", "yaourts", "yoghurt", "yogourt", "skyr", "gervita", "activia"]
  },
  {
    emoji: "🧈",
    name: "Beurre",
    matchers: ["beurre", "beurres", "butter", "margarine"]
  },
  {
    emoji: "🧀",
    name: "Fromage râpé",
    matchers: ["rape", "râpé", "fromage rape", "fromage râpé", "emmental rape", "gruyere"]
  },
  {
    emoji: "🧀",
    name: "Mozzarella",
    matchers: ["mozzarella", "mozza", "burrata"]
  },
  {
    emoji: "🧀",
    name: "Fromage",
    matchers: ["fromage", "fromages", "cheese", "comte", "comté", "parmesan", "chevre", "chèvre", "camembert", "ortholan"]
  },

  // ==========================================
  // VIANDES (Précises & Fraîches)
  // ==========================================
  {
    emoji: "🍗",
    name: "Poulet",
    matchers: ["poulet", "poulets", "escalope de poulet", "blanc de poulet", "cuisse de poulet", "chicken"]
  },
  {
    emoji: "🍗",
    name: "Dinde",
    matchers: ["dinde", "escalope de dinde", "blanc de dinde", "turkey"]
  },
  {
    emoji: "🥩",
    name: "Bœuf",
    matchers: ["boeuf", "bœuf", "steak", "steaks", "steak hache", "steak haché", "beef"]
  },
  {
    emoji: "🥓",
    name: "Jambon",
    matchers: ["jambon", "jambons", "jambon blanc", "jambon cru", "ham"]
  },
  {
    emoji: "🥓",
    name: "Lardons",
    matchers: ["lardon", "lardons", "bacon", "pancetta"]
  },
  {
    emoji: "🌭",
    name: "Saucisse",
    matchers: ["saucisse", "saucisses", "merguez", "chipolata", "chipo", "knacki", "knackis"]
  },
  {
    emoji: "🥩",
    name: "Porc",
    matchers: ["porc", "cote de porc", "côte de porc", "travers de porc", "pork"]
  },

  // ==========================================
  // POISSONS & CRUSTACÉS (Très périssables)
  // ==========================================
  {
    emoji: "🐟",
    name: "Saumon",
    matchers: ["saumon", "saumons", "pave de saumon", "pavé de saumon", "salmon"]
  },
  {
    emoji: "🐟",
    name: "Saumon fumé",
    matchers: ["saumon fume", "saumon fumé"]
  },
  {
    emoji: "🐟",
    name: "Poisson",
    matchers: ["cabillaud", "colin", "truite", "poisson", "poissons", "fish", "filet de poisson"]
  },
  {
    emoji: "🍤",
    name: "Crevettes",
    matchers: ["crevette", "crevettes", "shrimp", "prawns", "gambas"]
  },

  // ==========================================
  // LÉGUMES FRAIS (Périssables)
  // ==========================================
  {
    emoji: "🥬",
    name: "Salade",
    matchers: ["salade", "salades", "laitue", "mache", "mâche", "roquette", "salad", "lettuce"]
  },
  {
    emoji: "🍅",
    name: "Tomate",
    matchers: ["tomate", "tomates", "tomato", "tomatoes", "tomates cerises"]
  },
  {
    emoji: "🥒",
    name: "Concombre",
    matchers: ["concombre", "concombres", "cucumber"]
  },
  {
    emoji: "🥑",
    name: "Avocat",
    matchers: ["avocat", "avocats", "avocado"]
  },
  {
    emoji: "🍄",
    name: "Champignon",
    matchers: ["champignon", "champignons", "mushroom", "mushrooms", "champignons de paris"]
  },
  {
    emoji: "🥦",
    name: "Brocoli",
    matchers: ["brocoli", "brocolis", "broccoli"]
  },
  {
    emoji: "🥬",
    name: "Épinards",
    matchers: ["epinard", "epinards", "épinard", "épinards", "spinach"]
  },
  {
    emoji: "🫑",
    name: "Poivron",
    matchers: ["poivron", "poivrons", "bell pepper"]
  },
  {
    emoji: "🍆",
    name: "Aubergine",
    matchers: ["aubergine", "aubergines", "eggplant"]
  },
  {
    emoji: "🥒",
    name: "Courgette",
    matchers: ["courgette", "courquettes", "courgettes", "zucchini"]
  },
  {
    emoji: "🥕",
    name: "Carotte",
    matchers: ["carotte", "carottes", "carrot", "carrots"]
  },

  // ==========================================
  // FRUITS FRAIS
  // ==========================================
  {
    emoji: "🍓",
    name: "Fraises",
    matchers: ["fraise", "fraises", "strawberry", "strawberries", "framboise", "framboises", "baies"]
  },
  {
    emoji: "🍏",
    name: "Pomme",
    matchers: ["pomme", "pommes", "apple", "apples"]
  },
  {
    emoji: "🍌",
    name: "Banane",
    matchers: ["banane", "bananes", "banana", "bananas"]
  },
  {
    emoji: "🍋",
    name: "Citron",
    matchers: ["citron", "citrons", "lemon"]
  },
  {
    emoji: "🍊",
    name: "Orange",
    matchers: ["orange", "oranges", "clementine", "clémentine", "mandarine"]
  },
  {
    emoji: "🍈",
    name: "Melon",
    matchers: ["melon", "melons"]
  },

  // ==========================================
  // AUTRES FRAIS (Œufs, Traiteur, Boulangerie)
  // ==========================================
  {
    emoji: "🥚",
    name: "Œufs",
    matchers: ["oeuf", "oeufs", "œuf", "œufs", "egg", "eggs"]
  },
  {
    emoji: "🍞",
    name: "Pain",
    matchers: ["pain", "pains", "baguette", "baguettes", "bread", "pain de mie"]
  },
  {
    emoji: "🥚",
    name: "Tofu",
    matchers: ["tofu", "tempeh"]
  },
  {
    emoji: "🥧",
    name: "Pâte à tarte",
    matchers: ["pate a tarte", "pâte à tarte", "pate brisee", "pate feuilletee", "pâte feuilletée"]
  }
];

export class FoodFormatter {
  /**
   * Analyse la saisie utilisateur pour renvoyer l'emoji et le nom formaté.
   * Si aucune correspondance n'est trouvée, garde le texte brut de l'utilisateur avec un emoji par défaut 🛒.
   */
  static format(userInput: string): FormattedFood {
    const cleanInput = userInput.trim().toLowerCase();

    // Recherche d'une règle dont l'un des matchers est contenu dans la saisie ou est égal
    const matchedRule = FOOD_RULES.find(rule => 
      rule.matchers.some(matcher => cleanInput === matcher || cleanInput.includes(matcher))
    );

    if (matchedRule) {
      return {
        emoji: matchedRule.emoji,
        name: `${matchedRule.emoji} ${matchedRule.name}`
      };
    }

    // Comportement par défaut si l'aliment n'est pas dans notre dictionnaire
    // On met simplement une majuscule à la première lettre de la saisie utilisateur
    const capitalizedInput = userInput.trim().charAt(0).toUpperCase() + userInput.trim().slice(1);
    return {
      emoji: "🛒",
      name: `🛒 ${capitalizedInput}`
    };
  }
}