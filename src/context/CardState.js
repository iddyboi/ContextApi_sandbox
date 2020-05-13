import React, { useReducer } from "react";
import cardContext from "./CardContext";
import cardReducer from "./CardReducer";
import { SETNAME, ADD_TO_AGE } from "./types";

const CardState = props => {
  const initialState = {
    name: "idris",
    age: 16
  };

  const [state, dispatch] = useReducer(cardReducer, initialState);

  const setName = () => {
    dispatch({
      type: SETNAME,
      payload: "idris taiwo"
    });
  };

  const addAge = () => {
    dispatch({
      type: ADD_TO_AGE,
      payload: 1
    });
  };
  return (
    <cardContext.Provider
      value={{
        name: state.name,
        age: state.age,
        setName,
        addAge
      }}
    >
      {props.children}
    </cardContext.Provider>
  );
};

export default CardState;
