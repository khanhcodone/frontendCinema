import "./Lienhe.scss";
import { React } from "react";
import { Form, Checkbox, Button, Input } from "antd";
const Lienhe = () => {

  return (
    <div className="lienhe">
      <div className="row justify-content-center">
        <div className="col-md-5 bg-white">
          <Form
                    name="login-form"
                    >
          <h2 className="section-title">LIÊN HỆ CHÚNG TÔI</h2>
                        <div className="form-label">Họ và tên</div>
                        <Form.Item
                            name="username"
                        >
                            <Input
                            style={{height: '44px'}}
                            placeholder="Họ và tên"
                            />
                        </Form.Item>
                        <div className="form-label">Số điện thoại</div>
                        <Form.Item
                            name="phone"
                        >
                            <Input
                            style={{height: '44px'}}
                            placeholder="Số điện thoại"
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
                            />
                        </Form.Item>

                        
                        <div className="form-label">Thông tin liên hệ và phản hồi</div>
                        <textarea name="" id="" className="form-control" rows={'5'}></textarea>

                        <Form.Item>
                            <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button mt-5"
                            style={{background: '#f3ea28', color: '#000'}}
                            >
                            Tiếp tục
                            </Button>
                        </Form.Item>
                    </Form>
        </div>
      </div>
    </div>
  );
};
export default Lienhe;
