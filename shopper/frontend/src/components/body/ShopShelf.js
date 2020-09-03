import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { link, Link } from "react-router-dom";

import { FetchShelfItem } from "../../actions/StockItemAction";
import { addToCart } from "../../actions/CartActions";

const ShopShelf = () => {
  const shelfState = useSelector((state) => state.ShelfItems);
  const loadingAndError = useSelector((state) => state.LoadingAndError);
  const isAuthenticated = useSelector((state) => state.Auth.isAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchShelfItem());
  }, []);

  // const addItem = (item) => (e) => {
  //   e.preventDefault();
  //   console.log("asds");
  //   dispatch(addToCart(item));
  // };

  return (
    <>
      <div>
        {loadingAndError.loading ? <p>...loading</p> : null}
        {loadingAndError.error ? <p>{loadingAndError.error}</p> : null}
      </div>
      <div className=".container-fluid p-3">
        <ul className="row">
          {shelfState.map((item) => {
            return (
              <li
                key={item.id}
                className="card ml-2 mr-2"
                style={{ width: "18rem" }}
              >
                <img
                  className="card-img-top"
                  src={item.image_path}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <Link to={{ pathname: `/item/${item.id}`, state: item }}>
                    <h5 className="card-title ">{item.product_name}</h5>
                  </Link>
                  <p className="card-text">
                    <span>Rs.{item.price}</span>{" "}
                  </p>
                  <p>{item.brand ? <strong>{item.brand}</strong> : null}</p>
                  {/* {isAuthenticated ? (
                    <Button onClick={addItem(item)} className="btn btn-primary">
                      Add to Cart
                    </Button>
                  ) : null} */}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default ShopShelf;
