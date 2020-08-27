import { FETCH_ITEMS } from "../Constants";
import axios from "axios";

export const addToShelf = (item) => {
  return {
    type: FETCH_ITEMS,
    payload: item,
  };
};
