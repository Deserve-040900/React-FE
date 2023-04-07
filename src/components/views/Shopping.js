import React from 'react'
import { Outlet, Link } from "react-router-dom";
import Totalbar from '../elements/Totalbar';

const Shopping = () => {
  return (
    <>
      <div className='container' id='cart'>
        <div className='cart-list'>
          <div className='card'>
            <div class="row">
              <div class="col-3 imgCart">
                <ion-icon name="square-outline"></ion-icon>
                <Link to={"/detail"}><img src={require("../../assets/images/book/book1.png")} class="img-fluid" alt="1.jpg" /></Link>
              </div>
              <div class="col-8">
                <div class="row imgCart">
                  <div class="col-4">
                    <Link to={"/detail"}><h6>Combo 3 cuốn sách Tâm Lý Học</h6></Link>                    
                    <div class="btn_added">
                      <input class="minus is-form" type="button" value="-" />
                      <input aria-label="quantity" class="input-qty" max="10" min="1" name="" type="number" value="1" />
                      <input class="plus is-form" type="button" value="+" />
                    </div>
                  </div>
                  <div class="col-4">
                    <span>Phân loại hàng: <ion-icon name="caret-down-outline"></ion-icon></span>
                    <select id="framework">
                      <option selected>Select One</option>
                      <option value="1">Tâm lý Học Hành Vi</option>
                      <option value="2">Tâm lý Học Biểu Cảm</option>
                      <option value="3">Tâm lý Học Tính Cách</option>
                      <option value="4">Combo 3 cuốn</option>
                    </select>
                  </div>
                  <div class="col-3 total">
                    <p class="sale">580.000</p>
                    <p class="price">320.000</p>
                  </div>
                </div>
              </div>
              <div class="col-1">
                <ion-icon name="alert-circle-outline"></ion-icon>
                <ion-icon name="close-outline"></ion-icon>
              </div>
            </div>
          </div>
          <div className='card'>
            <div class="row">
              <div class="col-3 imgCart">
                <ion-icon name="square-outline"></ion-icon>
                <Link to={"/detail"}><img src={require("../../assets/images/book/book2.jpg")} class="img-fluid" alt="1.jpg" /></Link>
              </div>
              <div class="col-8">
                <div class="row imgCart">
                  <div class="col-4">
                    <Link to={"/detail"}><h6>Combo 3 cuốn sách Tâm Lý Học</h6></Link>                    
                    <div class="btn_added">
                      <input class="minus is-form" type="button" value="-" />
                      <input aria-label="quantity" class="input-qty" max="10" min="1" name="" type="number" value="1" />
                      <input class="plus is-form" type="button" value="+" />
                    </div>
                  </div>
                  <div class="col-4">
                    <span>Phân loại hàng: <ion-icon name="caret-down-outline"></ion-icon></span>
                    <select id="framework">
                      <option selected>Select One</option>
                      <option value="1">Tâm lý Học Hành Vi</option>
                      <option value="2">Tâm lý Học Biểu Cảm</option>
                      <option value="3">Tâm lý Học Tính Cách</option>
                      <option value="4">Combo 3 cuốn</option>
                    </select>
                  </div>
                  <div class="col-3 total">
                    <p class="sale">580.000</p>
                    <p class="price">320.000</p>
                  </div>
                </div>
              </div>
              <div class="col-1">
              <ion-icon name="alert-circle-outline"></ion-icon>
              <ion-icon name="close-outline"></ion-icon>
              </div>
            </div>
          </div>
          <div className='card'>
            <div class="row">
              <div class="col-3 imgCart">
                <ion-icon name="square-outline"></ion-icon>
                <Link to={"/detail"}><img src={require("../../assets/images/book/book3.png")} class="img-fluid" alt="1.jpg" /></Link>
              </div>
              <div class="col-8">
                <div class="row imgCart">
                  <div class="col-4">
                    <Link to={"/detail"}><h6>Combo 3 cuốn sách Tâm Lý Học</h6></Link>                    
                    <div class="btn_added">
                      <input class="minus is-form" type="button" value="-" />
                      <input aria-label="quantity" class="input-qty" max="10" min="1" name="" type="number" value="1" />
                      <input class="plus is-form" type="button" value="+" />
                    </div>
                  </div>
                  <div class="col-4">
                    <span>Phân loại hàng: <ion-icon name="caret-down-outline"></ion-icon></span>
                    <select id="framework">
                      <option selected>Select One</option>
                      <option value="1">Tâm lý Học Hành Vi</option>
                      <option value="2">Tâm lý Học Biểu Cảm</option>
                      <option value="3">Tâm lý Học Tính Cách</option>
                      <option value="4">Combo 3 cuốn</option>
                    </select>
                  </div>
                  <div class="col-3 total">
                    <p class="sale">580.000</p>
                    <p class="price">320.000</p>
                  </div>
                </div>
              </div>
              <div class="col-1">
              <ion-icon name="alert-circle-outline"></ion-icon>
              <ion-icon name="close-outline"></ion-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Totalbar />
    </>
  )
}

export default Shopping
