import { Layout } from 'antd'
import { useSelector } from 'react-redux'
import Banner from './bannerProduct'
import FilterProduct from './filterProduct'
import TableProduct from './tableProduct'

const { Content } = Layout

export default function Product() {
    const listData = useSelector(state => state.category)
    const productData = useSelector(state => state.product)
    return (
        <Layout>
            <Content>
                <Banner />
                <FilterProduct dataList={listData.data}/>
                <TableProduct dataProduct={productData.data} />
            </Content>
        </Layout>
    )
}