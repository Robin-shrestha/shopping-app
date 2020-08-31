import React, { useState, useEffect } from "react";
import "./auth.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <div className="fadeIn first">
          <img src="..." id="icon" alt=" Icon" />
        </div>

        <form>
          <input
            type="text"
            id="login"
            className="fadeIn second"
            name="username"
            placeholder="username"
          />
          <input
            type="password"
            id="password"
            className="fadeIn third"
            name="password"
            placeholder="password"
          />
          <input type="submit" className="fadeIn fourth" value="Log In" />
        </form>

        <div id="formFooter">
          <Link className="underlineHover" to="/account/register">
            Dont have an account?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
