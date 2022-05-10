import React from "react";

function Avatar(name, path, items) {
  // let imageBody = 17;
  // let index = 0;
  // let random = `./character/body/${Math.floor(
  //   Math.random() * items[name].items.total + 1
  // )}.png`;

  // console.log(index);
  return (
    <>
      <div className="avatar-image">
        <img className="body" src="./character/body/1.png" alt="" />
        <img
          className="clothes-layer1"
          src="./character/clothes/layer_1/1.png"
          alt=""
        />
        <img
          className="clothes-layer2"
          src="./character/clothes/layer_2/1.png"
          alt=""
        />
        <img
          className="clothes-layer3"
          src="./character/clothes/layer_3/1.png"
          alt=""
        />
        <img className="mouth" src="./character/mouths/3.png" alt="" />
        <img className="nose" src="./character/moses/1.png" alt="" />
        <img className="eyes" src="./character/eyes/1.png" alt="" />
        <img className="eyebrows" src="./character/eyebrows/{eye}.png" alt="" />
        <img
          className="glasses"
          src="./character/accessories/glasses/1.png"
          alt=""
        />
        <img className="hair" src="./character/hair/1.png" alt="" />
      </div>

      <div className="randomize">
        <button>RANDOMIZE!</button>
      </div>
    </>
  );
}

export default Avatar;
