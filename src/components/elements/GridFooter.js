import React from "react";

const GridFooter = () => {
  return (
    <>
      {/* Grid row */}
      <div class="row" id="gd">
        {/* Grid column */}
        <div class="col-lg-6 col-md-12 col-A">
          <h5>Footer text</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque
            ea quis molestias. Fugiat pariatur maxime quis culpa corporis vitae
            repudiandae aliquam voluptatem veniam, est atque cumque eum delectus
            sint!
          </p>
        </div>

        <div class="col-lg-3 col-md-6 col-B">
          <h5>Links</h5>
          <ul>
            <li>
              <a href="#navbarNav">
                <i class="fas fa-home"></i> Home
              </a>
            </li>
            <li>
              <a href="login.html">
                <i class="far fa-user-circle"></i> Login
              </a>
            </li>
            <li>
              <a href="signup.html">
                <i class="fas fa-user-circle"></i> Signup
              </a>
            </li>
            <li>
              <a href="#!">Link 4</a>
            </li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-6 col-C">
          <h5>Links</h5>

          <ul>
            <li>
              <a href="#About">
                <i class="fas fa-book"></i> ABOUT US
              </a>
            </li>
            <li>
              <a href="#Contact">
                <i class="fas fa-comment"></i> CONTACT US
              </a>
            </li>
            <li>
              <a href="#!">Link 3</a>
            </li>
            <li>
              <a href="#!">Link 4</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default GridFooter;
