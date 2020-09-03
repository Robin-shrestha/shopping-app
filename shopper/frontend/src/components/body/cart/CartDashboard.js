import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../../actions/CartActions";
import CartItem from "./CartItem";

const CartDashboard = () => {
  const cartState = useSelector((state) => state.Cart);
  const dispatch = useDispatch();
  console.log(cartState);
  useEffect(() => {
    dispatch(getUser());
  }, []);
  return (
    <div>
      <h1>{cartState.user.username}</h1>
      {cartState.items
        ? cartState.items.map((item, index) => {
            return <CartItem key={index} item={item} />;
          })
        : null}
    </div>
  );
};

export default CartDashboard;
