// API endpoints
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
  },
  SENTIMENTS: {
    GET_ALL: "/sentiments/with_full_detail",
    CREATE: "/sentiments/",
    DELETE: "/sentiments/:id",
  },
  USER: {
    GET_PROFILE: "/user/profile",
    UPDATE_PROFILE: "/user/profile",
    GET_UPLOAD: "/upload",
  },
  EMAIL: {
    SUBSCRIBE: "/email/not_signed",
  },
};

// Error messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: "Network error. Please check your connection.",
  UNAUTHORIZED: "Session expired. Please log in again.",
  FORBIDDEN: "You do not have permission to access this resource.",
  NOT_FOUND: "The requested resource was not found.",
  SERVER_ERROR: "Server error. Please try again later.",
  UNKNOWN_ERROR: "An unexpected error occurred.",
  VALIDATION_ERROR: "Please check your input and try again.",
};

// HTTP status codes
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  SERVICE_UNAVAILABLE: 503,
};
