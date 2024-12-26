import React, { useState } from "react";
import "../styles/TicketType.scss";

export function TicketType({setTicketCounts, ticketCounts}) {


  const handleIncrease = (key) => {
    setTicketCounts({ ...ticketCounts, [key]: ticketCounts[key] + 1 });
  };

  const handleDecrease = (key) => {
    if (ticketCounts[key] > 0) {
      setTicketCounts({ ...ticketCounts, [key]: ticketCounts[key] - 1 });
    }
  };

  const ticketTypes = [
    { key: "adultSingle", name: "NGƯỜI LỚN", type: "ĐƠN", price: "70,000 VND" },
    {
      key: "studentSenior",
      name: "HSSV-NGUỜI CAO TUỔI",
      type: "ĐƠN",
      price: "45,000 VND",
    },
    {
      key: "adultDouble",
      name: "NGƯỜI LỚN",
      type: "ĐÔI",
      price: "145,000 VND",
    },
  ];

  return (
    <div className="ticket-type-container">
      <h2
        className="heading"
        style={{ textAlign: "center", marginBottom: "40px" }}
      >
        CHỌN LOẠI VÉ
      </h2>
      <div className="ticket-list">
        {ticketTypes.map((ticket) => (
          <div key={ticket.key} className="ticket-card">
            <div className="ticket-info">
              <h3 className="ticket-name">{ticket.name}</h3>
              <p className="ticket-name">{ticket.type}</p>
              <p className="ticket-price">{ticket.price}</p>
            </div>
            <div className="ticket-counter">
              <button
                className="counter-btn"
                onClick={() => handleDecrease(ticket.key)}
              >
                -
              </button>
              <span className="ticket-count">{ticketCounts[ticket.key]}</span>
              <button
                className="counter-btn"
                onClick={() => handleIncrease(ticket.key)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
