import { notification, Table } from 'antd';
import { useEffect, useState } from 'react';
import { getUserApi } from '../utils/api';

const UserPage = () => {
    const [dataSource, setDataSource] = useState([]);

    useEffect(() => {
        const fetchUser = async () => {
            const res = await getUserApi();
            if (!res?.message) {
                setDataSource(res)
            } else {
                notification.error({
                    message: "Unauthorized",
                    description: res.message
                })
            }
        }
        fetchUser();
    }, []);

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Role',
            dataIndex: 'role',
        },
    ];

    return (
        <div style={{ padding: '100px' }}>
            <Table
                bordered
                dataSource={dataSource} columns={columns}
                rowKey={"_id"}
            />
        </div>
    )
}

export default UserPage;