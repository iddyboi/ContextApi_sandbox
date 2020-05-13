import React from "react";
import Card from "./Card";
import CardState from "./context/CardState";
import "./styles.css";
import Header from "./Header";

export default function App() {
  return (
    <CardState>
      <div className="App">
        <Header />
        <Card name={"hello"} age={10} />
      </div>
    </CardState>
  );
}
