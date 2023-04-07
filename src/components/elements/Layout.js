import React from "react";
import Root from "../../assets/images/root.png";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div class="container-fluid" id="about">
        {" "}
        .<h1>About Us</h1>
        <div class="row">
          <div class="col-md-6 col-sm-12 col-xs-12 col-text">
            <div class="about_text">
              <h2>Hi! We Are</h2>
              <img src={Root} alt={"root.png"} />
              <h4>
                The world's most popular storybook e-commerce media platform
              </h4>
              <p>
                ROOT connects a global community of 90 million readers and
                authors to convey a variety of messages and promote reading
                culture.
              </p>
            </div>
          </div>
          <div class="col-md-6 col-sm-12 col-xs-12 col-page">
            <div class="about_page">
              <h3>Discovery With Us</h3>
              <ul>
                <li>
                  <i class="fas fa-layer-group"></i>
                  <p>Comics</p>
                </li>
                <li>
                  <i class="fas fa-book-open"></i>
                  <p>Books</p>
                </li>
              </ul>
              <ul>
                <li>
                  <i class="fas fa-cart-plus"></i>
                  <p>My Cart</p>
                </li>
                <li>
                  <i class="fas fa-gift"></i>
                  <p>Coupon</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
