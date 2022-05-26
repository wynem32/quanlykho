import { useState } from 'react';
import { DatePicker, Form, Input, Modal } from "antd";
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { addCategory } from '../../redux/categorySlice'
const initiaItemsAdd = {
    listName: '',
    listCode: '',
    dateCreated: moment(new Date()).format('YYYY/MM/DD'),
    describe: ''
}
export default function ModalAddItem(props) {
    const dispatch = useDispatch()
    const { isModalVisible, setIsModalVisible } = props
    const [itemsAdded, setItemsAdded] = useState(initiaItemsAdd)
    console.log(itemsAdded)

    const handleChangeListName = (e) => {
        setItemsAdded({
            ...itemsAdded,
            listName: e.target.value
        })
    }
    const handleChangeListCode = (e) => {
        setItemsAdded({
            ...itemsAdded,
            listCode: e.target.value
        })
    }
    const handleChangeDateCreated = (date, dateString) => {
        setItemsAdded({
            ...itemsAdded,
            dateCreated: dateString
        })
    }
    const handleChangeDescrible = (e) => {
        setItemsAdded({
            ...itemsAdded,
            describle: e.target.value
        })
    }
    const handleOk = () => {
        dispatch(addCategory(itemsAdded))
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    
    return (
        <Modal
            title='Thêm danh mục'
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            destroyOnClose={true}
        >
            <Form layout="vertical">
                <Form.Item label='Tên danh mục'>
                    <Input placeholder='Nhập tên danh mục' onChange={handleChangeListName}/>
                </Form.Item>
                <Form.Item label='Mã danh mục'>
                    <Input placeholder='Nhập mã danh mục' onChange={handleChangeListCode}/>
                </Form.Item>
                <Form.Item label='Ngày tạo'>
                    <DatePicker defaultValue={moment(new Date())} format={'YYYY/MM/DD'} onChange={(date, dateString) => handleChangeDateCreated(date, dateString)}/>
                </Form.Item>
                <Form.Item label='Mô tả'>
                    <Input.TextArea cols={4} onChange={handleChangeDescrible} />
                </Form.Item>
            </Form>
        </Modal>
    )
}