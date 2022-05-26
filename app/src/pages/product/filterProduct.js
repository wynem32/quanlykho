import { Button, Col, DatePicker, Form, Input, Row, Select } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import moment from 'moment'

export default function FilterProduct(props) {
    const { dataList } = props
    return (
        <Row>
            <Col className='wrapper' xl={22}>
                <Form className='filter-list' layout='vertical'>
                    <Col className='filter-list__search' xl={5}>
                        <Form.Item label='Tìm kiếm sản phẩm'>
                            <Input placeholder='Nhập mã/tên sản phẩm' suffix={<SearchOutlined />} />
                        </Form.Item>
                    </Col>
                    <Col className='filter-list__search' xl={5}>
                        <Form.Item label='Lọc theo chủ đề'>
                            <Select mode='multiple' placeholder='Chọn chủ đề'>
                                {dataList.map((data,index) => (
                                    <Select.Option key={index} value={`${data.listName}`}>{data.listName}</Select.Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col className='filter-list__search' xl={5}>
                        <Form.Item label='Lọc theo thời gian'>
                            <Select placeholder='Chọn thời gian'>
                                <Select.Option value='Hôm qua'>Hôm qua</Select.Option>
                                <Select.Option value='Trong tuần'>Trong tuần</Select.Option>
                                <Select.Option value='Trong tháng'>Trong tháng</Select.Option>
                                <Select.Option>
                                    <DatePicker.RangePicker 
                                        defaultValue={[moment(new Date(), 'YYYY/MM/DD'), moment(new Date(), 'YYYY/MM/DD')]}
                                    />
                                </Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col className='filter-list__search' xl={1}>
                        <Form.Item label='abc'>
                            <Button>
                                Search
                            </Button>
                        </Form.Item>
                    </Col>
                </Form>
            </Col>
        </Row>
    )
}