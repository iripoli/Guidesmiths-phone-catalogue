import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPhones } from "../../redux/actions/fetchPhones.actions";

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

  return <div>Catalogue Page</div>;
};

export default CataloguePage;
