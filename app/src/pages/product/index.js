import { Layout } from 'antd'
import Banner from './bannerProduct'
import FilterProduct from './filterProduct'
import TableProduct from './tableProduct'

const { Content } = Layout

export default function Product() {
    const dataList = [
        { listName: 'Quần áo', listCode: 'QA', describle: 'quần áo quanh mùa' }
    ]
    const dataProduct = [
        { productName: 'Áo thun', productCode: '0000001', image: '', tags: ['Quần áo', 'Mùa hè'], status: 'đang bán' }
    ]
    return (
        <Layout>
            <Content>
                <Banner />
                <FilterProduct dataList={dataList}/>
                <TableProduct dataProduct={dataProduct} />
            </Content>
        </Layout>
    )
}