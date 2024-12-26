import React, { Fragment } from "react";
import "./Navbar.scss";
import "../../assets/images/logo.jpg";
import Link from "antd/es/typography/Link";
const Navbar = () => {
   return (
      <Fragment>
         <nav className="nav-container">
            <div className="d-flex justify-content-between align-items-center px-28">
               <a href="/" className="logo">
                  <img src="/src/assets/images/logo1.png" alt="KT Movies" />
                  <span>KT Movies</span>
               </a>
               <div className="d-flex">
                  <a href="/detail" className="btn btn--pri">
                     <img src="https://cinestar.com.vn/assets/images/ic-ticket.svg" />
                     Đặt Vé Ngay
                  </a>
                  <a href="/foodanddrink" className="btn btn--second ms-3">
                     <img src="https://cinestar.com.vn/assets/images/ic-cor.svg" />
                     Đặt bắp nước
                  </a>
               </div>
               <ul className="nav-list">
                  <li className="nav-item">
                     <input placeholder="Tìm phim, rạp" />
                  </li>
                  <li className="nav-item relative group">
                     <a href="/login" className="nav-link">
                        Đăng nhập
                     </a>

                     {/* Thông tin cá nhân hiển thị khi hover */}
                     <div className="hidden absolute top-full left-0 w-48 bg-white text-black shadow-lg p-4 rounded-lg group-hover:block">
                        <div className="text-sm mb-2">
                           <strong>Họ và tên:</strong> Huỳnh Gia Khánh
                        </div>
                        <div className="text-sm mb-2">
                           <strong>Email:</strong> kkk@gmail.com
                        </div>
                        <div>
                           <a
                              href="/info"
                              className="text-blue-500 hover:text-blue-600 text-sm underline"
                           >
                              Thông tin cá nhân
                           </a>
                        </div>
                        <div>
                           <a
                              href="/#"
                              className="text-black-600 hover:text-blue-600 text-sm underline"
                           >
                              Đăng xuất
                           </a>
                        </div>
                     </div>
                  </li>

                  <li className="nav-item">
                     <div class="fui-button-call">
                        <a href="#" class="social-link" title="0357832125">
                           <div class="icon">
                              <svg
                                 fill="currentColor"
                                 xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 512 512"
                              >
                                 <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                              </svg>
                           </div>
                           <span class="text">0123456789</span>
                        </a>
                     </div>
                  </li>
               </ul>
            </div>
            <div className="container">
               <ul className="nav-list nav-bottom justify-content-between">
                  <div className="d-flex" style={{ gap: "20px" }}>
                     <li className="nav-item">
                        <a href="#" className="nav-link">
                           Chọn rạp
                        </a>
                     </li>
                     <li className="nav-item">
                        <a href="#" className="nav-link">
                           Lịch chiếu
                        </a>
                     </li>
                  </div>
                  <div className="d-flex" style={{ gap: "20px" }}>
                     <li className="nav-item">
                        <a href="/sale" className="nav-link">
                           Khuyến mãi
                        </a>
                     </li>
                     <li className="nav-item">
                        <a href="/lien-he" className="nav-link">
                           Liên hệ
                        </a>
                     </li>
                     <li className="nav-item">
                        <a href="/about" className="nav-link">
                           Giới thiệu
                        </a>
                     </li>
                  </div>
               </ul>
            </div>
         </nav>
      </Fragment>
   );
};

export default Navbar;
