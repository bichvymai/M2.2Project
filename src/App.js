import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Characters from "./components/Characters";

function App() {
  const x = [
    { name: "body", items: [{ total: 17 }], path: null },
    { name: "earrings", items: [{ total: 20 }], path: "accessories" },
    { name: "glasses", items: [{ total: 17 }], path: "accessories" },
  ];

  return (
    <div className="container">
      <Header />
      <Characters items={x} />
    </div>
  );
}

export default App;
