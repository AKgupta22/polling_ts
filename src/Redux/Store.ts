import { applyMiddleware, createStore } from "redux";
import AllReducer from "./Reducers"
import createSagaMiddleware from "redux-saga"
import rootSaga from "./Saga";
import logger from "redux-logger"
const sagaMiddleware = createSagaMiddleware()

const MyStore = createStore(AllReducer, applyMiddleware(sagaMiddleware, logger))
sagaMiddleware.run(rootSaga)
export default MyStore