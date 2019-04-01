import { createStore } from "redux";

const initialState = {
  name: "",
  category: "",
  authorFirst: "",
  authorLast: "",
  ingredients: [],
  instructions: [],
  recipes: []
};


function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_RECIPE_NAME:
      return { ...state, name: payload };
    case UPDATE_RECIPE_CATEGORY:
      return { ...state, category: payload };
    case UPDATE_AUTHORS_FIRST_NAME:
      return { ...state, authorFirst: payload };
    case UPDATE_AUTHORS_LAST_NAME:
      return { ...state, authorLast: payload };
    case ADD_INGREDIENT:
      const newIngredients = [...state.ingredients, payload];
      return { ...state, ingredients: newIngredients };
    case ADD_INSTRUCTION:
      const newInstructions = [...state.instructions, payload];
      return { ...state, instructions: newInstructions };
    case ADD_RECIPE:
      const {
        name,
        category,
        authorFirst,
        authorLast,
        ingredients,
        instructions
    } = state;
    const recipe = {
        name,
        category,
        authorFirst,
        authorLast,
        ingredients,
        instructions
    };
      const newRecipesList = [...state.recipes, recipe];
      return { ...state, recipes: newRecipesList };
    case DELETE_RECIPE:
        const newListOfRecipes = state.recipes.filter((recipe, i)=>{return i !== payload})
        console.log(newListOfRecipes);
        return {...state, recipes: newListOfRecipes}
    case CLEAR_INPUTS: 
        return {
            name: "",
            category: "",
            authorFirst: "",
            authorLast: "",
            ingredients: [],
            instructions: [],
            recipes: state.recipes
        }
    default:
      return state;
  }
}


export const DELETE_RECIPE = 'DELETE_RECIPE'
export const CLEAR_INPUTS = "CLEAR_INPUTS"
export const UPDATE_RECIPE_NAME = "UPDATE_RECIPE_NAME";
export const UPDATE_RECIPE_CATEGORY = "UPDATE_RECIPE_CATEGORY";
export const UPDATE_AUTHORS_FIRST_NAME = "UPDATE_AUTHORS_FIRST_NAME";
export const UPDATE_AUTHORS_LAST_NAME = "UPDATE_AUTHORS_LAST_NAME";
export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const ADD_INSTRUCTION = "ADD_INSTRUCTION";
export const ADD_RECIPE = "ADD_RECIPE";
export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


