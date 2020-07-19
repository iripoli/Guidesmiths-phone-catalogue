import React from "react";
import "./styles.scss";
import Searchbox from "../Searchbox/Searchbox";

interface IHeader {
  handleOnChange: Function;
  viewList: boolean;
  toogleView: Function;
}

const CatalogueHeader = ({ handleOnChange, viewList, toogleView }: IHeader) => {
  console.log(viewList);
  return (
    <div className="container__catalogueHeader">
      <Searchbox
        placeholder="Search by name or brand"
        className="searchbox__cataloguePage"
        handleOnChange={handleOnChange}
      />
      <div className="iconContainer__cataloguePage">
        {viewList ? (
          <img
            src={require("../../assets/images/grid-icon.png")}
            onClick={() => toogleView()}
            alt="Change view to grid"
            className="toogleViewIcon__cataloguePage"
          />
        ) : (
          <img
            src={require("../../assets/images/list-icon.png")}
            onClick={() => toogleView()}
            alt="Change view to list"
            className="toogleViewIcon__cataloguePage"
          />
        )}
        <p>{viewList ? "Grid" : "List"}</p>
      </div>
    </div>
  );
};
export default CatalogueHeader;
