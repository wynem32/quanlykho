import { useState } from 'react'
import { Layout } from 'antd'
import Banner from './bannerStatistic'
import TableImported from './tableImport'
import TableExported from './tableExport'

const { Content } = Layout
export default function Statistic() {
    const [table, setTable] = useState(1)
    const dataImported = [
        { productName: 'áo thun', productCode: '000004', amount: '1000', dateImported: '22/01/2021', status: 'đã nhập' },
        { productName: 'áo mưa', productCode: '000005', amount: '2000', dateImported: '22/01/2021', status: 'đang đợi nhập' },
    ]
    const dataExported = [
        { productName: 'áo thun', productCode: '000004', amount: '1000', dateExported: '22/01/2021', status: 'đã xuất' },
        { productName: 'áo mưa', productCode: '000005', amount: '2000', dateExported: '22/01/2021', status: 'đang đợi xuất' },
    ]
    return (
        <Layout>
            <Content>
                <Banner setTable={setTable}/>
                {table == 1 ? 
                    <TableImported data={dataImported}/>
                : <TableExported data={dataExported} />
                }
            </Content>
        </Layout>
    )
}