//@ts-ignore
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPhones } from "../../redux/actions/fetchPhones.actions";
import PhoneCatalogueItem from "../../components/PhoneCatalogueItem/PhoneCatalogueItem";
import "./styles.scss";
import LoadingDots from "../../components/LoadingDots/LoadingDots";
import { toggleCatalogueView } from "../../redux/actions/toogleCatalogueView.actions";
import { IPhone } from "../../utils/interfaces";
import CatalogueHeader from "../../components/CatalogueHeader/CatalogueHeader";
import {
  setSortCatalogueTo19,
  setSortCatalogueTo91,
  setSortCatalogueToAZ,
  setSortCatalogueToZA,
} from "../../redux/actions/setSortCatalogue.actions";

interface RootState {
  PhonesList: {
    phoneList: Array<IPhone>;
  };
  View: {
    list: boolean;
  };
  SortBy: {
    sortBy: string;
  };
}

const CataloguePage = () => {
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();

  const phones = useSelector((state: RootState) => state.PhonesList.phoneList);
  const viewList = useSelector((state: RootState) => state.View.list);
  const sortBy = useSelector((state: RootState) => state.SortBy.sortBy);

  const handleOnChange = (inputData: string) => {
    setSearchInput(inputData);
  };

  const toogleView = () => {
    dispatch(toggleCatalogueView());
  };

  const sortByPrice19 = () => {
    dispatch(setSortCatalogueTo19());
  };

  const sortByPrice91 = () => {
    dispatch(setSortCatalogueTo91());
  };

  const sortByPriceAZ = () => {
    dispatch(setSortCatalogueToAZ());
  };

  const sortByPriceZA = () => {
    dispatch(setSortCatalogueToZA());
  };

  //THE ! BEHIND IS TO AVOID THE "OBJECT IS POSSIBLY UNDEFINED"

  let filteredPhones = phones.filter((phone: IPhone) => {
    if (phone.name!.toLowerCase().includes(searchInput.toLowerCase())) {
      return phone.name!.toLowerCase().includes(searchInput.toLowerCase());
    } else if (
      phone.manufacturer!.toLowerCase().includes(searchInput.toLowerCase())
    ) {
      return phone
        .manufacturer!.toLowerCase()
        .includes(searchInput.toLowerCase());
    }
    return null;
  });

  //SORTING PHONES

  if (sortBy === "AZ") {
    filteredPhones = filteredPhones.sort(function (a, b) {
      var nameA = a.name!.toLowerCase(),
        nameB = b.name!.toLowerCase();
      if (nameA < nameB)
        //sort string ascending
        return -1;
      if (nameA > nameB) return 1;
      return 0; //default return value (no sorting)
    });
  } else if (sortBy === "ZA") {
    filteredPhones = filteredPhones.sort(function (a, b) {
      var nameA = a.name!.toLowerCase(),
        nameB = b.name!.toLowerCase();
      if (nameA > nameB) return -1;
      if (nameA < nameB) return 1;
      return 0;
    });
  } else if (sortBy === "19") {
    filteredPhones = filteredPhones.sort((a, b) => a.price! - b.price!);
  } else if (sortBy === "91") {
    filteredPhones = filteredPhones.sort((a, b) => a.price! + b.price!);
  }

  useEffect(() => {
    (async () => {
      dispatch(fetchAllPhones());
    })();
  }, [dispatch]);
  if (phones.length === 0)
    return (
      <div>
        <LoadingDots color="#17ae8e" />
      </div>
    );

  return (
    <div className="container__cataloguePage">
      <CatalogueHeader
        handleOnChange={handleOnChange}
        viewList={viewList}
        toogleView={toogleView}
        sortBy={sortBy}
        sortFunctions={[
          sortByPrice19,
          sortByPrice91,
          sortByPriceAZ,
          sortByPriceZA,
        ]}
      />

      <div
        className={
          viewList
            ? "phoneList__list__cataloguePage"
            : "phoneList__grid__cataloguePage"
        }
      >
        {filteredPhones.map((phone: IPhone) => (
          <PhoneCatalogueItem phoneData={phone} viewList={viewList} />
        ))}
      </div>
    </div>
  );
};

export default CataloguePage;
