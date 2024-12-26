import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/Details.scss";
import { Showtimes } from "./components/Showtimes";
import { Theaters } from "./components/Theaters";
import { TicketType } from "./components/TicketType";
import { SeatSelectionOne } from "./SeatSelection/SeatSelectionOne";
import FoodDrinks from "./components/FoodDrinks";
import { SeatSelectionTwo } from "./SeatSelection/SeatSelectionTwo";
import { SeatSelectionThree } from "./SeatSelection/SeatSelectionThree";
import { SeatSelectionFour } from "./SeatSelection/SeatSelectionFour";

export default function Details() {
   const [selectedTime, setSelectedTime] = useState(""); // State to track the selected time
   const [ticketCounts, setTicketCounts] = useState({
      adultSingle: 0,
      studentSenior: 0,
      adultDouble: 0,
   });
   const [totalPrice, setTotalPrice] = useState(0); // State to track total price

   const handleTimeChange = (time) => {
      setSelectedTime(time); // Update the selected time
   };

   const renderSeatSelection = () => {
      if (!selectedTime) return null; // No time selected, render nothing
      const timeHash = selectedTime.charCodeAt(0) % 4; // Tạo hash để quyết định rạp (chia cho 4 vì có 4 rạp)
      switch (timeHash) {
         case 0:
            return (
               <SeatSelectionOne
                  setTicketCounts={setTicketCounts}
                  ticketCounts={ticketCounts}
                  totalPrice={totalPrice}
                  setTotalPrice={setTotalPrice}
               />
            );
         case 1:
            return (
               <SeatSelectionTwo
                  setTicketCounts={setTicketCounts}
                  ticketCounts={ticketCounts}
                  totalPrice={totalPrice}
                  setTotalPrice={setTotalPrice}
               />
            );
         case 2:
            return (
               <SeatSelectionThree
                  setTicketCounts={setTicketCounts}
                  ticketCounts={ticketCounts}
                  totalPrice={totalPrice}
                  setTotalPrice={setTotalPrice}
               />
            );
         case 3:
            return (
               <SeatSelectionFour
                  setTicketCounts={setTicketCounts}
                  ticketCounts={ticketCounts}
                  totalPrice={totalPrice}
                  setTotalPrice={setTotalPrice}
               />
            );
         default:
            return null;
      }
   };

   return (
      <div>
         <div className="hd-regi-wr"></div>

         <div className="detail py-4">
            <div className="row">
               <div className="col col-5">
                  <div className="web-movie-box">
                     <div className="image">
                        <img
                           src="https://cinestar.com.vn/_next/image/?url=https%3A%2F%2Fapi-website.cinestar.com.vn%2Fmedia%2Fwysiwyg%2FPosters%2F10-2024%2Fvenom.jpg&w=1920&q=75"
                           alt="VENOM: KÈO CUỐI (T13)"
                           className="img-fluid"
                        />
                        <div className="attach">
                           <div className="type-movie">
                              <span className="txt">2D</span>
                           </div>
                           <div className="age">
                              <span className="num">T13</span>
                              <span className="txt">KID</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col col-7">
                  <div className="heading">VENOM: KÈO CUỐI (T13)</div>
                  <div className="detail-ct-h">
                     <ul className="info-detail list-unstyled">
                        <li>
                           <span className="txt">
                              Hành Động, Khoa Học Viễn Tưởng
                           </span>
                        </li>
                        <li>
                           <span className="txt">109'</span>
                        </li>
                        <li>
                           <span className="txt">Khác</span>
                        </li>
                        <li>
                           <span className="txt">Phụ Đề</span>
                        </li>
                        <li>
                           <span className="txt">
                              T13: Phim dành cho khán giả từ đủ 13 tuổi trở lên
                              (13+)
                           </span>
                        </li>
                     </ul>
                  </div>
                  <h2>Mô tả</h2>
                  <p style={{ textAlign: "left" }}>
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                     Iure repudiandae nobis id, ea exercitationem sunt impedit
                     possimus velit qui magnam.
                  </p>
                  <h2 style={{ marginTop: "20px" }}>Lịch Chiếu</h2>
                  <p style={{ textAlign: "left" }}>
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                     Iure repudiandae nobis id, ea exercitationem sunt impedit
                     possimus velit qui magnam.
                  </p>
               </div>
            </div>
         </div>

         <div className="sec-shtime">
            <Showtimes />
            <Theaters onTimeChange={handleTimeChange} />
            <TicketType
               setTicketCounts={setTicketCounts}
               ticketCounts={ticketCounts}
            />
            {renderSeatSelection()}
            <FoodDrinks totalPrice={totalPrice} setTotalPrice={setTotalPrice} />
         </div>
      </div>
   );
}
