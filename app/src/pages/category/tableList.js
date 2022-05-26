import { useState } from 'react'
import { Button, Space, Modal, Form, Input, DatePicker } from "antd";
import CommonTable from "../../components/common-table/table";
import moment from 'moment';
import { useDispatch  } from 'react-redux';
import { deleteCategory, updateCategory } from '../../redux/categorySlice';

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
            render: (_, record) => (
                <Space direction="vertical">
                    <Button onClick={() => showModal(record)}>Update</Button>
                    <Button onClick={() => handleDelete(record.listCode)}>Delete</Button>
                </Space>
            )   
        },
    ]

    const { data } = props
    const dispatch = useDispatch();
    const [itemEdit, setItemEdit] = useState({
        listName: '',
        oldListCode: '',
        listCode: '',
        dateCreated: moment(new Date()).format('YYYY/MM/DD'),
        describle: ''
    })
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = (record) => {
        setIsModalVisible(true);
        setItemEdit({
            listName: record.listName,
            oldListCode: record.listCode,
            listCode: record.listCode,
            dateCreated: record.dateCreated,
            describle: record.describle
        })
    };
    const handleChangeEditName = (e) => {
        setItemEdit({
            ...itemEdit,
            listName: e.target.value
        })
    }
    const handleChangeEditCode = (e) => {
        setItemEdit({
            ...itemEdit,
            listCode: e.target.value
        })
    }
    const handleChangeEditDate = (date, dateString) => {
        setItemEdit({
            ...itemEdit,
            dateCreated: dateString
        })
    }
    const handleChangeEditDescrible = (e) => {
        setItemEdit({
            ...itemEdit,
            describle: e.target.value
        })
    }
    const handleOk = () => {
        dispatch(updateCategory(itemEdit))
        setIsModalVisible(false);
    };
    
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleDelete = (listCode) => {
        Modal.confirm({
            title: 'Bạn có chắc chắn muốn xoá danh mục này?',
            content: 'Sẽ không thể hoàn tác lại nếu đã xoá.',
            onOk() {
                dispatch(deleteCategory(listCode))
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
                        <Input defaultValue={itemEdit.listName} onChange={handleChangeEditName} />
                    </Form.Item>
                    <Form.Item label='Mã danh mục danh mục'>
                        <Input defaultValue={itemEdit.listCode} onChange={handleChangeEditCode} />
                    </Form.Item>
                    <Form.Item label='Ngày tạo'>
                        <DatePicker defaultValue={moment(itemEdit.dateCreated)} format='YYYY/MM/DD' onChange={(date, dateString) => handleChangeEditDate(date, dateString)} />
                    </Form.Item>
                    <Form.Item label='Mô tả'>
                        <Input.TextArea defaultValue={itemEdit.describle} onChange={handleChangeEditDescrible} />
                    </Form.Item>
                </Form>
            </Modal>
        </> 
    )
}