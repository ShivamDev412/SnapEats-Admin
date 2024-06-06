import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  storeRequestCount: 0,
};
const authSlice = createSlice({
  name: "storeRequestCount",
  initialState,
  reducers: {
    setStoreRequestCount: (state) => {
      state.storeRequestCount += 1;
    },
    clearStoreRequestCount: (state) => {
      state.storeRequestCount = 0;
    },
  },
});
export const { setStoreRequestCount, clearStoreRequestCount } =
  authSlice.actions;
export default authSlice.reducer;
