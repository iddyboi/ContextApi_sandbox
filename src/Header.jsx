import React, { useContext } from "react";
import CardContext from "./context/CardContext";

const Header = () => {
  const cardContext = useContext(CardContext);

  const { name, age } = cardContext;
  return (
    <header
      style={{
        height: "50px",
        width: "100%",
        backgroundColor: "red",
        display: "flex"
      }}
    >
      <h1>
        {name}
        {age}
      </h1>
    </header>
  );
};
export default Header;
