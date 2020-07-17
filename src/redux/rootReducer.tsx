import { combineReducers } from "redux";
import {
  fetchPhonesReducer,
  fetchOnePhoneReducer,
} from "./reducers/fetchPhones.reducer";

const rootReducer = combineReducers({
  Phones_Reducer: fetchPhonesReducer,
  Phone: fetchOnePhoneReducer,
});
export default rootReducer;
