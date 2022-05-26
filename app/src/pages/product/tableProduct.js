import { useState } from 'react'
import { Tag, Space, Button, Modal, Form, Input, Select, Upload, DatePicker } from "antd";
import CommonTable from "../../components/common-table/table";
import { deleteProduct, updateProduct } from "../../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import moment from 'moment';
export default function TableProduct(props) {
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
            title: 'Date Created',
            dataIndex: 'dateCreated',
            key: 'dateCreated'
        },
        {
            title: 'Tags',
            dataIndex: 'tags',
            key: 'tags',
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
            render: (_, record) => (
                <Space direction="vertical">
                    <Button onClick={() => showModal(record)}>Update</Button>
                    <Button onClick={() => handleDelete(record.productCode)}>Delete</Button>
                </Space>
            )   
        },
        
    ]
    const { dataProduct } = props
    const dataList = useSelector(state => state.category)
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [productEdit, setProductEdit] = useState({
        productName: '',
        oldProductCode: '',
        productCode: '',
        dateCreated: moment(new Date()).format('YYYY/MM/DD'),
        tags: [],
        inventoryNumber: '',
        price: ''
    })
    console.log(productEdit)
    const dispatch = useDispatch()
    const showModal = (record) => {
        setIsModalVisible(true);
        setProductEdit({
            productName: record.productName,
            oldProductCode: record.productCode,
            productCode: record.productCode,
            dateCreated: record.dateCreated,
            tags: record.tags,
            inventoryNumber: record.inventoryNumber,
            price: record.price
        })
    };
    const handleDelete = (productCode) => {
        Modal.confirm({
            title: 'Bạn có chắc chắn muốn xoá danh mục này?',
            content: 'Sẽ không thể hoàn tác lại nếu đã xoá.',
            onOk() {
                dispatch(deleteProduct(productCode))
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    };
    const handleEditProductName = (e) => {
        setProductEdit({
            ...productEdit,
            productName: e.target.value
        })
    }
    const handleEditProductCode = (e) => {
        setProductEdit({
            ...productEdit,
            productCode: e.target.value
        })
    }
    const handleEditDateCreated = (date, dateString) => {
        setProductEdit({
            ...productEdit,
            dateCreated: dateString
        })
    }
    const handleEditTags = (e) => {
        setProductEdit({
            ...productEdit,
            tags: e
        })
    }
    const handleEditInventory = (e) => {
        setProductEdit({
            ...productEdit,
            inventoryNumber: e.target.value
        })
    }
    const handleEditPrice = (e) => {
        setProductEdit({
            ...productEdit,
            price: e.target.value
        })
    }
    const handleOk = () => {
        dispatch(updateProduct(productEdit))
        setIsModalVisible(false);
    };
    
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <>
            <CommonTable
                headCells={headCells}
                data={dataProduct}
            />
            <Modal
                title='Update Product'
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                destroyOnClose={true}
            >
                <Form layout="vertical">
                    <Form.Item label='Tên phẩm'>
                        <Input defaultValue={productEdit.productName} onChange={handleEditProductName}/>
                    </Form.Item>
                    <Form.Item label='Mã sản phẩm'>
                        <Input defaultValue={productEdit.productCode} onChange={handleEditProductCode}/>
                    </Form.Item>
                    <Form.Item label='Ảnh minh hoạ'>
                        <Upload
                            name='avatar'
                            listType='picture-card'
                        />
                    </Form.Item>
                    <Form.Item label='Ngày tạo'>
                        <DatePicker defaultValue={moment(productEdit.dateCreated)} format={'YYYY/MM/DD'} onChange={(date, dateString) => handleEditDateCreated(date, dateString)}/>
                    </Form.Item>
                    <Form.Item label='Chủ đề'>
                        <Select mode='multiple' defaultValue={productEdit.tags} onChange={handleEditTags}>
                            {dataList.data.map((data,index) => (
                                <Select.Option key={index} value={`${data.listName}`}>{data.listName}</Select.Option>
                            ))}
                        </Select>
                    </Form.Item>
                    <Form.Item label='Số lượng'>
                        <Input defaultValue={productEdit.inventoryNumber} onChange={handleEditInventory}/>
                    </Form.Item>
                    <Form.Item label='Đơn giá'>
                        <Input defaultValue={productEdit.price} onChange={handleEditPrice}/>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}