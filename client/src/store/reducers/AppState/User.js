const defaultState = {
  pendingUsers: [],
};

const user = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_PENDING_USER_SUCCESS": {
      return {
        ...state,
        pendingUsers: action.res.result,
      };
    }
    default:
      return state;
  }
};

export default user;
