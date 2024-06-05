import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalAmount: 0,
  totalItems: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // ##########################################################################
    // ------------------add an item to the cart----------------------          #
    // ##########################################################################

    addToCart: (state, action) => {
      const newItem = action.payload;

      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === newItem.id
      );

      const updatedState = {
        ...state,
        totalQuantity: state.totalQuantity + 1,
        totalAmount: state.totalAmount + newItem.price,
        totalItems:
          existingItemIndex === -1 ? state.totalItems + 1 : state.totalItems,
      };

      const newState =
        existingItemIndex !== -1
          ? {
              ...updatedState,
              cartItems: state.cartItems.map((item, index) =>
                index === existingItemIndex
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            }
          : {
              ...updatedState,
              cartItems: [...state.cartItems, { ...newItem, quantity: 1 }],
            };

      return newState;
    },

    // ##########################################################################
    // ------------------add quantity in the cart----------------------         #
    // ##########################################################################

    addQuantity(state, action) {
      const itemToAdd = action.payload;
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === newItem.id
      );

      const updatedState = {
        ...state,
        totalQuantity: state.totalQuantity + 1,
        totalAmount: state.totalAmount + itemToAdd.price,
        totalItems: state.totalItems,
      };

      const newState = {
        ...updatedState,
        cartItems: state.cartItems.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
      return newState;
    },

    // ##########################################################################
    // ------------------remove quantity from the cart----------------------     #
    // ##########################################################################

    removeQuantity(state, action) {
      const itemToRemoveQuantity = action.payload;

      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === newItem.id
      );

      const updatedState = {
        ...state,
        totalQuantity: Math.max(state.totalQuantity - 1, 0),
        totalAmount: Math.max(
          state.totalAmount - itemToRemoveQuantity.price,
          0
        ),
        totalItems: state.totalItems,
      };

      const newState = {
        ...updatedState,
        cartItems: state.cartItems.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
            : item
        ),
      };
      return newState;
    },

    // ##########################################################################
    // ------------------remove quantity from the cart----------------------    #
    // ##########################################################################

    removeFromCart: (state, action) => {
      const itemId = action.payload;

      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === itemId
      );

      if (existingItemIndex === -1) {
        return state;
      }

      const updatedCartItems = [...state.cartItems];

      updatedCartItems.splice(existingItemIndex, 1);

      const newTotalQuantity =
        state.totalQuantity -
        (state.cartItems[existingItemIndex] || {}).quantity;

      const newTotalAmount =
        state.totalAmount -
        (state.cartItems[existingItemIndex] || {}).price *
          (state.cartItems[existingItemIndex] || {}).quantity;

      const newTotalItems = state.totalItems - 1;

      return {
        ...state,
        cartItems: updatedCartItems,
        totalAmount: newTotalAmount,
        totalQuantity: newTotalQuantity,
        totalItems: newTotalItems,
      };
    },

    // ##########################################################################
    // ------------------clear the cart----------------------                   #
    // ##########################################################################
    emptyCart: () => {
      return initialState;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  emptyCart,
  addQuantity,
  removeQuantity,
} = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;

export const selectCartItemsById = (state, id) =>
  state.cart.items.filter((item) => item.id == id);

export default cartSlice.reducer;
