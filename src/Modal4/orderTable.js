import React from 'react';
import moment from 'moment';
import './orderTable.css';
import 'antd/dist/antd.min.css';
import { DatePicker,
    Input,
    Select,
    Row,
    Col,
    Button,
    Divider,
    Table, } from 'antd';
import { FilterOutlined,
    SettingOutlined,
    DownloadOutlined, } from '@ant-design/icons';

const { Search } = Input;

const { Option } = Select;

const { RangePicker } = DatePicker;

const dateFormat = 'YYYY-MM-DD';

const columns = [
    {
        title: '订单号',
        dataIndex: 'id1',
        key: 'id1',
    },{
        title: '渠道订单号',
        dataIndex: 'id2',
        key: 'id2',
    },{
        title: '订单来源',
        dataIndex: 'orderSource',
        key: 'orderSource',
    },{
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
    },{
        title: '预定日期',
        dataIndex: 'pdate',
        key: 'pdate',
    },{
        title: '订单状态',
        dataIndex: 'orderStatus',
        key: 'orderStatus',
    },{
        title: '入住/退房',
        dataIndex: 'inOrOut',
        key: 'inOrOut',
    },{
        title: '间夜',
        dataIndex: 'betweenNight',
        key: 'betweenNight',
    },{
        title: '下单房间号',
        dataIndex: 'orderRoomNumber',
        key: 'orderRoomNumber',
    },{
        title: '当前房间号',
        dataIndex: 'nowRoomNumber',
        key: 'nowRoomNumber',
    },{
        title: '房型名称',
        dataIndex: 'roomType',
        key: 'roomType',
    },{
        title: '入住人数',
        dataIndex: 'numberOfGuests',
        key: 'numberOfGuests',
    },{
        title: '入住人',
        dataIndex: 'occupants',
        key: 'occupants',
    },{
        title: '房费',
        dataIndex: 'rate',
        key: 'rate',
    },{
        title: '其他消费',
        dataIndex: 'otherRate',
        key: 'otherRate',
    },{
        title: '操作',
        dataIndex: 'operator',
        key: 'operator',
        fixed: 'right',
    },
];

const data = [];

const onSearch = (value) => {
    console.log(value);
}

function OrderTable() {
    return (
        <div className="page-all">
            {/* 筛选 */}
            <div className="page-select">
                <div className="select-left">
                    <Row gutter={8}>
                        <Col key={"col1"}>
                            <Input.Group compact>
                                <Select defaultValue="住店日期" >
                                    <Option value="col1-1">住店日期</Option>
                                    <Option value="col1-2">入店日期</Option>
                                </Select>
                                <RangePicker 
                                    separator={"~"}
                                    defaultValue={[moment('2022/07/01', dateFormat), moment('2022/07/01', dateFormat)]}
                                    format={dateFormat}
                                />
                            </Input.Group>
                        </Col>
                        <Col key={"col2"}>
                            <Select 
                            placeholder={"选择渠道"}
                            style={{
                                width: 120,
                            }}
                            allowClear
                            >
                                <Option value="col2-1"><div className='select-col2'><div className='col2-icon'>1</div>渠道</div></Option>
                                <Option value="col2-2"><div className='select-col2'><div className='col2-icon'>2</div>渠道</div></Option>
                            </Select>
                        </Col>
                        <Col key={"col3"}>
                            <Select 
                            placeholder={"选择房间"}
                            style={{
                                width: 120,
                            }}
                            allowClear
                            suffixIcon={<FilterOutlined />}
                            >
                                <Option value="col3-1">101</Option>
                                <Option value="col3-2">102</Option>
                            </Select>
                        </Col>
                        <Col key={"col4"}>
                            <Select 
                            placeholder={"选择类型"}
                            style={{
                                width: 120,
                            }}
                            allowClear
                            suffixIcon={<FilterOutlined />}
                            >
                                <Option value="col4-1">type1</Option>
                                <Option value="col4-2">type2</Option>
                            </Select>
                        </Col>
                        <Col key={"col5"}>
                            <Select 
                            placeholder={"选择订单状态"}
                            style={{
                                width: 140,
                            }}
                            allowClear
                            suffixIcon={<FilterOutlined />}
                            >
                                <Option value="col5-1">状态1</Option>
                                <Option value="col5-2">状态2</Option>
                            </Select>
                        </Col>
                        <Col key={"col6"}>
                            <Select 
                            placeholder={"选择押金状态"}
                            style={{
                                width: 140,
                            }}
                            allowClear
                            suffixIcon={<FilterOutlined />}
                            >
                                <Option value="col6-1">押金状态1</Option>
                                <Option value="col6-2">押金状态2</Option>
                            </Select>
                        </Col>
                        <Col key={"col7"}>
                            <Search
                            placeholder="客户姓名/手机号/房间号/订单号"
                            onSearch={onSearch}
                            style={{
                                width: 260,
                            }}
                            />
                        </Col>
                    </Row>
                </div>
                <div className="select-right">
                    <Row gutter={8}>
                        <Col key={"col8"}><Button type="text" className="col8-btn1"><DownloadOutlined />下载数据</Button></Col>
                        <Col key={"col9"}><Button type="text" className="col8-btn2"><SettingOutlined />表格设置</Button></Col>
                    </Row>
                </div>
            </div>
            {/* 信息汇总 */}
            <div className="page-msg">
                共有<span className='page-msg-span'>0</span>个有效订单&nbsp;(
                <span className='page-msg-span'>0</span>间夜，当日住当日退
                <span className='page-msg-span'>0</span>间，钟点房
                <span className='page-msg-span'>0</span>间)<Divider type="vertical" />
                预计客房营收￥0.00（房费营收￥0.00，其他消费￥0.00）
                <span className='page-msg-span'>查看明细</span>
            </div>
            {/* 表格 */}
            <div className='page-table'>
                <Table columns={columns} dataSource={data}/>
            </div>
        </div>
    )
}
export { OrderTable };