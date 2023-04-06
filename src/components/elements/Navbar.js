import React from "react";
import { Outlet, Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <>
      <div class="container-fluid">
        <div class="menu">
          <a class="nav-brand" href="../views/Home.js">
            <img src={Logo} alt={"logo.png"} />
          </a>

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
              <a class="nav-link" href="../views/Comics.js">
                Comics
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="../views/Books.js">
                Books
              </a>
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
              <a class="nav-link" href="../views/Login.js">
                <ion-icon name="person-circle-outline"></ion-icon>Login/Signup
              </a>
            </li>
            <li class="nav-item" href="../views/Shopping.js">
              <a class="nav-link">
                <ion-icon name="cart-outline"></ion-icon>Shopping Cart
              </a>
            </li>
          </ul>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Navbar;
