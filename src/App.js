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
    { body: "1.png" },
    { glass: "1.png" },
    { eyes: "1.png" },
    { eyebrows: "1.png" },
    { hair: "1.png" },
    { layer1: "1.png" },
    { layer2: "1.png" },
    { layer3: "1.png" },
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
