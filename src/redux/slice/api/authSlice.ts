import { BASE_ROUTE, ENDPOINTS } from "@/utils/Endpoints";
import { apiSlice } from "./apiSlice";

type AuthResponse = {
  "auth-token"?: string;
  success: boolean;
  message: string;
};
type LoginType = {
  email: string;
  password: string;
};

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<AuthResponse, LoginType>({
      query: (data) => ({
        url: `${BASE_ROUTE.AUTH}${ENDPOINTS.LOGIN}`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});
export const { useLoginMutation } = authApiSlice;
