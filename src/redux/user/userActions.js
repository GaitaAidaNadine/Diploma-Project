//actions are functions that return objects

export const setUser = (user) => {
  return {
    type: "SET_CURRENT_USER",
    payload: user,
  };
};
