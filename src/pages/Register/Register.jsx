import "./Register.css";
import "antd/dist/antd.min.js";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import images from "../../assets/images/ghe.jpg";
import { Form, Checkbox, Button, Input } from "antd";

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    userName: "",
    pass: "",
    name: "",
    date: "",
    phone: ""
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
          <p className="form-title">Đăng ký</p>
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Vui lòng nhập tên!" }]}
          >
            <Input
              placeholder="Họ và tên"
              value={user.name}
              onChange={(e) => onChangeInput(e, "name")}
            />
          </Form.Item>
          <Form.Item
            name="date"
            rules={[{ required: true, message: "Vui lòng nhập năm sinh!" }]}
          >
            <Input
              type="date"
              placeholder="Ngày sinh"
              value={user.name}
              onChange={(e) => onChangeInput(e, "date")}
            />
          </Form.Item>
          <Form.Item
            name="phone"
            rules={[{ required: true, message: "Vui lòng nhập sđt!" }]}
          >
            <Input
              type="number"
              placeholder="Số điện thoại"
              value={user.name}
              onChange={(e) => onChangeInput(e, "phone")}
            />
          </Form.Item>
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
            name="email"
            rules={[{ required: true, message: "Vui lòng nhập email!" }]}
          >
            <Input.Password
              placeholder="Điền email"
              value={user.pass}
              onChange={(e) => onChangeInput(e, "email")}
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

            <Form.Item
              name="password"
              rules={[{ required: true, message: "Vui lòng xác nhận mật khẩu!" }]}
            >
              <Input.Password
                placeholder="Xác thực mật khẩu"
                value={user.pass}
                onChange={(e) => onChangeInput(e, "pass")}
              />
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
            <p className="title-signup">Bạn đã có tài khoản? <a href="/login">Đăng nhập</a></p>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default Register;
