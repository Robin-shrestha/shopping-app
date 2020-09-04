import React from "react";
import { loadUser } from "../../actions/AuthActions";

import { useDispatch } from "react-redux";

const onStart = () => {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  if (token) {
    dispatch(loadUser());
  }
  return null;
};
export default onStart;
