import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import { IPhone } from "../../utils/interfaces";

interface Data {
  phoneData: IPhone;
  viewType: boolean;
}

const PhoneCatalogueItem = ({ phoneData, viewType }: Data) => {
  console.log(phoneData);
  const { _id, images, name } = phoneData;
  return (
    <Link to={`/catalogue/${_id}`} className="itemName">
      <div className="itemContainer">
        <img src={images} alt={`Front of ${name}`} className="itemImage" />
        <h1 className="itemName">{name}</h1>
      </div>
    </Link>
  );
};
export default PhoneCatalogueItem;
