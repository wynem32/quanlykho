import { useState } from 'react'
import CommonTable from '../../components/common-table/table'
import { Space, Button, Modal, DatePicker, Form, Input, Select } from 'antd'
import { deleteStaff, updateStaff } from '../../redux/staffSlice';
import { useDispatch } from 'react-redux';
import moment from 'moment';

export default function TableStaff(props) {
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
            render: (_, record) => (
                <Space direction="vertical">
                    <Button onClick={() => showModal(record)}>Update</Button>
                    <Button onClick={() => handleDelete(record.staffCode)}>Delete</Button>
                </Space>
            )   
        },
    ]
    const { data } = props
    const dispatch = useDispatch()
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [StaffEdit, setStaffEdit] = useState({
        staffName: '',
        oldstaffCode: '',
        staffCode: '',
        position: '',
        dateJoining: moment(new Date()).format('YYYY/MM/DD'),
    })
    const handleDelete = (staffCode) => {
        Modal.confirm({
            title: 'Bạn có chắc chắn muốn xoá danh mục này?',
            content: 'Sẽ không thể hoàn tác lại nếu đã xoá.',
            onOk() {
                dispatch(deleteStaff(staffCode))
            },
            onCancel() {
                console.log('Cancel');
            },
        })
    }
    const showModal = (record) => {
        setIsModalVisible(true);
        setStaffEdit({
            staffName: record.staffName,
            oldstaffCode: record.staffCode,
            staffCode: record.staffCode,
            position: record.position,
            dateJoining: record.dateJoining
        })
    }
    const handleEditStaffName = (e) => {
        setStaffEdit({
            ...StaffEdit,
            staffName: e.target.value
        })
    }
    const handleEditStaffCode = (e) => {
        setStaffEdit({
            ...StaffEdit,
            staffCode: e.target.value
        })
    }
    const handleEditPosition = (e) => {
        setStaffEdit({
            ...StaffEdit,
            position: e
        })
    }
    const handleEditDate = (date, dateString) => {
        setStaffEdit({
            ...StaffEdit,
            dateJoining: dateString
        })
    }
    const handleOk = () => {
        dispatch(updateStaff(StaffEdit))
        setIsModalVisible(false);
    };
    
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <>
            <CommonTable
                headCells={headCells}
                data={data}
            />
            <Modal 
                title="Update Modal"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <Form layout='vertical'>
                    <Form.Item label='Tên nhân viên'>
                        <Input defaultValue={StaffEdit.staffName} onChange={handleEditStaffName} />
                    </Form.Item>
                    <Form.Item label='Mã nhân viên'>
                        <Input defaultValue={StaffEdit.staffCode} onChange={handleEditStaffCode} />
                    </Form.Item>
                    <Form.Item label='Vị trí'>
                    <Select defaultValue={StaffEdit.position} onChange={handleEditPosition}>
                        <Select.Option value='nhân viên'>Nhân viên</Select.Option>
                        <Select.Option value='quản lý'>Quản lý</Select.Option>
                    </Select>
                    </Form.Item>
                    <Form.Item label='Ngày gia nhập'>
                        <DatePicker defaultValue={moment(StaffEdit.dateJoining)} format='YYYY/MM/DD' onChange={(date, dateString) => handleEditDate(date, dateString)} />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}