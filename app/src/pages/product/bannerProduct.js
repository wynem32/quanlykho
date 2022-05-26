import { useState } from 'react'
import { ExportOutlined, FileAddOutlined } from '@ant-design/icons'
import { Button, Col, Row, Typography } from 'antd'
import ModalAddProduct from './modalAddProduct';

export default function Banner() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
    };

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
                    <Button 
                        className='banner-button__add'
                        onClick={showModal}
                    >
                        <FileAddOutlined />
                        Thêm sản phẩm
                    </Button>
                </Col>
            </Col>
            <ModalAddProduct 
                isModalVisible={isModalVisible}
                setIsModalVisible={setIsModalVisible}
            />
        </Row>
    )
}
