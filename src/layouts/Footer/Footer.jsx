import React from "react";
import "./Footer.scss";
const qgia = [
   "Phim Việt Nam",
   "Phim Hàn Quốc",
   "Phim Âu Mỹ",
   "Phim Trung Quốc",
];
const tloai = [
   "Phim tình cảm",
   "Phim kinh dị",
   "Phim khoa học & viễn tưởng",
   "Phim hoạt hình",
];
const Footer = () => {
   return (
      <div>
         <div class="footer">
            <div class="footer-top">
               <h3 class="footer-top-heading">Theo dõi</h3>
               <ul class="social-list">
                  <li class="social-item">
                     <a
                        href="https://facebook.com"
                        title="Facebook"
                        class="social-link"
                     >
                        <svg
                           width="14"
                           height="24"
                           viewBox="0 0 14 24"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              d="M13 1.07104H9.72727C8.28064 1.07104 6.89325 1.65051 5.87033 2.68196C4.8474 3.71341 4.27273 5.11235 4.27273 6.57105V9.87105H1V14.271H4.27273V23.071H8.63636V14.271H11.9091L13 9.87105H8.63636V6.57105C8.63636 6.27931 8.7513 5.99952 8.95588 5.79323C9.16047 5.58694 9.43795 5.47105 9.72727 5.47105H13V1.07104Z"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                           />
                        </svg>
                     </a>
                  </li>
                  <li class="social-item">
                     <a
                        href="https://instagram.com"
                        title="Instagram"
                        class="social-link"
                     >
                        <svg
                           width="22"
                           height="23"
                           viewBox="0 0 22 23"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M5.7619 1.09497C3.14512 1.09497 1.0238 3.21629 1.0238 5.83307V16.3093C1.0238 18.926 3.14512 21.0474 5.7619 21.0474H16.2381C18.8549 21.0474 20.9762 18.926 20.9762 16.3093V5.83307C20.9762 3.21629 18.8549 1.09497 16.2381 1.09497H5.7619ZM0.0238037 5.83307C0.0238037 2.664 2.59284 0.0949707 5.7619 0.0949707H16.2381C19.4072 0.0949707 21.9762 2.664 21.9762 5.83307V16.3093C21.9762 19.4783 19.4072 22.0474 16.2381 22.0474H5.7619C2.59284 22.0474 0.0238037 19.4783 0.0238037 16.3093V5.83307ZM11.5866 7.37508C10.8188 7.26122 10.0346 7.39237 9.34559 7.74989C8.65658 8.1074 8.09785 8.67307 7.74886 9.36644C7.39986 10.0598 7.27839 10.8456 7.40171 11.6119C7.52503 12.3783 7.88687 13.0863 8.43576 13.6352C8.98464 14.1841 9.69263 14.5459 10.459 14.6692C11.2254 14.7926 12.0112 14.6711 12.7045 14.3221C13.3979 13.9731 13.9636 13.4144 14.3211 12.7254C14.6786 12.0364 14.8097 11.2522 14.6959 10.4843C14.5797 9.70107 14.2148 8.97596 13.6549 8.41608C13.095 7.85619 12.3699 7.49122 11.5866 7.37508ZM8.88502 6.86226C9.76073 6.40788 10.7574 6.24118 11.7333 6.3859C12.7288 6.53351 13.6504 6.99738 14.362 7.70897C15.0736 8.42057 15.5374 9.34216 15.6851 10.3376C15.8298 11.3135 15.6631 12.3102 15.2087 13.1859C14.7543 14.0616 14.0354 14.7718 13.1541 15.2153C12.2729 15.6589 11.2742 15.8133 10.3001 15.6565C9.32609 15.4998 8.42627 15.0399 7.72865 14.3423C7.03103 13.6447 6.57115 12.7449 6.41441 11.7708C6.25767 10.7968 6.41206 9.79809 6.85562 8.91685C7.29918 8.0356 8.00931 7.31665 8.88502 6.86226ZM16.7619 4.80926C16.4858 4.80926 16.2619 5.03311 16.2619 5.30926C16.2619 5.5854 16.4858 5.80926 16.7619 5.80926H16.7719C17.048 5.80926 17.2719 5.5854 17.2719 5.30926C17.2719 5.03311 17.048 4.80926 16.7719 4.80926H16.7619Z"
                              fill="currentColor"
                           />
                        </svg>
                     </a>
                  </li>
                  <li class="social-item">
                     <a
                        href="https://twiter.com"
                        title="Twiter"
                        class="social-link"
                     >
                        <svg
                           width="24"
                           height="25"
                           viewBox="0 0 24 25"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              d="M23 3.07109C22.0424 3.74657 20.9821 4.2632 19.86 4.60109C19.2577 3.9086 18.4573 3.41778 17.567 3.19502C16.6767 2.97225 15.7395 3.02829 14.8821 3.35554C14.0247 3.6828 13.2884 4.26549 12.773 5.02481C12.2575 5.78412 11.9877 6.68343 12 7.60109V8.60109C10.2426 8.64666 8.50127 8.2569 6.93101 7.46654C5.36074 6.67617 4.01032 5.50973 3 4.07109C3 4.07109 -1 13.0711 8 17.0711C5.94053 18.4691 3.48716 19.17 1 19.0711C10 24.0711 21 19.0711 21 7.57109C20.9991 7.29254 20.9723 7.01469 20.92 6.74109C21.9406 5.73458 22.6608 4.4638 23 3.07109V3.07109Z"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                           />
                        </svg>
                     </a>
                  </li>
               </ul>
            </div>
            <div class="footer-body">
               <div class="category-wrap logo">
                  <img src="/src/assets/images/logo1.png" alt="KT Movies" />
               </div>
               <div class="category-wrap">
                  <h4 class="category-title">Phim Hot</h4>
                  <ul class="category-list">
                     {qgia.map((q, index) => {
                        return (
                           <li className="category-item" key={index}>
                              <a href="#" title={q} class="category-link">
                                 {q}
                              </a>
                           </li>
                        );
                     })}
                  </ul>
               </div>
               <div class="category-wrap">
                  <h4 class="category-title">Thể Loại</h4>
                  <ul class="category-list">
                     <li class="category-item">
                        <a href="#" title="Phim tình cảm" class="category-link">
                           Phim tình cảm
                        </a>
                     </li>
                     <li class="category-item">
                        <a href="#" title="Phim kinh dị" class="category-link">
                           Phim kinh dị
                        </a>
                     </li>
                     <li class="category-item">
                        <a href="#" title="Phim hài" class="category-link">
                           Phim hài
                        </a>
                     </li>
                     <li class="category-item">
                        <a
                           href="#"
                           title="Phim hoạt hình"
                           class="category-link"
                        >
                           Phim hoạt hình
                        </a>
                     </li>
                     <li class="category-item">
                        <a
                           href="#"
                           title="Phim Khoa học & Viễn tưởng"
                           class="category-link"
                        >
                           Phim Khoa học & Viễn tưởng
                        </a>
                     </li>
                  </ul>
               </div>
               <div class="category-wrap">
                  <h4 class="category-title">Rạp chiếu</h4>
                  <ul class="category-list">
                     <li class="category-item">
                        <a href="#" title="Hà Nội" class="category-link">
                           Hà Nội
                        </a>
                     </li>
                     <li class="category-item">
                        <a href="#" title="Thanh Hóa" class="category-link">
                           Thanh Hóa
                        </a>
                     </li>
                     <li class="category-item">
                        <a href="#" title="Đà Nẵng" class="category-link">
                           Đà Nẵng
                        </a>
                     </li>
                     <li class="category-item">
                        <a
                           href="#"
                           title="Tp.Hồ Chí Minh"
                           class="category-link"
                        >
                           Tp.Hồ Chí Minh
                        </a>
                     </li>
                  </ul>
               </div>
               <div class="category-wrap">
                  <h4 class="category-title">Thông tin</h4>
                  <ul class="category-list">
                     <li class="category-item">
                        <a href="#" title="Chính sách" class="category-link">
                           {" "}
                           Chính sách{" "}
                        </a>
                     </li>
                     <li class="category-item">
                        <a href="#" title="Điều khoản" class="category-link">
                           {" "}
                           Điều khoản{" "}
                        </a>
                     </li>
                     <li class="category-item">
                        <a href="#" title="Liên hệ" class="category-link">
                           {" "}
                           Liên hệ: 0123456789{" "}
                        </a>
                     </li>
                     <li class="category-item">
                        <a href="#" title="Email" class="category-link">
                           {" "}
                           Email: kk@gmail.com{" "}
                        </a>
                     </li>
                     <li class="category-item">
                        <span>@2025-KK</span>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Footer;
