import React from "react";

function CharacterItem({ name, items, path }) {
  let index = 1;
  let imgUrl = `./character/${name}/${path}`;
  imgUrl = path
    ? `./character/${path}/${name}/${index}.png`
    : `./character/${name}/${index}.png`;

  const itemsMapped = items.map((item) => {
    let itemMapped = [];
    for (let i = 1; i < item.total; i++) {
      imgUrl = path
        ? `./character/${path}/${name}/${i}.png`
        : `./character/${name}/${i}.png`;
      itemMapped.push(
        <div className="div-img">
          <img src={imgUrl} alt="" />
        </div>
      );
    }
    console.log(itemMapped);
    return itemMapped;
  });
  console.log("ItemsMapped", itemsMapped);
  return (
    <div className="char-type">
      <div className="char-type-title">
        <h2>{name}</h2>
      </div>
      <div>
        <div className="char-list">{itemsMapped}</div>
      </div>
    </div>
  );
}

export default CharacterItem;
