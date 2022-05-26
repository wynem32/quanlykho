import { useState } from 'react';
import { DatePicker, Form, Input, Modal, Select } from "antd";
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { addStaff } from '../../redux/staffSlice';
const initiaStaffAdd = {
    staffName: '',
    staffCode: '',
    position: 'nhân viên',
    dateJoining: moment(new Date()).format('YYYY/MM/DD'),
}
export default function ModalAddStaff(props) {
    const dispatch = useDispatch()
    const { isModalVisible, setIsModalVisible } = props
    const [staffAdded, setStaffAdded] = useState(initiaStaffAdd)

    const handleChangeStaffName = (e) => {
        setStaffAdded({
            ...staffAdded,
            staffName: e.target.value
        })
    }
    const handleChangeStaffCode = (e) => {
        setStaffAdded({
            ...staffAdded,
            staffCode: e.target.value
        })
    }
    const handleChangePosition = (e) => {
        setStaffAdded({
            ...staffAdded,
            position: e
        })
    }
    const handleChangeDateJoining = (date, dateString) => {
        setStaffAdded({
            ...staffAdded,
            dateJoining: dateString
        })
    }
    const handleOk = () => {
        dispatch(addStaff(staffAdded))
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    
    return (
        <Modal
            title='Thêm nhân viên'
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            destroyOnClose={true}
        >
            <Form layout="vertical">
                <Form.Item label='Tên nhân viên'>
                    <Input placeholder='Nhập tên nhân viên' onChange={handleChangeStaffName}/>
                </Form.Item>
                <Form.Item label='Mã nhân viên'>
                    <Input placeholder='Nhập mã nhân viên' onChange={handleChangeStaffCode}/>
                </Form.Item>
                <Form.Item label='Vị trí'>
                    <Select defaultValue={staffAdded.position} onChange={handleChangePosition}>
                        <Select.Option value='nhân viên'>Nhân viên</Select.Option>
                        <Select.Option value='quản lý'>Quản lý</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label='Ngày gia nhập'>
                    <DatePicker defaultValue={moment(new Date())} format={'YYYY/MM/DD'} onChange={(date, dateString) => handleChangeDateJoining(date, dateString)}/>
                </Form.Item>
            </Form>
        </Modal>
    )
}