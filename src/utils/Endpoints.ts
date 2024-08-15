const BASE_ROUTE = {
  AUTH: "/admin/auth",
  ADMIN: "/admin",
};

const ENDPOINTS = {
  LOGIN: "/login",
  LOGOUT: "/logout",
  REFRESH_TOKEN: "/refresh-token",
  STORE_REGISTRATION_REQUEST: "/store-registration-request",
  ACCEPT_STORE_REQUEST: "/accept-store-request",
  REJECT_STORE_REQUEST: "/reject-store-request",
  USERS: "/users",
  STORES: "/stores",
};

const BROWSER_ROUTE = {
  LOGIN: "/login",
  LOGOUT: "/logout",
  STORE_REQUESTS: "/store-requests",
  DASHBOARD: "/",
  USERS: "/users",
  STORES: "/stores",
};

export { BASE_ROUTE, ENDPOINTS, BROWSER_ROUTE };
