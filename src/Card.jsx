import React, { useContext } from "react";
import cardContext from "./context/CardContext";

const Card = () => {
  const CardContext = useContext(cardContext);

  const { name, age, addAge } = CardContext;

  return (
    <div>
      <h1>{name}</h1>
      <p>{age}</p>
      <button onClick={addAge}>Add to age</button>
    </div>
  );
};
export default Card;
