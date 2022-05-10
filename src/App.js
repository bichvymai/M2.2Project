import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Characters from "./components/Characters";
import Avatar from "./components/Avatar";

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

  const [image, setImage] = useState([
    { body: "body_1" },
    { glass: "glass_1" },
    { eyes: "eyes_1" },
    { eyebrows: "eyebrows_1" },
    { hair: "hair_1" },
    { layer1: "layer_1" },
    { layer2: "layer_2" },
    { layer3: "layer_3" },
  ]);

  return (
    <div className="container">
      <Header />
      <div className="customize">
        <div className="left-side">
          <Avatar />
        </div>
        <div className="right-side">
          <Characters items={x} />
        </div>
      </div>
    </div>
  );
}

export default App;
