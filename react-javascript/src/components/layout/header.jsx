import React, { useState } from 'react';
import { Link } from "react-router";
import { HomeTwoTone, IdcardTwoTone, SettingTwoTone } from '@ant-design/icons';
import { Menu } from 'antd';

const Header = () => {
    const items = [
        {
            label: <Link to={`/`}>Home Page</Link>,
            key: 'home',
            icon: <HomeTwoTone />
        },
        {
            label: <Link to={`/user`}>Users</Link>,
            key: 'user',
            icon: <IdcardTwoTone />,
        },
        {
            label: 'Welcome Nguyen Tan Tai',
            key: 'SubMenu',
            icon: <SettingTwoTone />,
            children: [
                { label: 'Đăng nhập', key: 'login' },
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