import "./Login.css";
import "antd/dist/antd.min.js";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import images from "../../assets/images/ghe.jpg";
import { Form, Checkbox, Button, Input } from "antd";

const Login = () => {
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
  const handleSubmit = () => {
    navigate("/");
    localStorage.setItem("user", user.userName);

    console.log("Submit successfull");
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="illustration-wrapper">
          <img src={images} alt="Login" />
        </div>
        <Form
          name="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className="px-4"
        >
          <p className="form-title1">Chào mừng đến với KT Movies</p>
          <p className="description">Đặt vé xem phim online trở nên thật dễ dàng</p>
          <p className="form-title">Đăng nhập</p>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Vui lòng nhập tài khoản!" }]}
          >
            <Input
              placeholder="Tên đăng nhập hoặc Email"
              value={user.userName}
              onChange={(e) => onChangeInput(e, "userName")}
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
          >
            <Input.Password
              placeholder="Mật khẩu"
              value={user.pass}
              onChange={(e) => onChangeInput(e, "pass")}
            />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Nhớ mật khẩu</Checkbox>
            <Link to="/Login/forgot">Quên mật khẩu?</Link>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              onClick={handleSubmit}
            >
              Đăng nhập
            </Button>
            <p className="title-signup">Bạn chưa có tài khoản? <a href="/register">Đăng ký</a></p>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default Login;
