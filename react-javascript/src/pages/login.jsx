import '@ant-design/v5-patch-for-react-19';
import { Button, Col, Divider, Form, Input, notification, Row } from 'antd';
import { loginApi } from '../utils/api';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../components/context/auth.context';
import { ArrowLeftOutlined } from '@ant-design/icons';

const LoginPage = () => {
    const navigate = useNavigate();
    const { setAuth } = useContext(AuthContext);

    const onFinish = async (values) => {
        const { email, password } = values;
        const res = await loginApi(email, password);
        if (res && res.EC === 0) {
            localStorage.setItem("access_token", res.access_token)
            notification.success({
                message: "Đăng nhập thành công",
                // description: "Success"
            });
            setAuth({
                isAuthenticated: true,
                user: {
                    email: res?.user?.email ?? "",
                    name: res?.user?.name ?? "",
                }
            });
            navigate("/")
        } else {
            notification.error({
                message: "Đăng nhập thất bại",
                description: res?.EM ?? "Error"
            })
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
                    <legend style={{ textAlign: "center" }}>ĐĂNG NHẬP</legend>
                    <Form
                        name="basic"
                        onFinish={onFinish}
                        autoComplete="off"
                        layout='vertical'
                    >
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
                                Đăng nhập
                            </Button>
                        </Form.Item>
                    </Form>
                    <Link to={"/"}><ArrowLeftOutlined /> Quay lại trang chủ</Link>
                    <Divider />
                    <div style={{ textAlign: "center" }}>
                        Chưa có tài khoản?<br />
                        <Link to={"/register"}>Đăng ký</Link>
                    </div>
                </fieldset>
            </Col>
        </Row>
    )
}

export default LoginPage;