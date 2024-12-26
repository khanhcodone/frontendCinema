import { React } from "react";
import { Form, Checkbox, Button, Input } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router";
import IMG from "../../assets/imgFilms/Picture1.png"
import "./Payment.scss"
import { Link } from "react-router-dom";

const Payment = () => {
    const [isShowPM1, setIsShowPM1] = useState(true)
    const [isActive, setIsActive] = useState(false)
    const [isShowPM2, setIsShowPM2] = useState(false)
    const [isShowPM3, setIsShowPM3] = useState(false)
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
    setIsShowPM1(false)
    setIsShowPM2(true)
    setIsActive(true)
  };
  const handleContinueBack = () => {
    setIsShowPM1(true)
    setIsShowPM2(false)
  };
  const handleContinueInfo = () => {
    setIsShowPM1(false)
    setIsShowPM2(false)
    setIsShowPM3(true)
    setIsActive(true)
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
            <li class={`process-item process-cus  ${isActive ? 'active' : '' }`}>
                <p class="link">
                    <span class="num">2</span>
                    <span class="txt">Thanh toán</span>
                </p>
            </li>
            <li class={`process-item process-cus  ${isActive ? 'active' : '' }`}>
                <p class="link">
                    <span class="num">3</span>
                    <span class="txt">Thông tin vé phim </span>
                </p>
            </li>
        </ul>

        <div className="row justify-content-center mt-5">
            <div className="col-md-6">

                {isShowPM1 &&
                    <Form
                    name="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    >
                        <div className="form-label">Họ và tên</div>
                        <Form.Item
                            name="username"
                        >
                            <Input
                            style={{height: '44px'}}
                            placeholder="Họ và tên"
                            value={user.userName}
                            onChange={(e) => onChangeInput(e, "userName")}
                            />
                        </Form.Item>
                        <div className="form-label">Số điện thoại</div>
                        <Form.Item
                            name="phone"
                        >
                            <Input
                            style={{height: '44px'}}
                            placeholder="Số điện thoại"
                            value={user.userName}
                            onChange={(e) => onChangeInput(e, "phone")}
                            />
                        </Form.Item>
                        <div className="form-label">Email</div>
                        <Form.Item
                            name="email"
                        >
                            <Input
                            style={{height: '44px'}}
                            type="email"
                            placeholder="Email"
                            value={user.userName}
                            onChange={(e) => onChangeInput(e, "userName")}
                            />
                        </Form.Item>

                        <Form.Item name="remember">
                            <Checkbox className="text-white">Đảm bảo mua đúng quy định</Checkbox>
                        </Form.Item>

                        <Form.Item name="remember">
                            <Checkbox className="text-white">Đồng ý điều khoản của Cinestar</Checkbox>
                        </Form.Item>

                        <Form.Item>
                            <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                            onClick={handleContinue}
                            style={{background: '#f3ea28', color: '#000'}}
                            >
                            Tiếp tục
                            </Button>
                        </Form.Item>
                    </Form>
                }

                
                {isShowPM2 &&
                    <div>
                        <div className="payment-item">
                            <img src="https://cinestar.com.vn/assets/images/img-momo.png"/>
                            <div className="text">Thanh toán qua Momo</div>
                        </div>
                        <div className="payment-item mt-4">
                            <img src="https://cinestar.com.vn/assets/images/img-card.png"/>
                            <div className="text">Thanh toán qua thẻ nội địa</div>
                        </div>
                        <div className="payment-item mt-4">
                            <img src="https://cinestar.com.vn/assets/images/img-card.png"/>
                            <div className="text">Thanh toán qua thẻ quốc tế</div>
                        </div>

                        <div className="sale">
                            <img src="https://cinestar.com.vn/assets/images/ic-tag-dis.svg"/>
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
                            style={{background: '#f3ea28', color: '#000'}}
                            >
                            Quay lại
                            </Button>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button ms-4"
                            onClick={handleContinueInfo}
                            style={{background: '#f3ea28', color: '#000'}}
                            >
                            Tiếp tục
                            </Button>
                        </div>
                    </div>
                }

                {isShowPM3 &&
                    <div>
                        <img src={IMG}/>
                    </div>
                }
            </div>
            {!isShowPM3 &&<div className="col-md-6">
                <div className="infomation">
                    <div className="d-flex justify-content-between">
                        <div className="title">Chị Dâu(T16)</div>
                        <div className="label">THỜI GIAN GIỮ VÉ <span>05:00</span></div>
                    </div>
                    <div className="text-yellow-400 text mt-3">
                        Phim dành cho khán giả từ 16 tuổi trở lên (16+)
                    </div>
                    <div className="label mt-3">Cinestar Quốc Thanh</div>
                    <div className="text">271 Nguyễn Trãi, Phường Nguyễn Cư Trinh, Quận 1, Thành Phố Hồ Chí MinhCinestar Quốc Thanh</div>
                    
                    <div className="text-yellow-400 text mt-3">
                        Thời gian
                    </div>
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

                    <div className="text-yellow-400 text mt-3">
                        Bắp nước
                    </div>

                    <div className="total">
                        <div className="sum-title text-yellow-400">
                            SỐ TIỀN CẦN THANH TOÁN
                        </div>
                        <div className="prices">
                            185,000VND
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    </div>
  );
};

export default Payment;
