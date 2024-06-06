import { UnknownAction, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import storeRequestReducer from "./slice/storeRequestSlice";
import { apiSlice } from "./slice/api/apiSlice";

const appReducer = combineReducers({
  auth: authReducer,
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
