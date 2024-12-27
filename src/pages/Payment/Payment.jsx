import { React } from "react";
import { Form, Checkbox, Button, Input } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router";
import IMG from "../../assets/imgFilms/Picture1.png";
import "./Payment.scss";
import { Link } from "react-router-dom";

const Payment = () => {
   const [isShowPM1, setIsShowPM1] = useState(true);
   const [isActive, setIsActive] = useState(false);
   const [isShowPM2, setIsShowPM2] = useState(false);
   const [isShowPM3, setIsShowPM3] = useState(false);
   const navigate = useNavigate();
   const [user, setUser] = useState({
      userName: "",
      pass: "",
   });
   const onChangeInput = (e, key) => {
      setUser({
         ...user,
         [key]: e.target.value,
      });
   };
   const onFinish = (values) => {
      console.log("Success:", values);
   };

   const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
   };
   const handleContinue = () => {
      setIsShowPM1(false);
      setIsShowPM2(true);
      setIsActive(true);
   };
   const handleContinueBack = () => {
      setIsShowPM1(true);
      setIsShowPM2(false);
   };
   const handleContinueInfo = () => {
      setIsShowPM1(false);
      setIsShowPM2(false);
      setIsShowPM3(true);
      setIsActive(true);
   };
   return (
      <div className="home-wrapper">
         <ul class="process">
            <li class="process-item process-cus active">
               <p class="link">
                  <span class="num">1 </span>
                  <span class="txt">Thông tin khách hàng</span>
               </p>
            </li>
            <li class={`process-item process-cus  ${isActive ? "active" : ""}`}>
               <p class="link">
                  <span class="num">2</span>
                  <span class="txt">Thanh toán</span>
               </p>
            </li>
            <li class={`process-item process-cus  ${isActive ? "active" : ""}`}>
               <p class="link">
                  <span class="num">3</span>
                  <span class="txt">Thông tin vé phim </span>
               </p>
            </li>
         </ul>

         <div className="row justify-content-center mt-5">
            <div className="col-md-6">
               {isShowPM1 && (
                  <Form
                     name="login-form"
                     initialValues={{ remember: true }}
                     onFinish={onFinish}
                     onFinishFailed={onFinishFailed}
                  >
                     <div className="form-label">Họ và tên</div>
                     <Form.Item name="username">
                        <Input
                           style={{ height: "44px" }}
                           placeholder="Họ và tên"
                           value={user.userName}
                           onChange={(e) => onChangeInput(e, "userName")}
                        />
                     </Form.Item>
                     <div className="form-label">Số điện thoại</div>
                     <Form.Item name="phone">
                        <Input
                           style={{ height: "44px" }}
                           placeholder="Số điện thoại"
                           value={user.userName}
                           onChange={(e) => onChangeInput(e, "phone")}
                        />
                     </Form.Item>
                     <div className="form-label">Email</div>
                     <Form.Item name="email">
                        <Input
                           style={{ height: "44px" }}
                           type="email"
                           placeholder="Email"
                           value={user.userName}
                           onChange={(e) => onChangeInput(e, "userName")}
                        />
                     </Form.Item>

                     <Form.Item name="remember">
                        <Checkbox className="text-white">
                           Đảm bảo mua đúng quy định
                        </Checkbox>
                     </Form.Item>

                     <Form.Item name="remember">
                        <Checkbox className="text-white">
                           Đồng ý điều khoản của Cinestar
                        </Checkbox>
                     </Form.Item>

                     <Form.Item>
                        <Button
                           type="primary"
                           htmlType="submit"
                           className="login-form-button"
                           onClick={handleContinue}
                           style={{ background: "#f3ea28", color: "#000" }}
                        >
                           Tiếp tục
                        </Button>
                     </Form.Item>
                  </Form>
               )}

               {isShowPM2 && (
                  <div>
                     <div className="payment-item">
                        <img src="https://cinestar.com.vn/assets/images/img-momo.png" />
                        <div className="text">Thanh toán qua Momo</div>
                     </div>
                     <div className="payment-item mt-4">
                        <img src="https://cinestar.com.vn/assets/images/img-card.png" />
                        <div className="text">Thanh toán qua thẻ nội địa</div>
                     </div>
                     <div className="payment-item mt-4">
                        <img src="https://cinestar.com.vn/assets/images/img-card.png" />
                        <div className="text">Thanh toán qua thẻ quốc tế</div>
                     </div>

                     <div className="sale">
                        <img src="https://cinestar.com.vn/assets/images/ic-tag-dis.svg" />
                        <div>
                           <div>Chọn hoặc nhập mã giảm giá</div>
                           <div>Bạn đang có mã giảm giá</div>
                        </div>
                     </div>

                     <div className="d-flex mt-5">
                        <Button
                           type="primary"
                           htmlType="submit"
                           className="login-form-button"
                           onClick={handleContinueBack}
                           style={{ background: "#f3ea28", color: "#000" }}
                        >
                           Quay lại
                        </Button>
                        <Button
                           type="primary"
                           htmlType="submit"
                           className="login-form-button ms-4"
                           onClick={handleContinueInfo}
                           style={{ background: "#f3ea28", color: "#000" }}
                        >
                           Tiếp tục
                        </Button>
                     </div>
                  </div>
               )}

               {isShowPM3 && (
                  <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-md">
                     {/* Header */}
                     <h2 className="text-2xl font-bold text-center mb-6 text-black  w-full">
                        THANH TOÁN
                     </h2>
                     <div className="bg-purple-600 text-white text-center py-3 rounded">
                        <span>Thông Tin Giao Dịch</span>
                     </div>

                     {/* Content */}
                     <div className="mt-6">
                        {/* Người đặt */}
                        <div className="flex justify-between border-b border-gray-300 py-3">
                           <span className="font-medium text-black">
                              Người đặt
                           </span>
                           <span className="text-black">
                              Nguyễn Đăng Thục Anh
                           </span>
                        </div>
                        {/* Ngày đặt */}
                        <div className="flex justify-between border-b border-gray-300 py-3">
                           <span className="font-medium text-black">
                              Ngày đặt
                           </span>
                           <span className="text-black">06/11/2024 06:36</span>
                        </div>
                        {/* Phim */}
                        <div className="flex justify-between border-b border-gray-300 py-3">
                           <span className="font-medium text-black">Phim</span>
                           <span className="text-black">
                              ĐÔI BẠN HỌC YÊU (T18)
                           </span>
                        </div>
                        {/* Ghế */}
                        <div className="flex justify-between border-b border-gray-300 py-3">
                           <span className="font-medium text-black">Ghế</span>
                           <span className="text-black">,K04</span>
                        </div>
                        {/* Suất chiếu */}
                        <div className="flex justify-between border-b border-gray-300 py-3">
                           <span className="font-medium text-black">
                              Suất chiếu
                           </span>
                           <span className="text-black">20:30</span>
                        </div>
                        {/* Rạp */}
                        <div className="flex justify-between border-b border-gray-300 py-3">
                           <span className="font-medium text-black">Rạp</span>
                           <span className="text-black">
                              Cinestar Bình Dương (Sinh Viên)
                           </span>
                        </div>
                        {/* Tổng cộng */}
                        <div className="flex justify-between border-b border-gray-300 py-3">
                           <span className="font-medium text-black">
                              Tổng cộng
                           </span>
                           <span className="text-black">95,000</span>
                        </div>
                        {/* Trạng thái */}
                        <div className="flex justify-between border-b border-gray-300 py-3">
                           <span className="font-medium text-black">
                              Trạng thái
                           </span>
                           <span className="text-black">Đặt vé thành công</span>
                        </div>
                     </div>

                     {/* Mã vé */}
                     <div className="text-center mt-6">
                        <span className="font-medium text-black">Mã vé</span>
                        <h3 className="text-lg font-semibold text-black">
                           141956279
                        </h3>
                     </div>

                     {/* QR Code */}
                     <div className="flex justify-center mt-6">
                        <img
                           src="https://qrcode-gen.com/images/qrcode-default.png" // Thay URL bằng hình QR của bạn
                           alt="QR Code"
                           className="w-100 h-100"
                        />
                     </div>
                  </div>
               )}
            </div>
            {!isShowPM3 && (
               <div className="col-md-6">
                  <div className="infomation">
                     <div className="d-flex justify-content-between">
                        <div className="title">Chị Dâu(T16)</div>
                        <div className="label">
                           THỜI GIAN GIỮ VÉ <span>05:00</span>
                        </div>
                     </div>
                     <div className="text-yellow-400 text mt-3">
                        Phim dành cho khán giả từ 16 tuổi trở lên (16+)
                     </div>
                     <div className="label mt-3">Cinestar Quốc Thanh</div>
                     <div className="text">
                        271 Nguyễn Trãi, Phường Nguyễn Cư Trinh, Quận 1, Thành
                        Phố Hồ Chí MinhCinestar Quốc Thanh
                     </div>

                     <div className="text-yellow-400 text mt-3">Thời gian</div>
                     <div className="label">17:30 Thứ Hai 23/12/2024</div>

                     <div className="d-flex">
                        <div>
                           <div className="text-yellow-400 text mt-3">
                              Phòng chiếu
                           </div>
                           <div className="label">04</div>
                        </div>
                        <div className="ms-3">
                           <div className="text-yellow-400 text mt-3">
                              Số vé
                           </div>
                           <div className="label">1</div>
                        </div>
                        <div className="ms-3">
                           <div className="text-yellow-400 text mt-3">
                              Loại vé
                           </div>
                           <div className="label">Người lớn</div>
                        </div>
                        <div className="ms-3">
                           <div className="text-yellow-400 text mt-3">
                              Số vé
                           </div>
                           <div className="label">2</div>
                        </div>
                        <div className="ms-3">
                           <div className="text-yellow-400 text mt-3">
                              Loại vé
                           </div>
                           <div className="label">Người lớn</div>
                        </div>
                     </div>

                     <div className="d-flex mt-3">
                        <div>
                           <div className="text-yellow-400 text mt-3">
                              Loại ghế
                           </div>
                           <div className="label">Ghế thường</div>
                        </div>
                        <div className="ms-3">
                           <div className="text-yellow-400 text mt-3">
                              Số ghế
                           </div>
                           <div className="label">E04, E03</div>
                        </div>
                     </div>

                     <div className="text-yellow-400 text mt-3">Bắp nước</div>

                     <div className="total">
                        <div className="sum-title text-yellow-400">
                           SỐ TIỀN CẦN THANH TOÁN
                        </div>
                        <div className="prices">185,000VND</div>
                     </div>
                  </div>
               </div>
            )}
         </div>
      </div>
   );
};

export default Payment;
