import { APIKit } from "../../utils/http-common";
import {
  FETCH_PHONES_SUCCESS,
  FETCH_PHONES_FAILED,
  FETCH_PHONES_PENDING,
  FETCH_ONE_PHONES_PENDING,
  FETCH_ONE_PHONES_SUCCESS,
  FETCH_ONE_PHONES_FAILED,
} from "../actions.types";
import { IFetchedData } from "../../utils/interfaces";

export const fetchAllPhones = () => (dispatch: any) => {
  dispatch({ type: FETCH_PHONES_PENDING });

  APIKit.get("/list")
    .then((response) => response)
    .then((data) =>
      dispatch({
        type: FETCH_PHONES_SUCCESS,
        payload: data.data,
      }).then((data: IFetchedData) => console.log(data.data))
    )
    .catch((err) => dispatch({ type: FETCH_PHONES_FAILED, payload: err }));
};

export const fetchOnePhone = (id: string) => (dispatch: Function) => {
  dispatch({ type: FETCH_ONE_PHONES_PENDING });

  APIKit.get(`/${id}`)
    .then((response) => response)
    .then((data) =>
      dispatch({
        type: FETCH_ONE_PHONES_SUCCESS,
        payload: data.data,
      }).then((data: IFetchedData) => console.log(data.data))
    )
    .catch((err) => dispatch({ type: FETCH_ONE_PHONES_FAILED, payload: err }));
};
