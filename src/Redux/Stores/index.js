import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../Reducers/index";
import { forbiddenWordsMiddleware } from "../MiddleWare/index";
import createSagaMiddleware from "redux-saga";
import apiSaga from "../Sagas/api-saga";
//import thunk from "redux-thunk";

const initialiseSagaMiddleware = createSagaMiddleware();

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  //storeEnhancers(applyMiddleware(forbiddenWordsMiddleware, thunk))
  storeEnhancers(
    applyMiddleware(forbiddenWordsMiddleware, initialiseSagaMiddleware)
  )
);

initialiseSagaMiddleware.run(apiSaga);

export default store;
