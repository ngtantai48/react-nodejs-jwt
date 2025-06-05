import '@ant-design/v5-patch-for-react-19';
import { Button, Col, Divider, Form, Input, notification, Row } from 'antd';
import { createUserApi } from '../utils/api';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';

const RegisterPage = () => {
    const navigate = useNavigate();

    const onFinish = async (values) => {
        const { name, email, password } = values;
        const res = await createUserApi(name, email, password);

        if (res && res.EC === 1) {
            notification.error({
                message: "Đăng ký tài khoản thất bại!",
                description: res?.EM ?? "Error"
            })
        } else {
            notification.success({
                message: "Đăng ký tài khoản thành công!",
                description: "Hãy đăng nhập"
            })
            navigate("/login")
        }
    };

    return (
        <Row justify={"center"} style={{ marginTop: "200px" }}>
            <Col xs={24} md={16} lg={5}>
                <fieldset style={{
                    padding: "15px",
                    margin: "5px",
                    border: "1px solid #ccc",
                    borderRadius: "5px"
                }}>
                    <legend style={{ textAlign: "center" }}>ĐĂNG KÝ TÀI KHOẢN</legend>
                    <Form
                        name="basic"
                        onFinish={onFinish}
                        autoComplete="off"
                        layout='vertical'
                    >
                        <Form.Item
                            label="Name"
                            name="name"
                            rules={[{ required: true, message: 'Vui lòng nhập tên của bạn!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{ required: true, message: 'Vui lòng nhập email của bạn!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Vui lòng nhập mật khẩu của bạn!' }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Đăng ký
                            </Button>
                        </Form.Item>
                    </Form>
                    <Link to={"/"}><ArrowLeftOutlined /> Quay lại trang chủ</Link>
                    <Divider />
                    <div style={{ textAlign: "center" }}>
                        Đã có tài khoản? <br />
                        <Link to={"/login"}>Đăng nhập</Link>
                    </div>
                </fieldset>
            </Col>
        </Row>
    )
}

export default RegisterPage;