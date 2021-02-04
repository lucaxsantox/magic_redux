const INITIAL_STATE = {
    frase: {},
    frases: [
        {
          id: 1,
          nome: "Fodder Cannon",
          descricao: "Step 1: Find your cousin. Step 2: Get your cousin in the cannon. Step 3: Find another cousin."
        },
        {
          id: 2,
          nome: "Goblin Pyromancer",
          descricao: "The good news is, we figured out how the wand works. The bad news is, we figured out how the wand works."
        },
        {
          id: 3,
          nome: "Goblin Grenade",
          descricao: "Don’t underestimate the aerodynamic qualities of the common goblin."
        },
        {
          id: 4,
          nome: "Goblin Ballon Brigade",
          descricao: "The enemy is getting too close! Quick! Inflate the toad!",
        },
        {
          id: 5,
          nome: "Raging Goblin",
          descricao: "He raged at the world, at his family, at his life. But mostly he just raged.",
        },
        {
          id: 6,
          nome: "Lightmine Field",
          descricao: "If you want to kill a lot of goblins, just make sure your defenses look like fun.",
        },
        {
          id: 7,
          nome: "1b Halfheart, Goblin Tactician",
          descricao: "Everybody but me—CHARGE!",
        },
        {
          id: 8,
          nome: "Goblin Offensive",
          descricao: "They certainly are",
        },
        {
          id: 9,
          nome: "Skirk Prospector",
          descricao: "I like goblins. They make funny little popping sounds when they die. - Braids, dementia summoner",
        },
        {
          id: 10,
          nome: "Goblin Arsonist",
          descricao: "With great power comes great risk of getting yourself killed.",
        }
      ],
    };
  
  export default function frases(state = INITIAL_STATE, action) {
    if (action.type === "TOGGLE_FRASE") {
      return {
        // um novo state é criado e retornado
        ...state,
        frase: action.frases,
      };
    }
    return state;
  }