import { BASE_ROUTE, ENDPOINTS } from "@/utils/Endpoints";
import { apiSlice } from "./apiSlice";

type AuthResponse = {
  success: boolean;
  message: string;
};

export const adminApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    logout: builder.mutation<AuthResponse, string>({
      query: () => ({
        url: `${BASE_ROUTE.ADMIN}${ENDPOINTS.LOGOUT}`,
        method: "POST",
      }),
    }),
    storeRegistrationRequest: builder.query<AuthResponse, string>({
      query: () => ({
        url: `${BASE_ROUTE.ADMIN}${ENDPOINTS.STORE_REGISTRATION_REQUEST}`,
        method: "GET",
      }),
    }),
  }),
});
export const { useLogoutMutation, useStoreRegistrationRequestQuery } = adminApiSlice;
