import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Characters from "./components/Characters";
import Avatar from "./components/Avatar";

function App() {
  const total = {
    body: 17,
    eyes: 17,
    hair: 73,
    mouth: 24,
    eyebrows: 15,
    clothing1: 5,
    clothing2: 5,
    clothing3: 9,
  };

  // const x = [
  //   { name: "body", items: [{ total: 17 }], path: null },
  //   { name: "glasses", items: [{ total: 17 }], path: "accessories" },
  //   { name: "eyes", items: [{ total: 24 }], path: null },
  //   { name: "eyebrows", items: [{ total: 15 }], path: null },
  //   { name: "hair", items: [{ total: 73 }], path: null },
  //   { name: "mouths", items: [{ total: 24 }], path: null },
  //   { name: "layer_1", items: [{ total: 5 }], path: "clothes" },
  //   { name: "layer_2", items: [{ total: 5 }], path: "clothes" },
  //   { name: "layer_3", items: [{ total: 9 }], path: "clothes" },
  // ];

  const [body, setBody] = useState(0);
  const [eyes, setEyes] = useState(2);
  const [eyebrows, setEyebrows] = useState(2);
  const [hair, setHair] = useState(0);
  const [clothing1, setClothing1] = useState(0);
  const [clothing2, setClothing2] = useState(0);
  const [clothing3, setClothing3] = useState(0);
  const [mouth, setMouth] = useState(2);
  const [glasses, setGlasses] = useState(2);
  const randomize = () => {
    setBody(Math.floor(Math.random() * total.body));
    setEyes(Math.floor(Math.random() * total.eyes));
    setEyebrows(Math.floor(Math.random() * total.eyebrows));
    setHair(Math.floor(Math.random() * total.hair));
    setMouth(Math.floor(Math.random() * total.mouth));
    setGlasses(Math.floor(Math.random() * total.glasses));
    setClothing1(Math.floor(Math.random() * total.clothing1));
    setClothing2(Math.floor(Math.random() * clothing2));
    setClothing3(Math.floor(Math.random() * clothing3));
  };

  useEffect(() => {
    randomize();
  }, []);

  return (
    <div className="container">
      <Header />
      <div className="customize">
        <div className="left-side">
          <Avatar
            body={body}
            eyes={eyes}
            hair={hair}
            clothing1={clothing1}
            clothing2={clothing2}
            clothing3={clothing3}
            eyebrows={eyebrows}
            mouth={mouth}
            glasses={glasses}
          />
          <div className="randomize">
            <button onClick={() => randomize()}>RANDOMIZE!</button>
          </div>
        </div>
        <div className="right-side">
          <div class="char-type">
            <div class="char-type-title">
              <h2>Body</h2>
            </div>
            <Characters total={total.body} path="body" set={setBody} />
          </div>
          <div class="char-type">
            <div class="char-type-title">
              <h2>Eyes</h2>
            </div>
            <Characters total={total.eyes} path="eyes" set={setEyes} />
          </div>
          <div class="char-type">
            <div class="char-type-title">
              <h2>Hair</h2>
            </div>
            <Characters total={total.hair} path="hair" set={setHair} />
          </div>
          <div class="char-type">
            <div class="char-type-title">
              <h2>Mouth</h2>
            </div>
            <Characters total={total.mouth} path="mouths" set={setMouth} />
          </div>
          <div class="char-type">
            <div class="char-type-title">
              <h2>Eyebrows</h2>
            </div>
            <Characters
              total={total.eyebrows}
              path="eyebrows"
              set={setEyebrows}
            />
          </div>
          <div class="char-type">
            <div class="char-type-title">
              <h2>Glasses</h2>
            </div>
            <Characters total={total.glasses} path="glasses" set={setGlasses} />
          </div>
          <div class="char-type">
            <div class="char-type-title">
              <h2>Clothing 1</h2>
            </div>
            <Characters
              total={total.clothing1}
              path="clothes/layer_1"
              set={setClothing1}
            />
          </div>
          <div class="char-type">
            <div class="char-type-title">
              <h2>Clothing 2</h2>
            </div>
            <Characters
              total={total.clothing2}
              path="clothes/layer_2"
              set={setClothing2}
            />
          </div>
          <div class="char-type">
            <div class="char-type-title">
              <h2>Clothing 3</h2>
            </div>
            <Characters
              total={total.clothing3}
              path="clothes/layer_3"
              set={setClothing3}
            />
          </div>
          {/* <Characters items={x} /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
