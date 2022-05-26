import { useState } from 'react'
import { Button, Space, Modal, Form, Input, DatePicker } from "antd";
import CommonTable from "../../components/common-table/table";
import moment from 'moment';

export default function TableList(props) {
    const headCells = [
        {
            title: 'List Name',
            dataIndex: 'listName',
            key: 'listName'
        },
        {
            title: 'List Code',
            dataIndex: 'listCode',
            key: 'listCode'
        },
        {
            title: 'Date Created',
            dataIndex: 'dateCreated',
            key: 'dateCreated'
        },
        {
            title: 'Describle',
            dataIndex: 'describle',
            key: 'describle'
        },
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: () => (
                <Space direction="vertical">
                    <Button onClick={showModal}>Update</Button>
                    <Button onClick={deleteConfirm}>Delete</Button>
                </Space>
            )   
        },
    ]

    const { data } = props
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleOk = () => {
        setIsModalVisible(false);
    };
    
    const handleCancel = () => {
    setIsModalVisible(false);
    };

    const deleteConfirm = () => {
        Modal.confirm({
            title: 'Bạn có chắc chắn muốn xoá danh mục này?',
            content: 'Sẽ không thể hoàn tác lại nếu đã xoá.',
            onOk() {
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
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
                    <Form.Item label='Tên danh mục'>
                        <Input defaultValue='ABC' />
                    </Form.Item>
                    <Form.Item label='Mã danh mục danh mục'>
                        <Input defaultValue='ABC' />
                    </Form.Item>
                    <Form.Item label='Ngày tạo'>
                        <DatePicker defaultValue={moment(new Date(), 'YYYY/MM/DD')} />
                    </Form.Item>
                    <Form.Item label='Mô tả'>
                        <Input defaultValue='ABC' />
                    </Form.Item>
                    <Form.Item label='Trạng thái'>
                        <Input defaultValue='ABC' />
                    </Form.Item>
                </Form>
            </Modal>
        </> 
    )
}