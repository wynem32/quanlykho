import { Col, DatePicker, Form, Input, Row, Select, Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import moment from 'moment'

export default function FilterStaff() {
    return (
        <Row>
            <Col className='wrapper' xl={22}>
                <Form className='filter-list' layout='vertical'>
                    <Col className='filter-list__search' xl={5}>
                        <Form.Item label='Tìm kiếm nhân viên'>
                            <Input placeholder='Nhập mã/tên nhân viên' suffix={<SearchOutlined />} />
                        </Form.Item>
                    </Col>
                    <Col className='filter-list__search' xl={6}>
                        <Form.Item label='Lọc theo ngày gia nhập'>
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