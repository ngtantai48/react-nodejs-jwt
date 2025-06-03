import '@ant-design/v5-patch-for-react-19';
import { Button, Form, Input, notification } from 'antd';
import { createUserApi } from '../utils/api';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const navigate = useNavigate();

    const onFinish = async (values) => {
        const { name, email, password } = values;
        const res = await createUserApi(name, email, password);

        if (res && res.EC == 1) {
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
        </div>
    )
}

export default RegisterPage;