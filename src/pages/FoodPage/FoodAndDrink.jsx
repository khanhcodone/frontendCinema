import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/Details.scss";
import FoodDrinks from "./components/FoodDrinks";

export default function FoodAndDrink() {
  const [totalPrice, setTotalPrice] = useState(0); // State to track total price

  return (
    <div>
      <div className="hd-regi-wr">
        <div className="hd-bot-action-wrap d-flex justify-content-around">
          <div className="hd-bot-loca text-center">
            <span className="txt">Chọn rạp</span>
          </div>
          <div className="hd-bot-loca text-center">
            <span className="txt">Lịch chiếu</span>
          </div>
        </div>
        <div className="hd-bot-km text-center mt-3">
          <a className="link mx-2" href="/chuong-trinh-khuyen-mai/">
            Khuyến mãi
          </a>
          <a className="link mx-2" href="/to-chuc-su-kien/">
            Thuê sự kiện
          </a>
          <a className="link mx-2" href="/cac-loai-hinh-giai-tri-khac/">
            Tất cả các giải trí
          </a>
          <a className="link mx-2" href="/about-us/">
            Giới thiệu
          </a>
        </div>
      </div>

      <div className="sec-shtime">
        <FoodDrinks totalPrice={totalPrice} setTotalPrice={setTotalPrice} />
      </div>
    </div>
  );
}
