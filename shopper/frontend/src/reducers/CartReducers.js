import {
  ADD_TO_CART,
  GET_USER,
  REMOVE_FROM_CART,
  CLEAR_ITEMS_IN_CART,
} from "../Constants";

// format like this initialState = {
//   user: {
//     id: null,
//     usernmae: "",
//     email: "",
//   },
//   items: [
//     {
//       product_id: null,
//       product_name: "",
//       qty: null,
//       price: null,
//       type: "",
//     },
//   ],
// };
const initialState = {
  user: {},
  items: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case CLEAR_ITEMS_IN_CART:
      return { user: {}, items: [] };
    default:
      return state;
  }
};

export default cartReducer;
