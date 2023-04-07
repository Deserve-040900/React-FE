import React from "react";
import Social from "./elements/Social"
import GridFooter from "./elements/GridFooter";

const Footer = () => {
  return (
    <>
      <footer>
        <div class="container">
            <Social />
            <GridFooter />
          <hr />
          <p>
            &#169; copyright{" "}
            <a href="https://github.com/Deserve-040900/React-FE.git">Astute</a>{" "}
            2023. All Right Reserved by{" "}
            <a href="https://github.com/Deserve-040900">Ami.</a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
