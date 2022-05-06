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
  return (
    <div className="container">
      <Header />
      {x.map((part) => (
        <Characters part={part.part} items={part.items} />
      ))}
    </div>
  );
}

export default App;
