// connectionActions.js
import {
  SET_CONNECTION_DETAILS,
  CLEAR_CONNECTION_DETAILS,
} from "./actionTypes";

export const setConnectionDetails = (connection) => {
  const connectionDetails = {
    provider: connection.provider,
    address: connection.account.address,
  };

  return {
    type: "SET_CONNECTION_DETAILS",
    payload: connectionDetails,
  };
};

export const clearConnectionDetails = () => {
  return {
    type: "CLEAR_CONNECTION_DETAILS",
  };
};
