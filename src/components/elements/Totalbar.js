import React from 'react'

const Totalbar = () => {
  return (
    <>
      <div className="container" id='total'>
        <div className="sticky">
            <div className="row">
                <div className="col-6"></div>
                <div className="col-6">
                    <div className='totalPay'>
                        <span>Tổng Thanh Toán (1 sản phẩm)</span>
                        <p>149.000 đ</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <div className='select-style'>
                        <ion-icon name="square-outline"></ion-icon> 
                        <p>Chọn Tất Cả</p>
                    </div>
                </div>
                <div className="col-3">
                    <div className='select-style'>
                        <ion-icon name="close-outline"></ion-icon> 
                        <p>Xóa</p>
                    </div>
                </div>
                <div className="col-3">
                    <div className='select-style'>
                        <ion-icon name="ticket-outline"></ion-icon> 
                        <a href="#">Chọn hoặc nhập Voucher</a>
                    </div>
                </div>
                <div className="col-3">
                    <div className='select-style'>
                        <input type="button" value={"Mua Hàng"} className='btn-buy' />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Totalbar
