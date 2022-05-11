import React from "react";

function Characters({ total, path, set }) {
  let parts = [];
  for (let i = 0; i < total; i++) {
    parts.push(
      <div key={path + i} className="div-img" onClick={() => set(i)}>
        <img src={`character/${path}/${i + 1}.png`} alt="" />
      </div>
    );
  }

  return <div className="char-list">{parts}</div>;
  // let listItems = items;
  // listItems = items.map((item) => {
  //   return (
  //     <CharacterItem name={item.name} items={item.items} path={item.path} />
  //   );
  // });

  // return <div>{listItems}</div>;
}

export default Characters;
