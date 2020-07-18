import { combineReducers } from "redux";
import {
  fetchPhonesReducer,
  fetchOnePhoneReducer,
} from "./reducers/fetchPhones.reducer";
import toogleCatalogueViewReducer from "./reducers/toogleCatalogueView.reducer";

const rootReducer = combineReducers({
  Phones_Reducer: fetchPhonesReducer,
  Phone: fetchOnePhoneReducer,
  View: toogleCatalogueViewReducer,
});
export default rootReducer;
