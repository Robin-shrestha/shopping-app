import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
// components
import Header from "./components/Header/Header";
import ShopShelf from "./components/body/ShopShelf";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Cartdashboard from "./components/body/cart/CartDashboard";
import ShelfItem from "./components/body/ShelfItem";
// utils
import PrivateRoute from "./components/utils/PrivateRoute";
import onStart from "./components/utils/OnStart";
import { loadUser } from "./actions/AuthActions";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(loadUser());
    }
  }, []);
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={ShopShelf}></Route>
        <Route exact path="/account/login" component={Login}></Route>
        <Route exact path="/account/register" component={Register}></Route>
        <Route exact path="/item/:id" component={ShelfItem}></Route>

        <PrivateRoute exact path="/cart" component={Cartdashboard} />
      </Switch>
    </div>
  );
};

export default App;
