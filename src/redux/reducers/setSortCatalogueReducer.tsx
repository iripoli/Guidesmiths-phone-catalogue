import {
  SET_SORT_AZ,
  SET_SORT_ZA,
  SET_SORT_19,
  SET_SORT_91,
} from "../actions.types";

const INITIAL_STATE = {
  sortBy: "",
};

const setSortCatalogueReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case SET_SORT_AZ:
      return {
        ...state,
        sortBy: "AZ",
      };
    case SET_SORT_ZA:
      return {
        ...state,
        sortBy: "ZA",
      };
    case SET_SORT_19:
      return {
        ...state,
        sortBy: "19",
      };
    case SET_SORT_91:
      return {
        sortBy: "91",
      };
    default:
      return state;
  }
};

export default setSortCatalogueReducer;
