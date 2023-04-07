import React from "react";
import { Outlet, Link } from "react-router-dom";
import Root from "../../assets/images/root.png";

const Navbar = () => {
  return (
    <>
      <div class="container-fluid">
        <div class="menu">
          <Link to="/" class="nav-brand">
            <img src={Root} alt={"root.png"} />
          </Link>

          <ul class="nav" id="menu">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#home">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about">
                About
              </a>
            </li>
            <li class="nav-item">
              <Link to="/comics" class="nav-link">
                Comics
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/books" class="nav-link">
                Books
              </Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>

          <ul class="nav" id="bar">
            <div class="searchBox">
              <input type="text" placeholder="Searching ..." />
              <ion-icon name="search-outline"></ion-icon>
            </div>
            <li class="nav-item">
              <Link to="/login" class="nav-link">
                <ion-icon name="person-circle-outline"></ion-icon>Login/Signup
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/cart" class="nav-link">
                <ion-icon name="cart-outline"></ion-icon>Shopping Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Navbar;
