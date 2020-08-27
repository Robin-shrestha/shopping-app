import React from "react";
import ShelfItem from "./ShelfItem";
import "./shelf.css";

const ShopShelf = () => {
  const item = [
    {
      id: 1,
      product_name: "tshirt",
      type: "t-shirt",
      price: 20,
      path: "./",
    },
    {
      id: 2,
      product_name: "tshirt",
      type: "t-shirt",
      price: 50,
    },
    {
      id: 3,
      product_name: "tshirt",
      type: "t-shirt",
      price: 200,
    },
    {
      id: 4,
      product_name: "tshirt",
      type: "t-shirt",
      price: 500,
    },
  ];
  return (
    <div>
      <table className="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Product name</th>
            <th scope="col">Price</th>
            <th scope="col">Type</th>
            <th scope="col"></th>
            <th scope="col">qty</th>
            <th scope="col"></th>
            <th scope="col">Total Price</th>
            <th scope="col">ADD to cart</th>
          </tr>
        </thead>
        <tbody>
          {item.map((item) => {
            return <ShelfItem key={item.id} product={item} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ShopShelf;
