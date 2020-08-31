import React from "react";
import Header from "./components/Header/Header";
import ShopShelf from "./components/body/ShopShelf";
import { Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={ShopShelf}></Route>
        <Route exact path="/account/login" component={Login}></Route>
        <Route exact path="/account/register" component={Register}></Route>
      </Switch>
    </div>
  );
};

export default App;
