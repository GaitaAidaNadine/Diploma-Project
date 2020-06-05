const STATE_INITIAL = {
  user: null,
};
const userReducer = (state = STATE_INITIAL, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};
export default userReducer;
