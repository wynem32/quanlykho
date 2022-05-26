import { useState } from 'react'
import { Layout } from 'antd'
import Banner from './banner'
import FilterList from './filterList'
import TableList from './tableList'
import { useSelector } from 'react-redux'

const { Content } = Layout
export default function Category() {
    const data = useSelector((state) => state.category)
    return (
        <Layout>
            <Content>
                <Banner />
                <FilterList />
                <TableList data={data.data} />
            </Content>
        </Layout>
    )
}