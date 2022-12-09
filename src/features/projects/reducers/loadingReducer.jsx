export const ACTIONLOAD = {
  FETCH_REQUEST: "fetchRequest",
  FETCH_SUCCESS: "fetchSuccess",
  FETCH_FAILURE: "fetchFailure",
};

export default function loadingReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case ACTIONLOAD.FETCH_REQUEST:
      return { ...state, loading: true };
    case ACTIONLOAD.FETCH_SUCCESS:
      return { ...state, products: payload, loading: false };
    case ACTIONLOAD.FETCH_FAILURE:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
}
