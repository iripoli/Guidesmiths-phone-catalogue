import { APIKit } from "../../utils/http-common";
import {
  FETCH_PHONES_SUCCESS,
  FETCH_PHONES_FAILED,
  FETCH_PHONES_PENDING,
} from "../actions.types";

export const fetchAllPhones = () => (dispatch: any) => {
  dispatch({ type: FETCH_PHONES_PENDING });

  APIKit.get("/list")
    .then((response) => response)
    .then((data) =>
      dispatch({
        type: FETCH_PHONES_SUCCESS,
        payload: data.data,
      }).then((data: any) => console.log(data.data))
    )
    .catch((err) => dispatch({ type: FETCH_PHONES_FAILED, payload: err }));
};
