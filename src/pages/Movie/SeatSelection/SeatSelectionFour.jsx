import React, { useState } from "react";
import "./SeatSelection.scss";

export function SeatSelectionFour({ ticketCounts }) {
  const rows = "ABCDEFGHIJKLMN"; // Các hàng ghế
  const seatsPerRow = 14; // Số ghế mỗi hàng (số chẵn để tạo zig-zag)
  const vipRows = ["G", "H"]; // Các hàng VIP ở giữa rạp
  const [selectedSeats, setSelectedSeats] = useState([]);
  const bookedSeats = ["F03", "F04", "H07", "H08", "K11", "K12"]; // Ghế đã đặt

  const totalTickets =
    ticketCounts.adultSingle +
    ticketCounts.studentSenior +
    ticketCounts.adultDouble * 2; // Tổng số vé

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
        CHỌN GHẾ - RẠP 04
      </h2>
      <div className="screen">Màn hình</div>
      <div className="seats">
        {rows.split("").map((row, rowIndex) => (
          <div key={row} className="row">
            {[...Array(seatsPerRow)].map((_, index) => {
              const seat = `${row}${
                index + 1 < 10 ? `0${index + 1}` : index + 1
              }`;
              const isBooked = bookedSeats.includes(seat);
              const isSelected = selectedSeats.includes(seat);
              const isVIP = vipRows.includes(row);

              // Tạo đường đi giữa (hai đường đi)
              if (
                index === Math.floor(seatsPerRow / 3) ||
                index === Math.floor((seatsPerRow / 3) * 2)
              ) {
                return (
                  <div key={`space-${seat}`} className="space"></div> // Đường đi
                );
              }

              // Ghế zig-zag (thêm khoảng cách lệch mỗi hàng)
              const marginLeft = rowIndex % 2 === 0 && index === 0 ? 20 : 0; // Lệch trái ở hàng chẵn

              // Ghế VIP
              if (isVIP) {
                return (
                  <div
                    key={seat}
                    className={`vip-seat ${isBooked ? "booked" : ""} ${
                      isSelected ? "selected" : ""
                    }`}
                    style={{ marginLeft }}
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
                  style={{ marginLeft }}
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
              Phòng chiếu: 04 | {selectedSeats.join(", ") || "Chưa chọn ghế"} |
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
              <p>Tạm tính: {selectedSeats.length * 150000} VND</p>
              <a href="/payment"><button className="book-button">ĐẶT VÉ</button></a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
