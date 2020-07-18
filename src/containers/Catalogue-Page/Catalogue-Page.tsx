import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPhones } from "../../redux/actions/fetchPhones.actions";
import PhoneCatalogueItem from "../../components/PhoneCatalogueItem/PhoneCatalogueItem";
import "./styles.scss";
import LoadingDots from "../../components/LoadingDots/LoadingDots";
import Searchbox from "../../components/Searchbox/Searchbox";

interface RootState {
  Phones_Reducer: any;
}

const CataloguePage = () => {
  const [searchInput, setSearchInput] = useState("");
  const phones = useSelector(
    (state: RootState) => state.Phones_Reducer.phoneList
  );

  const handleOnChange = (inputData: string) => {
    setSearchInput(inputData);
  };

  let filteredPhones = phones.filter((phone: any) => {
    if (phone.name.toLowerCase().includes(searchInput.toLowerCase())) {
      return phone.name.toLowerCase().includes(searchInput.toLowerCase());
    } else if (
      phone.manufacturer.toLowerCase().includes(searchInput.toLowerCase())
    ) {
      return phone.manufacturer
        .toLowerCase()
        .includes(searchInput.toLowerCase());
    }
  });

  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      await dispatch(fetchAllPhones());
    })();
  }, [dispatch]);
  if (phones.length === 0)
    return (
      <div>
        <LoadingDots color="#17ae8e" />
      </div>
    );
  else
    return (
      <div className="container__cataloguePage">
        <Searchbox
          placeholder="Search by name or brand"
          className="searchbox__cataloguePage"
          handleOnChange={handleOnChange}
        />
        <div className="phoneList__cataloguePage">
          {filteredPhones.map(({ name, images, _id }: any) => (
            <PhoneCatalogueItem
              name={name}
              image={images[0]}
              id={_id}
              key={_id}
            />
          ))}
        </div>
      </div>
    );
};

export default CataloguePage;
