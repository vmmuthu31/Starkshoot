import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  provider: null,
  address: null,
};

const connectionSlice = createSlice({
  name: "connection",
  initialState,
  reducers: {
    setConnectionDetails: (state, action) => {
      state.provider = action.payload.provider;
      state.address = action.payload.address;
    },
    clearConnectionDetails: () => initialState,
  },
});

// Export the generated action creators
export const { setConnectionDetails, clearConnectionDetails } =
  connectionSlice.actions;

export default connectionSlice.reducer;
