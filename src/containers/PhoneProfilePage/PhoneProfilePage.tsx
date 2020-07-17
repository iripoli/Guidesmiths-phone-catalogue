import React, { Props, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchOnePhone } from "../../redux/actions/fetchPhones.actions";
import LoadingDots from "../../components/LoadingDots/LoadingDots";
import PhoneProfile from "../../components/PhoneProfile/PhoneProfile";

interface RootState {
  Phone?: any;
  Phones_Reducer?: any;
}

const PhoneProfilePage = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const phone = useSelector((state: RootState) => state.Phone.phone);

  useEffect(() => {
    (async () => {
      await dispatch(fetchOnePhone(id));
    })();
  }, [dispatch]);

  if (!phone) {
    return <LoadingDots />;
  }
  return (
    <div>
      <PhoneProfile phone={phone} />
    </div>
  );
};
export default PhoneProfilePage;
