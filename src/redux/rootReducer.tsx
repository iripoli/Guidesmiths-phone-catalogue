import { combineReducers } from "redux";
import { fetchPhonesReducer } from "./reducers/fetchPhones.reducer";

const rootReducer = combineReducers({
  Phones_Reducer: fetchPhonesReducer,
});
export default rootReducer;
