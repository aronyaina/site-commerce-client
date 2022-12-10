export const ACTIONAUTH = {
  LOGIN: "login",
  LOGOUT: "logout",
};

export const initialState = {
  localUser: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
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
