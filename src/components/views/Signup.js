import React from "react";
import { Outlet, Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <div class="container" id="signup">
        <div class="box-signup">
          <div class="form">
            <h1>Sign Up</h1>
            <div class="inputbox">
              <input type="text" required />
              <span>Username</span>
              <i></i>
            </div>
            <div class="inputbox">
              <input type="email" required />
              <span>Email</span>
              <i></i>
            </div>
            <div class="inputbox">
              <input type="text" required />
              <span>Phone number</span>
              <i></i>
            </div>
            <div class="inputbox">
              <input type="password" required />
              <span>Password</span>
              <i></i>
            </div>
            <div class="inputbox">
              <input type="password" required />
              <span>Confirm Password</span>
              <i></i>
            </div>

            <div class="link">
              Already have an account
              <Link to={"/login"}>
                <b>Log In</b>
              </Link>
            </div>

            <input type="submit" value="Sign Up" class="btn-signup" />
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Signup;
