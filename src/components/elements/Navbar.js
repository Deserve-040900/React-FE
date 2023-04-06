import React from "react";
import '../../assets/css/customize.css'

const Navbar = () => {
  return (
    <>
      <div class="container-fluid">
        <a class="nav-brand" href="#">
          Navbar
        </a>

        <ul class="nav">
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
        
        <ul class="nav">
          <form class="d-flex" role="search">
            <input
              class="form-control"
              type="search"
              placeholder="Search ..."
              aria-label="Search"
            />
          </form>
          <li class="nav-item">
            <a class="nav-link" href="../views/Login.js">Login/Signup</a>
          </li>
          <li class="nav-item" href="../views/Shopping.js">
            <a class="nav-link">Shopping Cart</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
