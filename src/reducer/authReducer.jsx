export const ACTIONAUTH = {
  LOGIN: "login",
  LOGOUT: "logout",
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case ACTIONAUTH.LOGIN:
      return {
        user: action.payload,
      };
    case ACTIONAUTH.LOGOUT:
      return {
        user: null,
      };
    default:
      return state;
  }
};
