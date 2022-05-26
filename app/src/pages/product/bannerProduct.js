import { ExportOutlined, FileAddOutlined } from '@ant-design/icons'
import { Button, Col, Row, Typography } from 'antd'

export default function Banner() {
    return (
        <Row>
            <Col 
                xl={22} 
                className='wrapper' 
                style={{ display: 'flex',
                        justifyContent: 'space-between' }}
            >
                <Col xl={6}>
                    <Typography.Title level={2}>
                        Quản lý sản phẩm
                    </Typography.Title>
                </Col>
                <Col className='banner-button' xl={8}>
                    <Button className='banner-button__delete'>
                        <ExportOutlined />
                        Xuất danh sách
                    </Button>
                    <Button className='banner-button__add'>
                        <FileAddOutlined />
                        Thêm sản phẩm
                    </Button>
                </Col>
            </Col>
        </Row>
    )
}
