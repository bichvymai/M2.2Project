import React from "react";
import CharacterItem from "./CharacterItem";

function Characters({ items }) {
  // items = [
  //   { item: "earrings", index: 1 },
  //   { item: "earrings", index: 2 },
  //   { item: "hats", index: 2 },
  // ];
  let listItems = items;
  listItems = items.map((item) => {
    return (
      <CharacterItem name={item.name} items={item.items} path={item.path} />
    );
  });

  return <div>{listItems}</div>;
}

export default Characters;
