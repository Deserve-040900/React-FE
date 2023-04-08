import React from "react";
import Root from "../../assets/images/root.png";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div class="container-fluid" id="about">
        <h1>About Us</h1>
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
                <Link to={"/comics"} id="style">
                <li>
                  <i class="fas fa-layer-group"></i>
                  <p>Comics</p>
                </li>
                </Link>
                <Link to={"/books"} id="style">
                <li>
                  <i class="fas fa-book-open"></i>
                  <p>Books</p>
                </li>
                </Link>
              </ul>
              <ul>
                <Link to={"/cart"} id="style">
                <li>
                  <i class="fas fa-cart"></i>
                  <p>My Cart</p>
                </li>
                </Link>
                <Link to={"/404"} id="style">
                <li>
                  <i class="fas fa-gift"></i>
                  <p>Coupon</p>
                </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="container" id="contact">
        <h1>Contact With Us</h1>
        <div class="contact">
          <div class="form">
            <div class="inp">
                <label for="inputFname" class="form-label">
                Fullname
                </label>
                <input
                type="text"
                class="form-control"
                id="fullname"
                placeholder="Your fullname is ..."
                />
            </div>
            <div class="inp">
                <label for="inputEmail" class="form-label">
                Email
                </label>
                <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Your email, please"
                />
            </div>
            <div class="inp">
                <label for="inputPhone" class="form-label">
                Phone
                </label>
                <input
                type="tel"
                class="form-control"
                id="telephone"
                placeholder="Give us your phone number"
                />
            </div>
            <div class="inp">
                <div class="row">
                    <div class="col-10">
                        <label for="inputAddress" class="form-label">
                        Sending a question
                        </label>
                        <textarea
                        class="form-control"
                        id="address"
                        rows="2"
                        placeholder="Please, enter a question for us ..."
                        ></textarea>
                    </div>
                    <div class="col-2">
                        <input
                        type="submit"
                        name="Submit"
                        id="sendit"
                        class="btn-send"
                        value={"Send it"}
                        />
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Layout;
