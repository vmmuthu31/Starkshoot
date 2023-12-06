import { combineReducers } from "@reduxjs/toolkit";
import yourSliceReducer from "./slices/yourSlice";
import connectionReducer from "./slices/connectionReducer"; // Import the connection reducer

const rootReducer = combineReducers({
  yourSlice: yourSliceReducer,
  // Add more slices here
  connection: connectionReducer, // Add the connection reducer
});

export default rootReducer;
