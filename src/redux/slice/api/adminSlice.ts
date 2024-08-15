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
      data: T;
      message: string;
    };
export type UserType = {
  id: string;
  name: string;
  email: string;
  countryCode: string;
  phoneNumber: string;
  emailVerified: boolean;
  phoneNumberVerified: boolean;
  storeId: string | null;
};
export type StoreTypeData = {
  id: string;
  name: string;
  countryCode: string;
  phoneNumber: string;
  email: string;
  phoneNumberVerified: boolean;
  emailVerified: boolean;
  user:{
    id:string;
    name:string;
    email:string;
    countryCode:string;
    phoneNumber:string;
  },
  address: {
    address: string;
  };
  status: "PENDING" | "APPROVED" | "REJECTED";
};
type UserResponse<T> = {
  users?: T[];
  stores?: T[];
  totalCount: number;
};
export const adminApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    logout: builder.mutation<AuthResponse, string>({
      query: () => ({
        url: `${BASE_ROUTE.ADMIN}${ENDPOINTS.LOGOUT}`,
        method: "POST",
      }),
    }),
    storeRegistrationRequest: builder.query<AuthResponse<StoreType[]>, string>({
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
    getUsers: builder.query<AuthResponse<UserResponse<UserType>>, number>({
      query: (page) => ({
        url: `${BASE_ROUTE.ADMIN}${ENDPOINTS.USERS}?page=${page}`,
        method: "GET",
      }),
    }),
    getStores: builder.query<AuthResponse<UserResponse<StoreTypeData>>, number>(
      {
        query: (page) => ({
          url: `${BASE_ROUTE.ADMIN}${ENDPOINTS.STORES}?page=${page}`,
          method: "GET",
        }),
      }
    ),
  }),
});
export const {
  useLogoutMutation,
  useStoreRegistrationRequestQuery,
  useAcceptStoreRegistrationRequestMutation,
  useRejectStoreRegistrationRequestMutation,
  useGetUsersQuery,
  useGetStoresQuery,
} = adminApiSlice;
