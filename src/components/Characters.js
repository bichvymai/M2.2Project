import React from "react";
import CharacterItem from "./CharacterItem";

function Characters({ items }) {
  let listItems = items;
  listItems = items.map((item) => {
    return (
      <CharacterItem name={item.name} items={item.items} path={item.path} />
    );
  });

  return <div>{listItems}</div>;
}

export default Characters;
