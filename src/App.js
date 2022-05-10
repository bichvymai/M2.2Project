import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Characters from "./components/Characters";

function App() {
  const x = [
    { name: "body", items: [{ total: 17 }], path: null },
    { name: "glasses", items: [{ total: 17 }], path: "accessories" },
    { name: "eyes", items: [{ total: 24 }], path: null },
    { name: "eyebrows", items: [{ total: 15 }], path: null },
    { name: "hair", items: [{ total: 73 }], path: null },
    { name: "mouths", items: [{ total: 24 }], path: null },
    { name: "layer_1", items: [{ total: 5 }], path: "clothes" },
    { name: "layer_2", items: [{ total: 5 }], path: "clothes" },
    { name: "layer_3", items: [{ total: 9 }], path: "clothes" },
  ];

  return (
    <div className="container">
      <Header />
      <div class="customize">
        <div className="left-side"></div>
        <div className="right-side">
          <Characters items={x} />
        </div>
      </div>
    </div>
  );
}

export default App;
