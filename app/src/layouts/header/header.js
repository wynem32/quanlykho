import { Avatar, Button, Dropdown, Menu } from 'antd'
import { 
    UserOutlined,
    MenuUnfoldOutlined
} from '@ant-design/icons'
import { Link } from 'react-router-dom'
import './header.css'

export default function Head() {
    const menuUser = (
        <Menu 
            items={[
                {
                    key: '1',
                    label: (
                    <Link to='/login'>
                        Đăng xuất
                    </Link>
                    ),
                },
            ]}
        />
    )

    return (
        <>
            <Button>
                <MenuUnfoldOutlined />
            </Button>
            <Dropdown overlay={menuUser} arrow>
                <Avatar className='avatar' size={40} icon={<UserOutlined />} />
            </Dropdown>
        </>
    )
}