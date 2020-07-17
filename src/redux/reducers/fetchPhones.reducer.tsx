import {
  FETCH_PHONES_PENDING,
  FETCH_PHONES_SUCCESS,
  FETCH_PHONES_FAILED,
} from "../actions.types";

const INITIAL_STATE = {
  phoneList: [],
  isFetching: false,
  errors: "",
};

export const fetchPhonesReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case FETCH_PHONES_PENDING:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_PHONES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        phoneList: action.payload,
      };
    case FETCH_PHONES_FAILED:
      return {
        ...state,
        isFetching: false,
        errors: action.payload,
      };
    default:
      return state;
  }
};
