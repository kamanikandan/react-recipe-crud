import { FETCH_RECIPES } from "./types";
// const apiEndPoint = process.env.API_END_POINT;
const apiEndPoint = "http://localhost:8000/recipes"

export function setRecipes(recipes) {
  return {
    type: FETCH_RECIPES,
    recipes
  };
}

export function fetchRecipes() {
  return dispatch => {
    fetch(apiEndPoint)
      .then(res => res.json())
      .then(data => dispatch(setRecipes(data)));
  };
}
