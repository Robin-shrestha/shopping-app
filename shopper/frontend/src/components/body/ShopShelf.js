import React, { useEffect } from "react";
import axios from "axios";
import { loading, doneLoading, error } from "../../actions/LoadingErrorActions";
import { addToShelf } from "../../actions/StockItemAction";
import { useSelector, useDispatch } from "react-redux";

const ShopShelf = () => {
  const shelfState = useSelector((state) => state.ShelfItems);
  const loadingAndError = useSelector((state) => state.LoadingAndError);

  const dispatch = useDispatch();

  const FetchShelfItemData = () => (dispatch) => {
    dispatch(loading());
    axios
      .get("/apis/api/saleitems")
      .then((res) => {
        dispatch(addToShelf(res.data));
        dispatch(doneLoading());
      })
      .catch((err) => {
        dispatch(error(err.message));
        dispatch(doneLoading);
      });
  };

  useEffect(() => {
    dispatch(FetchShelfItemData());
  }, []);

  console.log(shelfState);
  console.log(loadingAndError);

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
                  <h5 className="card-title">{item.product_name}</h5>
                  <p className="card-text">
                    <span>Rs.{item.price}</span>{" "}
                  </p>
                  <p>{item.brand ? <strong>{item.brand}</strong> : null}</p>
                  <a href="#" className="btn btn-primary">
                    Add to Cart
                  </a>
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
