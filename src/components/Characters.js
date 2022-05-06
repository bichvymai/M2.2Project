import React from "react";
import CharacterItem from "./CharacterItem";

function Characters({ part, items }) {
  // items = [
  //   { item: "earrings", index: 1 },
  //   { item: "earrings", index: 2 },
  //   { item: "hats", index: 2 },
  // ];
  return (
    <div className="char-type">
      <div className="char-type-title">
        <h2>accessories</h2>
      </div>
      <div>
        {items.map((item) => {
          for (let i = 0; i < item.total; i++) {
            <CharacterItem part={part} item={item.item} index={item.index} />;
          }
        })}
      </div>
    </div>
  );
}

export default Characters;
