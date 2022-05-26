import CommonTable from '../../components/common-table/table'

const headCells = [
    {
        title: 'Product Name',
        dataIndex: 'productName',
        key: 'productName'
    },
    {
        title: 'Product Code',
        dataIndex: 'productCode',
        key: 'productCode'
    },
    {
        title: 'Amount',
        dataIndex: 'amount',
        key: 'amount'
    },
    {
        title: 'Date Imported',
        dataIndex: 'dateImported',
        key: 'dateImported'
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status'
    }
]

export default function TableImported(props) {
    const { data } = props
    return (
        <>
            <CommonTable 
                headCells={headCells}
                data={data}
            />
        </>
    )
}