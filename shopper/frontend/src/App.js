import React from "react";
import Header from "./components/Header/Header";
import ShopShelf from "./components/body/ShopShelf";
import { Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import PrivateRoute from "./components/utils/PrivateRoute";
import Cartdashboard from "./components/body/cart/CartDashboard";
import ShelfItem from "./components/body/ShelfItem";
const App = () => {
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
