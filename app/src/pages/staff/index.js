import { Layout } from 'antd'
import Banner from './bannerStaff'
import FilterList from './filterStaff'
import TableStaff from './tableStaff'
import { useSelector } from 'react-redux'

const { Content } = Layout

export default function Staff() {
    const dataStaff = useSelector(state => state.staff)
    return (
        <Layout>
            <Content>
                <Banner />
                <FilterList />
                <TableStaff data={dataStaff.data} />
            </Content>
        </Layout>
    )
}