import { FETCH_ITEMS } from "../Constants";

// structure of shelf: {
//     id:__,
//     productName:__,
//     price:__,
//     productType:__,
//     img_path:__,
// }
const ShelfItemReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ITEMS:
      return action.payload;
    default:
      return state;
  }
};

export default ShelfItemReducer;
