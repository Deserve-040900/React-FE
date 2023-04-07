import React from "react";
import { Outlet, Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div class="container" id="login">
      <div class="box-login">
        <div class="form">
          <h1>Log In</h1>

          <div class="inputbox">
            <input type="text" required />
            <span>Username</span>
            <i></i>
          </div>
          <div class="inputbox">
            <input type="password" required />
            <span>Password</span>
            <i></i>
          </div>

          <div class="link">
            <Link to={"/404"}>Forgot password!</Link>
            <Link to={"/signup"}>Sign Up</Link>
          </div>

          <input type="submit" value="Log In" class="btn-login" />
        </div>
      </div>
      </div>
      
      <Outlet />
    </>
  );
};

export default Login;
