import CommonTable from '../../components/common-table/table'
import { Space, Button } from 'antd'
const headCells = [
    {
        title: 'Staff Name',
        dataIndex: 'staffName',
        key: 'staffName'
    },
    {
        title: 'Staff Code',
        dataIndex: 'staffCode',
        key: 'staffCode'
    },
    {
        title: 'Position',
        dataIndex: 'position',
        key: 'position'
    },
    {
        title: 'Date Joining',
        dataIndex: 'dateJoining',
        key: 'dateJoining'
    },
    {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        render: () => (
            <Space direction="vertical">
                <Button>Update</Button>
                <Button>Delete</Button>
            </Space>
        )   
    },
]

export default function TableStaff(props) {
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