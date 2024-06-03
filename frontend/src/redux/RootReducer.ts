import { UnknownAction, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";

const appReducer = combineReducers({
  auth: authReducer,
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
