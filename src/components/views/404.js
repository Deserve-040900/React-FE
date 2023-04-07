import React from 'react'
import LoadNoPage from "../../assets/images/load404.gif"
import { Outlet, Link } from "react-router-dom";

const Err = () => {
  return (
    <>
      <div class="container" id='pos'>
        <div class="pos">
          <img src={LoadNoPage} alt="meowAmi" />
          <h1>404</h1>
          <h6>We did not find a match in the database with the data you entered</h6>
          <Link to={"/"}><input type="submit" value={"Homepage"} class="btn-homepage" /></Link>
        </div>
      </div>      
    </>
  )
}

export default Err
