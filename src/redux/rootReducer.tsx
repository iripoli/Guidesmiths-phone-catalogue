import { combineReducers } from "redux";
import {
  fetchPhonesReducer,
  fetchOnePhoneReducer,
} from "./reducers/fetchPhones.reducer";
import toogleCatalogueViewReducer from "./reducers/toogleCatalogueView.reducer";
import setSortCatalogueReducer from "./reducers/setSortCatalogueReducer";

const rootReducer = combineReducers({
  PhonesList: fetchPhonesReducer,
  Phone: fetchOnePhoneReducer,
  View: toogleCatalogueViewReducer,
  SortBy: setSortCatalogueReducer,
});
export default rootReducer;
