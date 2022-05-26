import { Tag, Space, Button } from "antd";
import CommonTable from "../../components/common-table/table";
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
        title: 'Image',
        dataIndex: 'image',
        key: 'image'
    },
    {
        title: 'Date',
        dataIndex: 'date',
        key: 'date'
    },
    {
        title: 'Tag',
        dataIndex: 'tag',
        key: 'tag',
        render: (_, { tags }) => (
            <>
                { tags.map(tag => {
                    return (
                        <Tag key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    )
                })}
            </>
        )
    },
    {
        title: 'Inventory Number',
        dataIndex: 'inventoryNumber',
        key: 'inventoryNumber'
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price'
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
export default function TableProduct(props) {
    const { dataProduct } = props
    return (
        <>
            <CommonTable
                headCells={headCells}
                data={dataProduct}
            />
        </>
    )
}