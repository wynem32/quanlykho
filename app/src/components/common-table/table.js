import { Col, Row, Table } from "antd";
import './table.css'

export default function CommonTable(props) {
    const { headCells, data } = props
    return (
        <Row>
            <Col className="commonTable" xl={22}>
                <Table
                    columns={headCells}
                    dataSource={data}
                    pagination={{ 
                        position: ["bottomCenter"],
                        defaultCurrent: 1,
                        total: data.length,
                        pageSize: 5
                    }}
                />
            </Col>
        </Row>
    )
}