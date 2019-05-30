import { FETCH_RECIPES } from "../actions/types";

export default function recipes(state = [], action) {
  switch (action.type) {
    case FETCH_RECIPES:
      return action.recipes;
    default:
      return state;
  }
}
