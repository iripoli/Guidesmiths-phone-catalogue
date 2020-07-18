import {
  FETCH_PHONES_PENDING,
  FETCH_PHONES_SUCCESS,
  FETCH_PHONES_FAILED,
  FETCH_ONE_PHONES_PENDING,
  FETCH_ONE_PHONES_SUCCESS,
  FETCH_ONE_PHONES_FAILED,
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

export const fetchOnePhoneReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case FETCH_ONE_PHONES_PENDING:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_ONE_PHONES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        phone: action.payload,
      };
    case FETCH_ONE_PHONES_FAILED:
      return {
        ...state,
        isFetching: false,
        errors: action.payload,
      };
    default:
      return state;
  }
};
