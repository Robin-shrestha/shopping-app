import React from "react";
import { Route, Redirect } from "react-router-dom";
import { userSelector, useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector((state) => state.Auth.isAuthenticated);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticated) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/account/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
