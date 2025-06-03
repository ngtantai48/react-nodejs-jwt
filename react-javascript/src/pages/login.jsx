import '@ant-design/v5-patch-for-react-19';
import { Button, Form, Input, notification } from 'antd';
import { loginApi } from '../utils/api';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();

    const onFinish = async (values) => {
        const { email, password } = values;
        const res = await loginApi(email, password);
        if (res && res.EC == 0) {
            localStorage.setItem("access_token", res.access_token)
            notification.success({
                message: "Đăng nhập thành công",
                // description: "Success"
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
        <div style={{ margin: '50px' }}>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
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
        </div>
    )
}

export default LoginPage;