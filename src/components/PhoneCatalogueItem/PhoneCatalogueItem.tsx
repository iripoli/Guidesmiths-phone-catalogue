import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import { IPhone } from "../../utils/interfaces";

interface Data {
  phoneData: IPhone;
  viewList: boolean;
}

const PhoneCatalogueItem = ({ phoneData, viewList }: Data) => {
  const {
    _id,
    images,
    name,
    manufacturer,
    price,
    screen,
    ram,
    processor,
  } = phoneData;
  return (
    <Link
      to={`/catalogue/${_id}`}
      className={!viewList ? "" : "container__item"}
    >
      <div className={viewList ? "itemContainer__list" : "itemContainer__grid"}>
        <img src={images} alt={`Front of ${name}`} className="itemImage" />
        <h1 className="itemName">{name}</h1>
        {!viewList ? null : (
          <>
            <h1 className="itemName">{manufacturer}</h1>
            <h1 className="itemName">{screen}</h1>
            <h1 className="itemName">{processor}</h1>
            <h1 className="itemName">{ram}gb</h1>
          </>
        )}
      </div>
    </Link>
  );
};
export default PhoneCatalogueItem;
