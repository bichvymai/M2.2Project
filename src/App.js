import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Characters from "./components/Characters";

function App() {
  const x = [
    {
      part: "accessories",
      items: [
        { item: "earrings", total: 10 },
        { item: "glasses", total: 20 },
      ],
    },
    { part: "body", items: [{ total: 17 }] },
  ];

  const characters = [];
  x.forEach((part) => {
    console.log(part);
    part.items.forEach((item) => {
      console.log(item);
      characters.push(<Characters part={part.part} items={item} />);
    });
  });

  console.log(characters);
  return (
    <div className="container">
      <Header />
      {characters};
    </div>
  );
}

export default App;
