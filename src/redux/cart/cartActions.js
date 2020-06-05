export const addItem = (item) => {
  return {
    type: "ADD_ITEM",
    payload: item,
  };
};

export const removeItem = (item) => {
  return {
    type: "REMOVE_ITEM",
    payload: item,
  };
};

export const deleteItemFromCart = (item) => {
  return {
    type: "DELETE_ITEM_FROM_CART",
    payload: item,
  };
};

export const toggleCartDropdownVisibility = () => {
  return {
    type: "TOGGLE_CART_DROPDOWN_VISIBILITY",
  };
};
