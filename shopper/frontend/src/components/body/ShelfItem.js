import React, { useState } from "react";
import { Button } from "react-bootstrap";

const ShelfItem = ({ product }) => {
  const [qtyState, setQtyState] = useState(1);
  return (
    <tr className="shelf-item">
      <th scope="row">{product.product_name}</th>
      <td>{product.price}</td>
      <td>{product.type}</td>
      <td>
        <Button variant="outline-success">-</Button>
      </td>
      <td className="">
        <input
          value={qtyState}
          className="qty-input "
          onChange={(e) => setQtyState(e.target.value)}
        ></input>
      </td>
      <td>
        <Button variant="outline-success">+</Button>
      </td>
      <td>total price</td>
      <td>
        <Button variant="danger">ADD to Cart</Button>
      </td>
    </tr>
  );
};

export default ShelfItem;
