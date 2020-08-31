import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registration } from "../../actions/AuthActions";
import "./auth.css";

const register = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.Auth.isAuthenticated);
  const loadAndError = useSelector((state) => state.LoadingAndError);

  const [registerdetail, setRegisterDetail] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const onSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = registerdetail;
    if (password !== confirmPassword) {
      console.log("passwords mismatch");
    } else if (!username) {
      console.log("username required");
    } else if (!email) {
      console.log("email required");
    } else {
      dispatch(registration(registerdetail));
    }
  };

  const onChange = (e) => {
    setRegisterDetail({ ...registerdetail, [e.target.name]: e.target.value });
  };

  return (
    <div className="wrapper fadeInDown">
      {isAuthenticated ? <Redirect to="/account/login" /> : null}
      <div id="formContent">
        <div className="fadeIn first">
          <img src="..." id="icon" alt="User Icon" />
        </div>
        {loadAndError.error ? <p>{loadAndError.error}</p> : null}

        <form onSubmit={onSubmit}>
          <input
            type="text"
            id="username"
            className="fadeIn second"
            name="username"
            placeholder="username"
            onChange={onChange}
          />
          <input
            type="email"
            id="email"
            className="fadeIn third"
            name="email"
            placeholder="email"
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
          <input
            type="password"
            id="confirm_password"
            className="fadeIn third"
            name="confirmPassword"
            placeholder="confirm pasword"
            onChange={onChange}
          />
          <input type="submit" className="fadeIn fourth" value="Register" />
        </form>

        <div id="formFooter">
          <Link className="underlineHover" to="/account/login">
            Have an account?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default register;
