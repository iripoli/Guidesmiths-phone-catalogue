import { TOOGLE_CATALOGUE_VIEW } from "../actions.types";

const INITIAL_STATE = {
  list: false,
};

interface Action<T, P> {
  readonly type: T;
  readonly payload?: P;
}
const toogleCatalogueViewReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case TOOGLE_CATALOGUE_VIEW:
      return {
        ...state,
        list: !state.list,
      };
    default:
      return state;
  }
};

export default toogleCatalogueViewReducer;
