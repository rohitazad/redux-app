import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../Reducers/index";
import { forbiddenWordsMiddleware } from "../MiddleWare/index";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(forbiddenWordsMiddleware))
);

export default store;
