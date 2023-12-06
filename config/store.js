import { createStore, combineReducers, applyMiddleware } from "redux";
import connectionReducer from "./connectionReducer";
import { getDefaultMiddleware } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  // ... other reducers
  connection: connectionReducer,
});

// Customized middleware to bypass serializability checks for specific actions
const middleware = getDefaultMiddleware({
  serializableCheck: {
    ignoredActions: ["SET_CONNECTION", "CLEAR_CONNECTION"],
  },
});

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
