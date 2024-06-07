import { BASE_ROUTE, ENDPOINTS } from "@/utils/Endpoints";
import { apiSlice } from "./apiSlice";

export type StoreType = {
  id: string;
  name: string;
  countryCode: string;
  phoneNumber: string;
  email: string;
  userId: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
  address: {
    address: string;
  } | null;
};
type AuthResponse<T = undefined> = T extends undefined
  ? {
      success: boolean;
      message: string;
    }
  : {
      success: boolean;
      data: T[];
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
    storeRegistrationRequest: builder.query<AuthResponse<StoreType>, string>({
      query: () => ({
        url: `${BASE_ROUTE.ADMIN}${ENDPOINTS.STORE_REGISTRATION_REQUEST}`,
        method: "GET",
      }),
      providesTags: ["StoreRequest"],
    }),
    acceptStoreRegistrationRequest: builder.mutation<
      AuthResponse,
      { storeId: string }
    >({
      query: (data) => ({
        url: `${BASE_ROUTE.ADMIN}${ENDPOINTS.ACCEPT_STORE_REQUEST}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["StoreRequest"],
    }),
    rejectStoreRegistrationRequest: builder.mutation<
      AuthResponse,
      { userId: string; storeId: string }
    >({
      query: (data) => ({
        url: `${BASE_ROUTE.ADMIN}${ENDPOINTS.REJECT_STORE_REQUEST}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["StoreRequest"],
    }),
  }),
});
export const {
  useLogoutMutation,
  useStoreRegistrationRequestQuery,
  useAcceptStoreRegistrationRequestMutation,
  useRejectStoreRegistrationRequestMutation,
} = adminApiSlice;
