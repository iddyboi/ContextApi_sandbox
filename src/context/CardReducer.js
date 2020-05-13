import { SETNAME, ADD_TO_AGE } from "./types";

export default (state, action) => {
  switch (action.type) {
    case SETNAME:
      return {
        ...state,
        name: action.payload
      };
    case ADD_TO_AGE:
      return {
        ...state,
        age: state.age + action.payload
      };
    default:
      return state;
  }
};
