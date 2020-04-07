import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from './reducers/root-reducer';

const middlewares = [logger];

export default createStore(rootReducer, applyMiddleware(...middlewares))