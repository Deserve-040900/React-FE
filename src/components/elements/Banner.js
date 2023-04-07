import React from "react";
import "../../assets/css/customize.css";

const Banner = () => {
  return (
    <>
      <div class="container">
      <div id="home" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="2000">
            <img
              src={require("../../assets/images/slideshow/img1.jpg")}
              class="img-style"
              alt={"img1"}
            />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img
              src={require("../../assets/images/slideshow/img2.jpg")}
              class="img-style"
              alt="img2"
            />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img
              src={require("../../assets/images/slideshow/img3.jpg")}
              class="img-style"
              alt="img3.png"
            />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Banner;
