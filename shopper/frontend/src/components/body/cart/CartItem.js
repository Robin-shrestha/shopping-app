import React, { useEffect, useState } from "react";

const CartItem = ({ item }) => {
  return (
    <li>
      <span>{item.product_name}</span>|<span>{item.qty}</span>|
      <span>{item.price}</span>|<span>{item.type}</span>|
    </li>
  );
};

export default CartItem;
