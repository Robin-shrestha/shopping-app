import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUser, buyItems } from "../../../actions/CartActions";
import CartItem from "./CartItem";
import { Button } from "react-bootstrap";

const CartDashboard = () => {
  const cartState = useSelector((state) => state.Cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, []);
  const buy = (e) => {
    e.preventDefault();
    let items = [];
    cartState.items.map((item) => {
      items.push({ product: item.product_id });
    });

    dispatch(buyItems(items));
  };

  return (
    <div>
      <h1>{cartState.user.username}</h1>
      {cartState.items.length > 0 ? (
        <div>
          <div>
            {cartState.items.map((item, index) => {
              return <CartItem key={index} item={item} />;
            })}
          </div>
          <div>
            <Button onClick={buy}>Buy</Button>
          </div>
        </div>
      ) : (
        <p>nothing added in cart</p>
      )}
    </div>
  );
};

export default CartDashboard;
