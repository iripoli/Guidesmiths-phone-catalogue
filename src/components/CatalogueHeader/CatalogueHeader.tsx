import React from "react";
import "./styles.scss";
import Searchbox from "../Searchbox/Searchbox";

interface IHeader {
  handleOnChange: Function;
  viewList: boolean;
  toogleView: Function;
  sortFunctions: Array<Function>;
  sortBy: string;
}

const CatalogueHeader = ({
  handleOnChange,
  viewList,
  toogleView,
  sortFunctions,
  sortBy,
}: IHeader) => {
  const [
    sortByPrice19,
    sortByPrice91,
    sortByPriceAZ,
    sortByPriceZA,
  ] = sortFunctions;
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

        {sortBy === "AZ" ? (
          <img
            src={require("../../assets/images/sort-z-a.png")}
            onClick={() => sortByPriceZA()}
            alt="Change view to grid"
            className="sortIcon__cataloguePage"
          />
        ) : (
          <img
            src={require("../../assets/images/sort-a-z.png")}
            onClick={() => sortByPriceAZ()}
            alt="Change view to list"
            className="sortIcon__cataloguePage"
          />
        )}
        {sortBy === "19" ? (
          <img
            src={require("../../assets/images/sort-9-1.png")}
            onClick={() => sortByPrice91()}
            alt="Change view to grid"
            className="sortIcon__cataloguePage"
          />
        ) : (
          <img
            src={require("../../assets/images/sort-1-9.png")}
            onClick={() => sortByPrice19()}
            alt="Change view to list"
            className="sortIcon__cataloguePage"
          />
        )}
      </div>
    </div>
  );
};
export default CatalogueHeader;
