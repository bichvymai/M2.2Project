import React from "react";

function CharacterItem({ part, item, index }) {
  let imgUrl = `./character/${part}/${item}`;
  imgUrl = item
    ? `./character/${part}/${item}/${index}.png`
    : `./character/${part}/${index}.png`;

  return (
    <div className="char-type">
      {/* <div className="char-type-title">
        <h2>{part.toUpperCase()}</h2>
      </div> */}
      <div className="char-list">
        <div className="div-img">
          <img src={imgUrl} alt="" />
        </div>
      </div>
    </div>
  );
}

export default CharacterItem;
