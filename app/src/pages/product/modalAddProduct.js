import { useState } from 'react';
import { DatePicker, Form, Input, Modal, Select, Upload } from "antd";
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory } from '../../redux/categorySlice'
import { addProduct } from '../../redux/productSlice';
const initiaProductAdded = {
    productName: '',
    productCode: '',
    image: '',
    dateCreated: moment(new Date()).format('YYYY/MM/DD'),
    tags: [],
    inventoryNumber: 0,
    price: 0,
    describe: ''
}
export default function ModalAddProduct(props) {
    const dispatch = useDispatch()
    const dataList = useSelector(state => state.category)
    const { isModalVisible, setIsModalVisible } = props
    const [productAdded, setProductAdded] = useState(initiaProductAdded)

    const handleChangeProductName = (e) => {
        setProductAdded({
            ...productAdded,
            productName: e.target.value
        })
    }
    const handleChangeProductCode = (e) => {
        setProductAdded({
            ...productAdded,
            productCode: e.target.value
        })
    }
    const handleChangeDateCreated = (date, dateString) => {
        setProductAdded({
            ...productAdded,
            dateCreated: dateString
        })
    }
    const handleChangeTags = (e) => {
        setProductAdded({
            ...productAdded,
            tags: e
        })
    }
    const handleChangeInventory = (e) => {
        setProductAdded({
            ...productAdded,
            inventoryNumber: e.target.value
        })
    }
    const handleChangePrice = (e) => {
        setProductAdded({
            ...productAdded,
            price: e.target.value
        })
    }
    const handleOk = () => {
        dispatch(addProduct(productAdded))
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    
    return (
        <Modal
            title='Thêm Sản Phẩm'
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            destroyOnClose={true}
        >
            <Form layout="vertical">
                <Form.Item label='Tên phẩm'>
                    <Input placeholder='Nhập tên phẩm' onChange={handleChangeProductName}/>
                </Form.Item>
                <Form.Item label='Mã sản phẩm'>
                    <Input placeholder='Nhập mã sản phẩm' onChange={handleChangeProductCode}/>
                </Form.Item>
                <Form.Item label='Ảnh minh hoạ'>
                    <Upload
                        name='avatar'
                        listType='picture-card'
                    />
                </Form.Item>
                <Form.Item label='Ngày tạo'>
                    <DatePicker defaultValue={moment(new Date())} format={'YYYY/MM/DD'} onChange={(date, dateString) => handleChangeDateCreated(date, dateString)}/>
                </Form.Item>
                <Form.Item label='Chủ đề'>
                    <Select mode='multiple' placeholder='Chọn chủ đề' onChange={handleChangeTags}>
                        {dataList.data.map((data,index) => (
                            <Select.Option key={index} value={`${data.listName}`}>{data.listName}</Select.Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item label='Số lượng'>
                    <Input placeholder='Số lượng sản phẩm' onChange={handleChangeInventory}/>
                </Form.Item>
                <Form.Item label='Đơn giá'>
                    <Input placeholder='Giá sản phẩm' onChange={handleChangePrice}/>
                </Form.Item>
            </Form>
        </Modal>
    )
}