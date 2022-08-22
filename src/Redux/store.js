import thunk from "redux-thunk";
import { createStore,applyMiddleware } from "redux";
// import { configureStore } from "@reduxjs/toolkit";
// import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./Reducers/index";

const composeEnhancers = typeof window !== "undefined" ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:()=> {};

export const store = createStore(reducer,composeEnhancers(applyMiddleware(thunk)) );