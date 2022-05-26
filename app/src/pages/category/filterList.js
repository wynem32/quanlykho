import { Button, Col, DatePicker, Form, Input, Row, Select } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import moment from 'moment'
import './index.css'

export default function FilterList() {
    const handleSubmit = (e) => {
        console.log('oke')
    }

    return (
        <Row>
            <Col className='wrapper' xl={22}>
                <Form className='filter-list' layout='vertical' onFinish={handleSubmit}>
                    <Col className='filter-list__search' xl={5}>
                        <Form.Item label='Tìm kiếm danh mục'>
                            <Input placeholder='Nhập mã/ danh mục' suffix={<SearchOutlined />} />
                        </Form.Item>
                    </Col>
                    <Col className='filter-list__search' xl={5}>
                        <Form.Item label='Lọc theo thời gian'>
                            <Select placeholder='Chọn thời gian'>
                                <Select.Option>
                                    <DatePicker.RangePicker 
                                        defaultValue={[moment(new Date(), 'YYYY/MM/DD'), moment(new Date(), 'YYYY/MM/DD')]}
                                    />
                                </Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col className='filter-list__search' xl={3}>
                        <Form.Item label=''>
                            <Button type='primary' htmlType='submit'>
                                Search
                            </Button>
                        </Form.Item>
                    </Col>
                </Form>
            </Col>
        </Row>
    )
}