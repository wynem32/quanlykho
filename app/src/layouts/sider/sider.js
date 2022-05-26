import { Menu, Typography } from 'antd'
import { 
    HomeOutlined,
    UnorderedListOutlined,
    GiftOutlined,
    TeamOutlined,
    BarChartOutlined
} from '@ant-design/icons'
import { Link } from 'react-router-dom'

export default function SideBar() {
    return (
        <>
            <Typography.Title level={2}>DStore</Typography.Title>
            <Menu 
                mode='inline'
                inlineCollapsed={true}
            >
                <Menu.Item key="/">
                    <HomeOutlined />
                    <span>Dashboard</span>
                    <Link to="/"></Link>
                </Menu.Item>

                <Menu.Item key="/category">
                    <UnorderedListOutlined />
                    <span>Category</span>
                    <Link to="/category"></Link>
                </Menu.Item>

                <Menu.Item key="/product">
                    <GiftOutlined />
                    <span>Product</span>
                    <Link to="/product"></Link>
                </Menu.Item>

                <Menu.Item key="/staff">
                    <TeamOutlined />
                    <span>Staff</span>
                    <Link to="/staff"></Link>
                </Menu.Item>

                <Menu.Item key="/statistic">
                    <BarChartOutlined />
                    <span>Statistic</span>
                    <Link to="/statistic"></Link>
                </Menu.Item>
            </Menu>
        </>
    )
}