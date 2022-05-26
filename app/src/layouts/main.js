import { Layout } from 'antd'
import { Route, Routes } from "react-router-dom";
import SideBar from './sider/sider'
import Head from './header/header'
import './main.css'
import Category from '../pages/category';
import Product from '../pages/product';
import Staff from '../pages/staff';
import Statistic from '../pages/statistic';

const { Sider, Header, Content } = Layout

export default function Main() {
    return (
        <Layout>
            <Sider className='sider'>
                <SideBar/>
            </Sider>
            <Layout>
                <Header className='header'>
                    <Head />
                </Header>
                <Content>
                    <Routes>
                        <Route path='/category' element={ <Category /> } />
                        <Route path='/product' element={ <Product /> } />
                        <Route path='/staff' element={ <Staff /> } />
                        <Route path='/statistic' element={ <Statistic /> } />
                    </Routes>
                </Content>
            </Layout>
        </Layout>
    )
}