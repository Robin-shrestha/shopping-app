import React, { useEffect, useState } from "react";

const CartItem = ({ item }) => {
  return (
    <li>
      <span>{item.product_name}</span>
    </li>
  );
};

export default CartItem;
