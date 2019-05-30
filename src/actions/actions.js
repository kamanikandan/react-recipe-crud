import { FETCH_RECIPES } from "./types";
const apiEndPoint = process.env.API_END_POINT;

export function setRecipes(recipes) {
  return {
    type: FETCH_RECIPES,
    recipes
  };
}

export function fetchRecipes() {
  return dispatch => {
    fetch("http://localhost:2000/recipes")
      .then(res => res.json())
      .then(data => dispatch(setRecipes(data)));
  };
}
