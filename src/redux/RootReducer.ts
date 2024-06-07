import { UnknownAction, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import storeRequestReducer from "./slice/storeRequestSlice";
import { apiSlice } from "./slice/api/apiSlice";
import loadingSlice from "./slice/loadingSlice";

const appReducer = combineReducers({
  auth: authReducer,
  loading: loadingSlice,
  storeRequest: storeRequestReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
  
});

const RootReducer = (
  state: ReturnType<typeof appReducer> | undefined,
  action: UnknownAction
) => {
  if (action.type === "auth/logOut") {
    state = undefined;
  }
  return appReducer(state, action);
};

export type RootState = ReturnType<typeof appReducer>;
export default RootReducer;
