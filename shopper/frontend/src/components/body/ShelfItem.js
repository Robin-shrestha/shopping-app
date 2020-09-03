import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { addToCart } from "../../actions/CartActions";
import { loading, doneLoading, error } from "../../actions/LoadingErrorActions";

const ShelfItem = (props) => {
  // const item = props.location.state;
  const [item, setItem] = useState({});
  const loadingAndError = useSelector((state) => state.LoadingAndError);
  const isAuthenticated = useSelector((state) => state.Auth.isAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loading());
    const {
      match: { params },
    } = props;
    axios
      .get(`/api/saleitems/${params.id}`)
      .then((res) => {
        // console.log(res);
        setItem(res.data);
        dispatch(doneLoading());
      })
      .catch((err) => {
        // console.log(err);
        dispatch(error(err.message));
      });
  }, []);

  //       product_id: null,
  //       product_name: "",
  //       qty: null,
  //       price: null,
  //       type: "",
  //     },
  const addItem = (item) => (e) => {
    e.preventDefault();
    dispatch(
      addToCart({
        product_id: item.id,
        product_name: item.product_name,
        qty: 1,
        price: item.price,
        type: item.product_type,
      })
    );
  };

  return (
    <>
      <div className="container">
        {loadingAndError.loading ? <p>...LOADING</p> : null}
        {loadingAndError.error ? <p>{loadingAndError.error}</p> : null}

        <div className="col-lg-9">
          <div className="card mt-4">
            <img
              className="card-img-top img-fluid"
              src={item.image_path}
              alt=""
            />
            <div className="card-body">
              <h3 className="card-title">{item.product_name}</h3>
              <h5>{item.brand}</h5>
              <h4>{item.price}</h4>
              <p className="card-text">{item.description}</p>
              {/* <span className="text-warning">
              &#9733; &#9733; &#9733; &#9733; &#9734;
            </span>
            4.0 stars */}
              {isAuthenticated ? (
                <Button onClick={addItem(item)} className="btn btn-primary">
                  Add to Cart
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShelfItem;
