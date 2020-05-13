import React from "react";
import Card from "./Card";
import CardState from "./context/CardState";
import "./styles.css";

export default function App() {
  return (
    <CardState>
      <div className="App">
        <Card name={"hello"} age={10} />
      </div>
    </CardState>
  );
}
