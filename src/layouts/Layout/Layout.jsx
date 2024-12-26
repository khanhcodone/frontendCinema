import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "#0f172a",
        color: "#ffffff",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <div className="container justify-evenly" style={{ padding: "20px" }}>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
