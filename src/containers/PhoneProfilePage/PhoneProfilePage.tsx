import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchOnePhone } from "../../redux/actions/fetchPhones.actions";
import LoadingDots from "../../components/LoadingDots/LoadingDots";
import PhoneProfile from "../../components/PhoneProfile/PhoneProfile";
import { IPhone } from "../../utils/interfaces";

interface RootState {
  Phone?: {
    phone: Object | undefined;
  };
  PhonesList?: {
    phoneList: Array<Object>;
  };
}

const PhoneProfilePage = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  let phone = useSelector((state: RootState) => state.Phone!.phone);
  const phoneList = useSelector(
    (state: RootState) => state.PhonesList!.phoneList
  );

  //IF PHONES HAVEN'T BEEN FETCHED, FETCHED THE ONE THAT MATCHES THE ID

  useEffect(() => {
    if (phoneList.length === 0) {
      (async () => {
        await dispatch(fetchOnePhone(id));
      })();
    }
  }, [dispatch, phoneList, id]);

  // IF PHONES HAVE BEEN FETCHED USE FIND THE ONE THAT MATCHES THE ID

  if (phoneList.length > 0) {
    phone = phoneList.find((phone: IPhone) => phone._id === id);
  }

  //IF THERE'S NO PHONE SHOW THE LOADING COMPONENT

  if (!phone) {
    return <LoadingDots color="#17ae8e" />;
  }
  return (
    <div>
      <PhoneProfile phone={phone} />
    </div>
  );
};
export default PhoneProfilePage;
