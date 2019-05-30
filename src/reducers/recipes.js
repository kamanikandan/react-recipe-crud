import { FETCH_RECIPES } from "../actions/types";

export default function recipes(state = [], action) {
  switch (action.type) {
    case FETCH_RECIPES:
      return [...state, action.recipes];
    default:
      return state;
  }
}
