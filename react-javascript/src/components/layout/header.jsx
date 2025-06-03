import React, { useState } from 'react';
import { Link } from "react-router";
import { HomeTwoTone, IdcardTwoTone, SettingTwoTone } from '@ant-design/icons';
import { Menu } from 'antd';

const Header = () => {
    const items = [
        {
            label: <Link to={`/`}>Trang chủ</Link>,
            key: 'home',
            icon: <HomeTwoTone />
        },
        {
            label: <Link to={`/user`}>Danh sách người dùng</Link>,
            key: 'user',
            icon: <IdcardTwoTone />,
        },
        {
            label: 'Xin chào Nguyen Tan Tai',
            key: 'SubMenu',
            icon: <SettingTwoTone />,
            children: [
                { label: <Link to={'/login'}>Đăng nhập</Link>, key: 'login' },
                { label: 'Đăng xuất', key: 'logout' },
            ],
        },
    ];
    const [current, setCurrent] = useState('mail');
    const onClick = e => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default Header;