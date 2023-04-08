import React from "react";
import { Outlet, Link } from "react-router-dom";

const Books = () => {
  return (
    <>
      <div class="container" id="book">
        <div class="category">
          <p>Sách Bán Chạy</p>
        </div>

        <div class="row">
          <div class="prodBook">
            <div class="layout">
              <div class="card">
                <img src={require('../../assets/images/book/book1.png')} class="card-img-top" alt={"product1"} />
                <div class="prod-body">
                  <Link to={"/detail"} class="prod-title">Combo 3 cuốn sách Tâm Lý Học</Link>
                  <div class="prod-price">
                    <p className="price1">đ 250.000</p><p className="price2">đ 175.000</p>
                  </div>
                  <div class="prod-rate">
                    <span>
                      <ion-icon name="star-outline"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                    </span>
                    <p>Đã bán 749</p>
                  </div>
                </div>
              </div>
            </div>  

            <div class="layout">
              <div class="card">
                <img src={require('../../assets/images/book/book2.jpg')} class="card-img-top" alt={"product1"} />
                <div class="prod-body">
                  <Link to={"/detail"} class="prod-title">Combo 3 cuốn sách Tâm Lý Học</Link>
                  <div class="prod-price">
                    <p className="price1">đ 250.000</p><p className="price2">đ 175.000</p>
                  </div>
                  <div class="prod-rate">
                    <span>
                      <ion-icon name="star-outline"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                    </span>
                    <p>Đã bán 749</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="layout">
              <div class="card">
                <img src={require('../../assets/images/book/book3.png')} class="card-img-top" alt={"product1"} />
                <div class="prod-body">
                  <Link to={"/detail"} class="prod-title">Combo 3 cuốn sách Tâm Lý Học</Link>
                  <div class="prod-price">
                    <p className="price1">đ 250.000</p><p className="price2">đ 175.000</p>
                  </div>
                  <div class="prod-rate">
                    <span>
                      <ion-icon name="star-outline"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                    </span>
                    <p>Đã bán 749</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="layout">
              <div class="card">
                <img src={require('../../assets/images/book/book4.jpg')} class="card-img-top" alt={"product1"} />
                <div class="prod-body">
                  <Link to={"/detail"} class="prod-title">Combo 3 cuốn sách Tâm Lý Học</Link>
                  <div class="prod-price">
                    <p className="price1">đ 250.000</p><p className="price2">đ 175.000</p>
                  </div>
                  <div class="prod-rate">
                    <span>
                      <ion-icon name="star-outline"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                    </span>
                    <p>Đã bán 749</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="layout">
              <div class="card">
                <img src={require('../../assets/images/book/book5.png')} class="card-img-top" alt={"product1"} />
                <div class="prod-body">
                  <Link to={"/detail"} class="prod-title">Combo 3 cuốn sách Tâm Lý Học</Link>
                  <div class="prod-price">
                    <p className="price1">đ 250.000</p><p className="price2">đ 175.000</p>
                  </div>
                  <div class="prod-rate">
                    <span>
                      <ion-icon name="star-outline"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                    </span>
                    <p>Đã bán 749</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="layout">
              <div class="card">
                <img src={require('../../assets/images/book/book6.jpg')} class="card-img-top" alt={"product1"} />
                <div class="prod-body">
                  <Link to={"/detail"} class="prod-title">Combo 3 cuốn sách Tâm Lý Học</Link>
                  <div class="prod-price">
                    <p className="price1">đ 250.000</p><p className="price2">đ 175.000</p>
                  </div>
                  <div class="prod-rate">
                    <span>
                      <ion-icon name="star-outline"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                    </span>
                    <p>Đã bán 749</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="layout">
              <div class="card">
                <img src={require('../../assets/images/book/book7.png')} class="card-img-top" alt={"product1"} />
                <div class="prod-body">
                  <Link to={"/detail"} class="prod-title">Combo 3 cuốn sách Tâm Lý Học</Link>
                  <div class="prod-price">
                    <p className="price1">đ 250.000</p><p className="price2">đ 175.000</p>
                  </div>
                  <div class="prod-rate">
                    <span>
                      <ion-icon name="star-outline"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                    </span>
                    <p>Đã bán 749</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="layout">
              <div class="card">
                <img src={require('../../assets/images/book/book1.png')} class="card-img-top" alt={"product1"} />
                <div class="prod-body">
                  <Link to={"/detail"} class="prod-title">Combo 3 cuốn sách Tâm Lý Học</Link>
                  <div class="prod-price">
                    <p className="price1">đ 250.000</p><p className="price2">đ 175.000</p>
                  </div>
                  <div class="prod-rate">
                    <span>
                      <ion-icon name="star-outline"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                    </span>
                    <p>Đã bán 749</p>
                  </div>
                </div>
              </div>
            </div>  

            <div class="layout">
              <div class="card">
                <img src={require('../../assets/images/book/book2.jpg')} class="card-img-top" alt={"product1"} />
                <div class="prod-body">
                  <Link to={"/detail"} class="prod-title">Combo 3 cuốn sách Tâm Lý Học</Link>
                  <div class="prod-price">
                    <p className="price1">đ 250.000</p><p className="price2">đ 175.000</p>
                  </div>
                  <div class="prod-rate">
                    <span>
                      <ion-icon name="star-outline"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                    </span>
                    <p>Đã bán 749</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="layout">
              <div class="card">
                <img src={require('../../assets/images/book/book3.png')} class="card-img-top" alt={"product1"} />
                <div class="prod-body">
                  <Link to={"/detail"} class="prod-title">Combo 3 cuốn sách Tâm Lý Học</Link>
                  <div class="prod-price">
                    <p className="price1">đ 250.000</p><p className="price2">đ 175.000</p>
                  </div>
                  <div class="prod-rate">
                    <span>
                      <ion-icon name="star-outline"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                    </span>
                    <p>Đã bán 749</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="layout">
              <div class="card">
                <img src={require('../../assets/images/book/book4.jpg')} class="card-img-top" alt={"product1"} />
                <div class="prod-body">
                  <Link to={"/detail"} class="prod-title">Combo 3 cuốn sách Tâm Lý Học</Link>
                  <div class="prod-price">
                    <p className="price1">đ 250.000</p><p className="price2">đ 175.000</p>
                  </div>
                  <div class="prod-rate">
                    <span>
                      <ion-icon name="star-outline"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                    </span>
                    <p>Đã bán 749</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="layout">
              <div class="card">
                <img src={require('../../assets/images/book/book5.png')} class="card-img-top" alt={"product1"} />
                <div class="prod-body">
                  <Link to={"/detail"} class="prod-title">Combo 3 cuốn sách Tâm Lý Học</Link>
                  <div class="prod-price">
                    <p className="price1">đ 250.000</p><p className="price2">đ 175.000</p>
                  </div>
                  <div class="prod-rate">
                    <span>
                      <ion-icon name="star-outline"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                    </span>
                    <p>Đã bán 749</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="layout">
              <div class="card">
                <img src={require('../../assets/images/book/book6.jpg')} class="card-img-top" alt={"product1"} />
                <div class="prod-body">
                  <Link to={"/detail"} class="prod-title">Combo 3 cuốn sách Tâm Lý Học</Link>
                  <div class="prod-price">
                    <p className="price1">đ 250.000</p><p className="price2">đ 175.000</p>
                  </div>
                  <div class="prod-rate">
                    <span>
                      <ion-icon name="star-outline"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                    </span>
                    <p>Đã bán 749</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="layout">
              <div class="card">
                <img src={require('../../assets/images/book/book7.png')} class="card-img-top" alt={"product1"} />
                <div class="prod-body">
                  <Link to={"/detail"} class="prod-title">Combo 3 cuốn sách Tâm Lý Học</Link>
                  <div class="prod-price">
                    <p className="price1">đ 250.000</p><p className="price2">đ 175.000</p>
                  </div>
                  <div class="prod-rate">
                    <span>
                      <ion-icon name="star-outline"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                    </span>
                    <p>Đã bán 749</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Books;
