import { Avatar, Button, Dropdown, Menu } from 'antd'
import { 
    UserOutlined,
    MenuUnfoldOutlined
} from '@ant-design/icons'
import './header.css'

export default function Head() {
    const menuUser = (
        <Menu 
            items={[
                {
                    key: '1',
                    label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                        Đăng xuất
                    </a>
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