import React, { useState, useEffect } from "react";
import "./SeatSelection.scss";

export function SeatSelectionOne({ ticketCounts, totalPrice }) {
  const rows = "ABCDEFGHIJKLMN";
  const seatsPerRow = 19;

  const [selectedSeats, setSelectedSeats] = useState([]);
  const bookedSeats = ["G07", "G08", "H10", "K11", "K12"];
  const coupleSeats = ["N05", "N07", "N09", "N11", "N15", "N19"];
  const [timeLeft, setTimeLeft] = useState(300); // 5 phút (300 giây)

  const totalTickets =
    ticketCounts.adultSingle +
    ticketCounts.studentSenior +
    ticketCounts.adultDouble * 2;

  const toggleSeat = (seat) => {
    if (bookedSeats.includes(seat)) return;

    setSelectedSeats((prevSelected) => {
      if (prevSelected.includes(seat)) {
        return prevSelected.filter((s) => s !== seat);
      } else if (prevSelected.length < totalTickets) {
        return [...prevSelected, seat];
      } else {
        alert("Bạn đã chọn đủ số lượng ghế.");
        return prevSelected;
      }
    });
  };

  // Cập nhật thời gian giữ vé
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime > 1) {
          return prevTime - 1;
        } else {
          clearInterval(timer);
          alert("Thời gian giữ vé đã hết. Trang sẽ được tải lại.");
          window.location.reload(); // Reload trang
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
        CHỌN GHẾ - RẠP 01
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

              if (row === "N") {
                if (coupleSeats.includes(seat) && index % 2 === 0) {
                  const isCoupleSelected = selectedSeats.includes(seat);

                  return (
                    <div
                      key={`couple-${seat}`}
                      className={`couple-seat ${
                        isCoupleSelected ? "selected" : ""
                      }`}
                      onClick={() => toggleSeat(seat)}
                    >
                      <span>{seat}</span>
                    </div>
                  );
                }
                return null;
              }

              if (index === 5 || index === 15) {
                return <div key={`space-${seat}`} className="space"></div>;
              }

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
          <div className="seat selected"></div> Ghế Chọn
        </div>
        <div className="legend-item">
          <div className="seat booked"></div> Ghế Đã Đặt
        </div>
        <div className="legend-item">
          <div className="couple-seat"></div> Ghế Đôi
        </div>
      </div>
      {/* Thanh thông báo */}

      {selectedSeats.length > 0 ? (
        <div className="summary-bar">
          <div>
            <p>
              <strong>CƯỜI XUYÊN BIÊN GIỚI (T13)</strong>
            </p>
            <p>Cinestar Quốc Thanh | 2 Người Lớn</p>
            <p>
              Phòng chiếu: 01 | {selectedSeats.join(", ") || "Chưa chọn ghế"} |
              19:00
            </p>
          </div>
          <div className="info-container">
            <div className="time-container">
              <div className="time-box">
                <span>Thời gian giữ vé: </span>
                <span>{formatTime(timeLeft)}</span>
              </div>
            </div>
            <div className="price-container">
              <p>Tạm tính: {selectedSeats.length * 150000 + totalPrice} VND</p>
              <a href="/payment"><button className="book-button">ĐẶT VÉ</button></a>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
