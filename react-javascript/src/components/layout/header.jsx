import React, { useContext, useState } from 'react';
import { Link, useNavigate } from "react-router";
import { HomeTwoTone, IdcardTwoTone, SettingTwoTone } from '@ant-design/icons';
import { Menu } from 'antd';
import { AuthContext } from '../context/auth.context';

const Header = () => {
    const navigate = useNavigate();
    const { auth, setAuth } = useContext(AuthContext);
    console.log(">>> check auth: ", auth);

    const items = [
        {
            label: <Link to={`/`}>Trang chủ</Link>,
            key: 'home',
            icon: <HomeTwoTone />
        },
        ...(auth.isAuthenticated ? [
            {
                label: <Link to={`/user`}>Danh sách người dùng</Link>,
                key: 'user',
                icon: <IdcardTwoTone />,
            }
        ] : []),
        {
            label: `Xin chào ${auth?.user?.name ?? ""}`,
            key: 'SubMenu',
            icon: <SettingTwoTone />,
            children: [
                ...(auth.isAuthenticated ? [
                    {
                        label: "Đăng xuất",
                        key: 'logout'
                    },
                ] : [
                    {
                        label: <Link to={'/login'}>Đăng nhập</Link>,
                        key: 'login'
                    }
                ]),
            ],
        },
    ];
    const [current, setCurrent] = useState('home');
    const onClick = e => {
        // console.log('click ', e);
        setCurrent(e.key);

        if (e.key === 'logout') {
            localStorage.removeItem("access_token");
            setAuth({
                isAuthenticated: false,
                user: {
                    email: "",
                    name: "",
                }
            });
            navigate("/");
            setCurrent("home");
        }
    };
    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default Header;