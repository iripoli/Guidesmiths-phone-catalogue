import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPhones } from "../../redux/actions/fetchPhones.actions";
import PhoneCatalogueItem from "../../components/PhoneCatalogueItem/PhoneCatalogueItem";
import "./styles.scss";
import LoadingDots from "../../components/LoadingDots/LoadingDots";
import Searchbox from "../../components/Searchbox/Searchbox";
import { toggleCatalogueView } from "../../redux/actions/toogleCatalogueView.actions";
import { IPhone } from "../../utils/interfaces";

interface RootState {
  Phones_Reducer: {
    phoneList: Array<any>;
  };
  View: {
    list: boolean;
  };
}

const CataloguePage = () => {
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();
  const phones = useSelector(
    (state: RootState) => state.Phones_Reducer.phoneList
  );
  const viewList = useSelector((state: RootState) => state.View.list);

  const handleOnChange = (inputData: string) => {
    setSearchInput(inputData);
  };

  const toogleView = () => {
    dispatch(toggleCatalogueView());
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
  else;
  return (
    <div className="container__cataloguePage">
      <Searchbox
        placeholder="Search by name or brand"
        className="searchbox__cataloguePage"
        handleOnChange={handleOnChange}
      />

      {viewList ? (
        <img
          src={require("../../assets/images/grid-icon.png")}
          onClick={() => toogleView()}
          alt="Change view to grid"
        />
      ) : (
        <img
          src={require("../../assets/images/list-icon.png")}
          onClick={() => toogleView()}
          alt="Change view to list"
        />
      )}
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
