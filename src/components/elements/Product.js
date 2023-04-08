import React from 'react'

const product = () => {
  return (
    <>
      <div className='container' id='product'>
        <div className='product'>
            <div className='row'>
                <div className='col-5'>
                    <img src={require('../../assets/images/book/book5.png')} alt="detail" />
                </div>
                <div className='col-7'>
                    <div className='detail-title'>
                        <h5>Combo 2 cuốn Đắc Nhân Tâm + Đời Ngắn Đừng Ngủ Dài</h5>
                    </div>
                    <div className='detail-price'>
                        <div class="prod-rate">
                            <div>
                                <span>
                                    <ion-icon name="star-outline"></ion-icon>
                                    <ion-icon name="star-outline"></ion-icon>
                                    <ion-icon name="star-outline"></ion-icon>
                                    <ion-icon name="star-outline"></ion-icon>
                                    <ion-icon name="star-outline"></ion-icon>
                                </span>
                                <p>Đã bán 749</p>
                            </div>
                            <div>
                                <span>
                                    <ion-icon name="heart-outline"></ion-icon>
                                </span>
                                <p>Đã Thích (1,2k)</p>
                            </div>
                        </div>
                        <div class="prod-price">
                            <p className="price1">đ 390.000</p><p className="price2">đ 175.000 - đ 210.000</p>
                            <p><span>FLASH SALE</span> Bắt đầu sau 15:00, 08 th04</p>
                        </div>
                    </div>
                    <div className='detail-classify'>
                        <div className='transport'>
                            <p>Vận Chuyển </p>
                            <span className='vehicle'>
                                <ion-icon name="car-sport-outline"></ion-icon>
                                <p>Phí vận chuyển <b>Free</b></p>
                            </span>
                        </div>
                        <div className='classify'>
                            <p>Phân Loại </p>                       
                            <span class="input-group-btn">
                                <input type="button" class="btn btn-light" value={"Đắc Nhân Tâm"} />
                                <input type="button" class="btn btn-light" value={"Đời Ngắn Đừng Ngủ Dài"} />
                                <input type="button" class="btn btn-light" value={"Combo 2 cuốn"} />
                            </span>
                        </div>
                        <div class="btn_added">
                            <input class="minus is-form" type="button" value="-" />
                            <input aria-label="quantity" class="input-qty" max="10" min="1" name="" type="number" value="1" />
                            <input class="plus is-form" type="button" value="+" />
                        </div>
                    </div>
                    <div className='detail-btn'>
                        <div className='btn-add'>
                            <i class="fas fa-cart-plus"></i>
                            <input type="button" class="add-cart" value={"Thêm vào giỏ hàng"} />
                        </div>
                        <div className='btn-buy'>
                            <i class='fas fa-money-check-alt'></i>
                            <input type="button" class="buy-now" value={"Mua ngay"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default product
