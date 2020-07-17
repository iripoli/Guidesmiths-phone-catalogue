import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllPhones } from "../../redux/actions/fetchPhones.actions";

const CataloguePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      await dispatch(fetchAllPhones());
    })();
  }, []);

  return <div>Catalogue Page</div>;
};

export default CataloguePage;
