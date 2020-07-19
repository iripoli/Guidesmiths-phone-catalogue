import { createStore, compose, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./rootReducer";

const middlewares = [thunkMiddleware, logger];
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const composeEnhancers = compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);
