import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";

interface Item {
  image: string;
  name: string;
  id: string;
}

const PhoneCatalogueItem = ({ image, name, id }: Item) => {
  return (
    <Link to={`/catalogue/${id}`} className="itemName">
      <div className="itemContainer">
        <img src={image} alt={`Front of ${name}`} className="itemImage" />
        <h1 className="itemName">{name}</h1>
      </div>
    </Link>
  );
};
export default PhoneCatalogueItem;
