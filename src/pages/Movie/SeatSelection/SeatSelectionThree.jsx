import React, { useState } from "react";
import "./SeatSelection.scss";

export function SeatSelectionThree({ ticketCounts, totalPrice }) {
  const rows = "ABCDEFGHIJKLMNO"; // Các hàng ghế (rạp lớn hơn)
  const seatsPerRow = 20; // Số ghế mỗi hàng
  const vipRows = ["D", "E", "F"]; // Các hàng VIP
  const coupleSeatsRow = "O"; // Hàng ghế đôi cuối cùng

  const [selectedSeats, setSelectedSeats] = useState([]);
  const bookedSeats = ["E10", "E11", "F15", "G12", "H05", "O02"]; // Ghế đã đặt

  const totalTickets =
    ticketCounts.adultSingle +
    ticketCounts.studentSenior +
    ticketCounts.adultDouble * 2; // Tổng số vé (tính ghế đôi)

  const coupleSeats = [...Array(Math.floor(seatsPerRow / 2)).keys()].map(
    (i) => `${coupleSeatsRow}${i * 2 + 1 < 10 ? `0${i * 2 + 1}` : i * 2 + 1}`
  ); // Tạo ghế đôi chỉ trong hàng O

  const toggleSeat = (seat) => {
    if (bookedSeats.includes(seat)) return; // Không cho phép chọn ghế đã đặt

    setSelectedSeats((prevSelected) => {
      if (prevSelected.includes(seat)) {
        // Bỏ chọn nếu đã chọn
        return prevSelected.filter((s) => s !== seat);
      } else if (prevSelected.length < totalTickets) {
        // Chỉ cho phép chọn nếu chưa vượt quá số vé
        return [...prevSelected, seat];
      } else {
        alert("Bạn đã chọn đủ số lượng ghế theo số vé.");
        return prevSelected;
      }
    });
  };

  return (
    <div className="seat-selection-container">
      <h2 className="heading" style={{ textAlign: "center" }}>
        CHỌN GHẾ - RẠP 03
      </h2>
      <div className="screen">Màn hình</div>
      <div className="seats">
        {rows.split("").map((row) => (
          <div key={row} className="row">
            {[...Array(seatsPerRow)].map((_, index) => {
              const seat = `${row}${
                index + 1 < 10 ? `0${index + 1}` : index + 1
              }`;
              const isBooked = bookedSeats.includes(seat);
              const isSelected = selectedSeats.includes(seat);
              const isVIP = vipRows.includes(row);
              const isCouple = coupleSeats.includes(seat);

              // Tạo đường đi giữa
              if (index === Math.floor(seatsPerRow / 2)) {
                return (
                  <div key={`space-${seat}`} className="space"></div> // Đường đi
                );
              }

              // Hàng ghế đôi (chỉ hàng cuối cùng - Hàng O)
              if (row === coupleSeatsRow && index % 2 === 0) {
                return (
                  <div
                    key={`couple-${seat}`}
                    className={`couple-seat ${isSelected ? "selected" : ""}`}
                    onClick={() => toggleSeat(seat)}
                  >
                    <span>{seat}</span>
                  </div>
                );
              }

              // Loại bỏ ghế đơn ở hàng cuối cùng
              if (row === coupleSeatsRow) {
                return null;
              }

              // Ghế VIP
              if (isVIP) {
                return (
                  <div
                    key={seat}
                    className={`vip-seat ${isBooked ? "booked" : ""} ${
                      isSelected ? "selected" : ""
                    }`}
                    onClick={() => toggleSeat(seat)}
                  >
                    {seat}
                  </div>
                );
              }

              // Ghế thường
              return (
                <div
                  key={seat}
                  className={`seat ${isBooked ? "booked" : ""} ${
                    isSelected ? "selected" : ""
                  }`}
                  onClick={() => toggleSeat(seat)}
                >
                  {seat}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <div className="legend">
        <div className="legend-item">
          <div className="seat"></div> Ghế Thường
        </div>
        <div className="legend-item">
          <div className="vip-seat"></div> Ghế VIP
        </div>
        <div className="legend-item">
          <div className="seat selected"></div> Ghế Chọn
        </div>
        <div className="legend-item">
          <div className="seat booked"></div> Ghế Đã Đặt
        </div>
        <div className="legend-item">
          <div className="couple-seat"></div> Ghế Đôi
        </div>
      </div>

      {/* Summary Bar */}
      {selectedSeats.length > 0 && (
        <div className="summary-bar">
          <div>
            <p>
              <strong>CƯỜI XUYÊN BIÊN GIỚI (T13)</strong>
            </p>
            <p>Cinestar Quốc Thanh | 2 Người Lớn</p>
            <p>
              Phòng chiếu: 03 | {selectedSeats.join(", ") || "Chưa chọn ghế"} |
              19:30
            </p>
          </div>
          <div className="info-container">
            <div className="time-container">
              <div className="time-box">
                <span>Thời gian giữ vé: </span>
                <span>05:00</span>
              </div>
            </div>
            <div className="price-container">
              <p>Tạm tính: {selectedSeats.length * 150000 + totalPrice} VND</p>
              <a href="/payment"><button className="book-button">ĐẶT VÉ</button></a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
