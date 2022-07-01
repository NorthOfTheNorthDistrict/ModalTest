import 'antd/dist/antd.min.css';
import { ClockCircleOutlined,
    IdcardOutlined,
    MinusCircleOutlined,
    PlusOutlined,
    FilterOutlined,
    PayCircleOutlined, } from '@ant-design/icons';
import { useState } from 'react';
import { Title } from './title';
import './orders.css'
import { Button,
    Modal, 
    Input, 
    Row, 
    Col,
    Select,
    Divider,
    Form,
    DatePicker, } from 'antd';

const { Option } = Select;
const { TextArea } = Input;

const selectBefore = (
    <Select defaultValue="居民身份证">
        <Option value="居民身份证">居民身份证</Option>
        <Option value="临时身份证">临时身份证</Option>
    </Select>
)

const Orders = () => {
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    // const [price, setPrice] = useState(198);

    const showModal = () => {
        setVisible(true);
    };

    const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
        setVisible(false);
        setLoading(false);
        }, 2000);
    };

    const handleCancel = () => {
        // console.log('Clicked cancel button');
        setVisible(false);
    };

    return (
        <>
        <Button type="primary" onClick={showModal}>
            Modal1
        </Button>
        <Modal
            title={[<div className='modal-title'><Title/></div>]}
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer = {
                <Button 
                    key="submit" 
                    type="primary" 
                    loading={loading}
                    onClick={handleOk}
                    className="modal-button">
                    提交订单 
                </Button>}
            width={"800px"}>
            <div className="modal-form">
                <div className="modal-from-price">房费:&nbsp;<PayCircleOutlined />&nbsp;198</div>
                {/* 基本信息 */}
                <Input.Group size="middle">
                    <Row gutter={8}>
                        <Col span={7}>
                            <Input addonBefore="姓名"/>
                        </Col>
                        <Col span={7}>
                            <Input addonBefore="手机号"/>
                        </Col>
                        <Col span={8}>
                            <Input 
                            addonBefore="订单来源" 
                            prefix={<ClockCircleOutlined />} 
                            value="自来客"/>
                        </Col>
                    </Row>
                </Input.Group>
                <br/>
                <Input.Group size="middle">
                        <Row gutter={8}>
                            <Col span={12}>
                                <Input addonBefore={selectBefore}/>
                            </Col>
                            <Col>
                                <IdcardOutlined className='input-icon'/>
                            </Col>
                            <Col span={9}>
                                <Input addonBefore="渠道订单号" />
                            </Col>
                        </Row>
                </Input.Group>
                <Divider />
                {/* 新增入住 */}
                <Form autoComplete="off">
                    <Form.List name="users">
                        {(fields, { add, remove }) => (
                        <>
                            {fields.map(({name, key}) => (
                                <Form.Item key={key}>
                                <Input.Group compact>
                                    <DatePicker
                                        style={{
                                        width: '15%',
                                        }}
                                        placeholder="入住日期"
                                    />
                                    <Select placeholder="入住房间" style={{width: '15%',}}>
                                        <Option value="101">101</Option>
                                        <Option value="102">102</Option>
                                    </Select>
                                    <Select placeholder="时间长度" style={{width: '15%',}}>
                                        <Option value="1晚">1晚</Option>
                                        <Option value="2晚">2晚</Option>
                                    </Select>
                                    <Input 
                                        style={{width: '15%',}} 
                                        placeholder="入住费"
                                        />
                                    <Input style={{width: '15%',}} placeholder="入住人"/>
                                    <Button type="text" 
                                        className="from-delete-button"
                                        onClick={() => remove(name)}
                                        icon={<MinusCircleOutlined />}>
                                    </Button>
                                </Input.Group>
                                </Form.Item>
                            ))}
                            <Form.Item key={'2'}>
                            <Input.Group compact>
                                    <DatePicker
                                        style={{
                                        width: '15%',
                                        }}
                                        placeholder="入住日期"
                                    />
                                    <Select placeholder="入住房间" style={{width: '15%',}}>
                                        <Option value="101">101</Option>
                                        <Option value="102">102</Option>
                                    </Select>
                                    <Select placeholder="时间长度" style={{width: '15%',}}>
                                        <Option value="1晚">1晚</Option>
                                        <Option value="2晚">2晚</Option>
                                    </Select>
                                    <Input style={{width: '15%',}} placeholder="入住费"/>
                                    <Input style={{width: '15%',}} placeholder="入住人" suffix={<FilterOutlined />}/>
                                    <Button type="text" onClick={() => add()} icon={<PlusOutlined />}>
                                    </Button>
                                </Input.Group>
                            </Form.Item>
                        </>
                        )}
                    </Form.List>
                </Form>
                <p className='modal-p'>
                    <span className="modal-p-font1">收银记录&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    已收款&nbsp;<span className="modal-p-font2"><PayCircleOutlined />&nbsp;213&nbsp;</span>
                    已收押金&nbsp;<span className="modal-p-font2"><PayCircleOutlined />&nbsp;231&nbsp;</span>
                    待收款&nbsp;<span className="modal-p-font2"><PayCircleOutlined />&nbsp;123&nbsp;</span>
                </p>
                {/* 新增付/收款 */}
                <Form autoComplete="off">
                    <Form.List name="users">
                        {(fields, { add, remove }) => (
                        <>
                            {fields.map(({name, key}) => (
                                <Form.Item key={key}>
                                <Input.Group compact>
                                    <Select defaultValue={"收款"} style={{width: '15%',}}>
                                        <Option value="收款">收款</Option>
                                        <Option value="退款">退款</Option>
                                    </Select>
                                    <Input style={{width: '15%',}} />
                                    <Select placeholder="支付方式" style={{width: '15%',}}>
                                        <Option value="银行卡">银行卡</Option>
                                        <Option value="支付宝">支付宝</Option>
                                        <Option value="微信">微信</Option>
                                    </Select>
                                    <Button type="text" 
                                        className="from-delete-button"
                                        onClick={() => remove(name)}
                                        icon={<MinusCircleOutlined />}>
                                    </Button>
                                </Input.Group>
                                </Form.Item>
                            ))}
                            <Form.Item key={'1'}>
                                <Input.Group compact>
                                    <Select placeholder="收款" style={{width: '15%',}}>
                                        <Option value="收款">收款</Option>
                                        <Option value="退款">退款</Option>
                                    </Select>
                                    <Input style={{width: '15%',}} />
                                    <Select placeholder="支付方式" style={{width: '15%',}}>
                                        <Option value="银行卡">银行卡</Option>
                                        <Option value="支付宝">支付宝</Option>
                                        <Option value="微信">微信</Option>
                                    </Select>
                                    <Button type="text" onClick={() => add()} icon={<PlusOutlined />}>
                                    </Button>
                                </Input.Group>
                            </Form.Item>
                        </>
                        )}
                    </Form.List>
                </Form>
                <div style={{width: '99%',height: '100px',}}><TextArea rows={4} placeholder="备注信息" maxLength={200} /></div>
            </div>
        </Modal>
        </>
    );
};

export {Orders};