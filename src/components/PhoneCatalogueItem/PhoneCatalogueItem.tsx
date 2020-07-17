import React from "react";
import "./styles.scss";

interface Item {
  image: string;
  name: string;
}

const PhoneCatalogueItem = ({ image, name }: Item) => {
  return (
    <div className="itemContainer">
      <img src={image} alt={`Front of ${name}`} className="itemImage" />
      <h1 className="itemName">{name}</h1>
    </div>
  );
};
export default PhoneCatalogueItem;
