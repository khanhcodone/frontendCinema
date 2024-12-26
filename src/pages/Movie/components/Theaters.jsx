import React, { useState } from "react";
import { LocalActivitySharp, TextRotationAngledown } from "@mui/icons-material";
import { Select } from "antd";

export function Theaters({ onTimeChange }) {
  const [selectedTime, setSelectedTime] = useState(null); // Tracks a single selected time
  const [selectedLocation, setSelectedLocation] = useState(null); // Tracks selected location

  // Handles selecting a time and ensures only one is selected at a time
  const handleSelectTime = (time) => {
    setSelectedTime(time);

    // Notify parent component of selected time
    if (onTimeChange) {
      onTimeChange(time);
    }
  };

  // List of cinemas and showtimes
  const cinemas = [
    {
      name: "Cinestar Quốc Thanh",
      address:
        "271 Nguyễn Trãi, Phường Nguyễn Cư Trinh, Quận 1, Thành Phố Hồ Chí Minh",
      times: ["00:15", "08:10", "10:20", "19:30", "21:30"],
    },
    {
      name: "Cinestar Hà Nội",
      address: "22 Thành Công, Ba Đình, Hà Nội",
      times: ["09:15", "11:10", "14:20", "16:30", "20:30"],
    },
    {
      name: "Cinestar Đà Lạt",
      address: "20 Hồ Tùng Mậu, Đà Lạt, Lâm Đồng",
      times: ["12:00", "14:00", "17:00", "19:00", "21:00"],
    },
  ];

  // List of locations
  const locations = [
    { value: "Hồ Chí Minh", label: "Hồ Chí Minh" },
    { value: "Hà Nội", label: "Hà Nội" },
    { value: "Đà Lạt", label: "Đà Lạt" },
    { value: "Bình Dương", label: "Bình Dương" },
    { value: "Huế", label: "Huế" },
    { value: "Tiền Giang", label: "Tiền Giang" },
    { value: "Kiên Giang", label: "Kiên Giang" },
    { value: "Lâm Đồng", label: "Lâm Đồng" },
  ];

  // Filter cinemas based on selected location
  const filteredCinemas =
    selectedLocation && selectedLocation !== "Tất cả"
      ? cinemas.filter((cinema) => cinema.address.includes(selectedLocation))
      : cinemas;

  return (
    <div>
      <div className="shtime-body">
        <h2 className="heading">DANH SÁCH RẠP</h2>
        <div className="select-location">
          <LocalActivitySharp />
          <Select
            options={[
              { value: "Tất cả", label: "Tất cả" },
              ...locations.map((loc) => ({
                value: loc.value,
                label: loc.label,
              })),
            ]}
            onChange={setSelectedLocation} // Updates selected location
            placeholder="Chọn khu vực"
            style={{ width: 200 }}
          />
        </div>
      </div>

      <div className="shtime-ft">
        <div className="cinestar-list collapseBlockJS">
          {filteredCinemas.map((cinema, index) => (
            <div key={index} className="cinestar-item collapseItem active">
              <div className="cinestar-heading collapseHead">
                <h4 className="tittle">{cinema.name}</h4>
                <TextRotationAngledown />
              </div>
              <div className="cinestar-body collapseBody">
                <p className="addr">{cinema.address}</p>
                <ul className="cinestar-list collapseBlockJS">
                  <li className="item-info">
                    <div className="tt">Standard</div>
                    <ul className="list-time">
                      {cinema.times.map((time, idx) => (
                        <li
                          key={idx}
                          className={`item-time ${
                            selectedTime === time ? "selected" : ""
                          }`}
                          onClick={() => handleSelectTime(time)}
                        >
                          {time}
                        </li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
