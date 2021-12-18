import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";

const composeEnhance = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhance(applyMiddleware(thunk)));

export default store;
