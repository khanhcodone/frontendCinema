import React, { useState, useEffect } from "react";
import "./SeatSelection.scss";

export function SeatSelectionTwo({ ticketCounts, totalPrice }) {
  const rows = "ABCDEFGHIJKLMN"; // Các hàng ghế
  const seatsPerRow = 15; // Số ghế mỗi hàng
  const vipRows = ["E", "F"]; // Các hàng VIP
  const coupleSeatsRow = "N"; // Hàng ghế đôi cuối cùng

  const [selectedSeats, setSelectedSeats] = useState([]);
  const bookedSeats = ["F03", "F04", "H07", "H08", "K11", "K12"]; // Ghế đã đặt
  const [timeLeft, setTimeLeft] = useState(300); // 5 phút giữ vé

  const totalTickets =
    ticketCounts.adultSingle +
    ticketCounts.studentSenior +
    ticketCounts.adultDouble * 2; // Tổng số vé

  const coupleSeats = [...Array(Math.floor(seatsPerRow / 2)).keys()].map(
    (i) => `${coupleSeatsRow}${i * 2 + 1 < 10 ? `0${i * 2 + 1}` : i * 2 + 1}`
  ); // Tạo ghế đôi chỉ trong hàng N

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

  // Cập nhật thời gian giữ vé
  useEffect(() => {
    if (selectedSeats.length === 0) return; // Dừng đếm ngược nếu không có ghế được chọn

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime > 1) {
          return prevTime - 1;
        } else {
          clearInterval(timer);
          alert("Thời gian giữ vé đã hết. Trang sẽ được tải lại.");
          window.location.reload(); // Reload trang khi hết thời gian
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [selectedSeats]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      secs < 10 ? "0" : ""
    }${secs}`;
  };

  return (
    <div className="seat-selection-container">
      <h2 className="heading" style={{ textAlign: "center" }}>
        CHỌN GHẾ - RẠP 02
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

              // Hàng ghế đôi (chỉ hàng cuối cùng - Hàng N)
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
      {selectedSeats.length > 0 && (
        <div className="summary-bar">
          <div>
            <p>
              <strong>CƯỜI XUYÊN BIÊN GIỚI (T13)</strong>
            </p>
            <p>Cinestar Quốc Thanh | 2 Người Lớn</p>
            <p>Phòng chiếu: 02 | {selectedSeats.join(", ")} | 19:30</p>
          </div>
          <div className="info-container">
            <div className="time-container">
              <div className="time-box">
                <span>Thời gian giữ vé:</span>
                <span>{formatTime(timeLeft)}</span>
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
