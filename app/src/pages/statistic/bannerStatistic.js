import { Button, Col, Row, Typography } from 'antd'

export default function Banner(props) {
    const {setTable} = props
    return (
        <Row>
            <Col 
                xl={22} 
                className='wrapper' 
                style={{ display: 'flex',
                        justifyContent: 'space-between' }}
            >
                <Col xl={3}>
                    <Typography.Title level={2}>
                        Thống kê
                    </Typography.Title>
                </Col>
                <Col className='banner-button' xl={8}>
                    <Button className='banner-button__delete' onClick={() => setTable(1)}>
                        Danh sách nhập
                    </Button>
                    <Button className='banner-button__add' onClick={() => setTable(2)}>
                        Danh sách xuất
                    </Button>
                </Col>
            </Col>
        </Row>
    )
}
