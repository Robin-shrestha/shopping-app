import React, { useState, useEffect } from "react";
import "./auth.css";
import { Link, Redirect } from "react-router-dom";
import { loggingIn } from "../../actions/AuthActions";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [loginDetail, setLoginDetail] = useState({
    username: "",
    password: "",
  });
  const isAuthenticated = useSelector((state) => state.Auth.isAuthenticated);
  const loadAndError = useSelector((state) => state.LoadingAndError);

  const dispatch = useDispatch();

  const onChange = (e) => {
    setLoginDetail({ ...loginDetail, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { username, password } = loginDetail;
    if (!username) {
      console.log("username required");
    } else if (!password) {
      console.log("pasword required");
    } else {
      dispatch(loggingIn(loginDetail));
    }
  };
  return (
    <div className="wrapper fadeInDown">
      {isAuthenticated ? <Redirect to="/" replace /> : null}
      <div id="formContent">
        <div className="fadeIn first">
          <img src="..." id="icon" alt=" Icon" />
        </div>
        {loadAndError.error ? <p>{loadAndError.error}</p> : null}
        <form onSubmit={onSubmit}>
          <input
            type="text"
            id="login"
            className="fadeIn second"
            name="username"
            placeholder="username"
            onChange={onChange}
          />
          <input
            type="password"
            id="password"
            className="fadeIn third"
            name="password"
            placeholder="password"
            onChange={onChange}
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
