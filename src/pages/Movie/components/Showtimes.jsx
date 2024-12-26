import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

export function Showtimes() {
  const [selectedDate, setSelectedDate] = useState(null);

  const dates = ["25/10", "26/10", "27/10", "28/10"];
  const days = ["Thứ Sáu", "Thứ Bảy", "Chủ Nhật", "Thứ Hai"];

  const handleSelectDate = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="shtime">
      <div className="shtime-wr">
        <div className="shtime-heading">
          <div className="heading">Lịch chiếu</div>
          <div className="shtime-slider time-list">
            <Swiper
              autoplay={false}
              spaceBetween={30}
              breakpoints={{
                768: {
                  slidesPerView: 3,
                },
                0: {
                  slidesPerView: 3,
                },
              }}
            >
              {dates.map((date, index) => (
                <SwiperSlide key={index} className="time-item col">
                  <div
                    className={`box-time ${
                      selectedDate === date ? "selected" : ""
                    }`}
                    onClick={() => handleSelectDate(date)}
                  >
                    <p className="date">{date}</p>
                    <p className="day">{days[index]}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
