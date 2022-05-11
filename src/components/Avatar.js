import React from "react";
import CharacterItem from "./CharacterItem";

function Avatar(
  {
    body,
    eyes,
    hair,
    clothing1,
    clothing2,
    clothing3,
    mouth,
    eyebrows,
    glasses,
  },
  ref
) {
  return (
    <div className="avatar-image">
      <CharacterItem path="body" index={body} zIndex={0} />
      <CharacterItem path="eyes" index={eyes} zIndex={1} />
      <CharacterItem path="hair" index={hair} zIndex={6} />
      <CharacterItem path="clothes/layer_1" index={clothing1} zIndex={2} />
      <CharacterItem path="clothes/layer_2" index={clothing2} zIndex={3} />
      <CharacterItem path="clothes/layer_3" index={clothing3} zIndex={4} />
      <CharacterItem path="mouths" index={mouth} zIndex={4} />
      <CharacterItem path="noses" index={0} zIndex={4} />
      <CharacterItem path="eyebrows" index={eyebrows} zIndex={4} />
      <CharacterItem path="accessories/glasses" index={glasses} zIndex={5} />
    </div>
  );
}

//   <>
//     <div className="avatar-image">
//       <img className="body" src="./character/body/1.png" alt="" />
//       <img
//         className="clothes-layer1"
//         src="./character/clothes/layer_1/1.png"
//         alt=""
//       />
//       <img
//         className="clothes-layer2"
//         src="./character/clothes/layer_2/1.png"
//         alt=""
//       />
//       <img
//         className="clothes-layer3"
//         src="./character/clothes/layer_3/1.png"
//         alt=""
//       />
//       <img className="mouth" src="./character/mouths/3.png" alt="" />
//       <img className="nose" src="./character/moses/1.png" alt="" />
//       <img className="eyes" src="./character/eyes/1.png" alt="" />
//       <img className="eyebrows" src="./character/eyebrows/{eye}.png" alt="" />
//       <img
//         className="glasses"
//         src="./character/accessories/glasses/1.png"
//         alt=""
//       />
//       <img className="hair" src="./character/hair/1.png" alt="" />
//     </div>

//     <div className="randomize">
//       <button>RANDOMIZE!</button>
//     </div>
//   </>
// );

export default Avatar;
