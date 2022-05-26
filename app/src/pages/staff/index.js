import { Layout } from 'antd'
import Banner from './bannerStaff'
import FilterList from './filterStaff'
import TableStaff from './tableStaff'

const { Content } = Layout

export default function Staff() {
    const data = [
        { staffName: 'Phạm Tất Thành', staffCode: 'A32600', position: 'nô lệ', dateJoining: '01/01/2022'}
    ]
    return (
        <Layout>
            <Content>
                <Banner />
                <FilterList />
                <TableStaff data={data} />
            </Content>
        </Layout>
    )
}