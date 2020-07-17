import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPhones } from "../../redux/actions/fetchPhones.actions";
import PhoneCatalogueItem from "../../components/PhoneCatalogueItem/PhoneCatalogueItem";
import "./styles.scss";
import LoadingDots from "../../components/LoadingDots/LoadingDots";

interface RootState {
  Phones_Reducer: any;
}

const CataloguePage = () => {
  const phones = useSelector(
    (state: RootState) => state.Phones_Reducer.phoneList
  );
  console.log(phones);

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
      <div>
        <div className="phoneListContainer">
          {phones.map(({ name, images, _id }: any) => (
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
