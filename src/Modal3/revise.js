import 'antd/dist/antd.min.css';
import './revise.css';
import { useState } from 'react';
import { Button,
    Modal, 
    Input, 
    Row, 
    Col,
    Select,
    Divider,
    Form,
    DatePicker, } from 'antd';
import { IdcardOutlined,
    MinusCircleOutlined,
    PlusOutlined, } from '@ant-design/icons';

const { Option } = Select;
const { TextArea } = Input;

const selectBefore = (
    <Select defaultValue="居民身份证">
        <Option value="居民身份证">居民身份证</Option>
        <Option value="临时身份证">临时身份证</Option>
    </Select>
)

function Revise() {
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
                Modal3
            </Button>
            <Modal
            title={"修改"}
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer = {
                <Button 
                    key="submit" 
                    type="primary" 
                    loading={loading}
                    onClick={handleOk}
                    className="revise-button">
                    确认修改 
                </Button>}
            width={"700px"}>
                <div className='revise-from'>
                    <div className='from-first'>
                        <div className='input-group'>
                        <Input.Group size="middle">
                            <Row gutter={8}>
                                <Col span={7}>
                                    <Input addonBefore="姓名"  value="someone"/>
                                </Col>
                                <Col span={7}>
                                    <Input addonBefore="手机号"  value="13354854856"/>
                                </Col>
                                <Col span={9}>
                                    <Input 
                                    addonBefore="订单来源" 
                                    prefix={<div className='input-group1-icon'/>} 
                                    value="自来客"/>
                                </Col>
                            </Row>
                        </Input.Group>
                        </div>
                        <div className='input-group'>
                            <Input.Group size="middle">
                                <Row gutter={8}>
                                    <Col span={12}>
                                        <Input addonBefore={selectBefore} value="362502199809120619"/>
                                    </Col>
                                    <Col>
                                        <IdcardOutlined className='input-group2-icon'/>
                                    </Col>
                                    <Col span={10}>
                                        <Input addonBefore="渠道订单号" />
                                    </Col>
                                </Row>
                            </Input.Group>
                        </div>
                    </div>
                    <Divider/>
                    <div className='from-second'>
                        <div className='fixed-msg'>
                            <div>房费&nbsp;￥756.00</div>
                            <div>商品&nbsp;<span className="modal3-p-font2">￥0</span></div>
                        </div>
                        <div>
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
                                                    placeholder="日期"
                                                />
                                                <Select placeholder="入住房间" style={{width: '20%',}}>
                                                    <Option value="101">101</Option>
                                                    <Option value="102">102</Option>
                                                </Select>
                                                <Select placeholder="时长" style={{width: '12%',}}>
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
                                            <Button type="text" className='add-fromitem' onClick={() => add()} icon={<PlusOutlined />}>
                                                新增入住
                                            </Button>
                                        </Form.Item>
                                    </>
                                    )}
                                </Form.List>
                            </Form>
                        </div>
                        <div>    
                            <p className='modal3-p'>
                                <span className="modal3-p-font1">收银记录&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                已收款<span className="modal3-p-font2">￥213.00&nbsp;</span>
                                已收押金<span className="modal3-p-font2">￥231.00&nbsp;</span>
                                待收款<span className="modal3-p-font2">￥0.00&nbsp;</span>
                            </p>
                        </div>
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
                                    <Form.Item key={'pay-1'}>
                                        <Input.Group>
                                            <Button className='add-pay' type="text" onClick={() => add()} icon={<PlusOutlined />}>
                                                新增付款方式
                                            </Button>
                                        </Input.Group>
                                    </Form.Item>
                                </>
                                )}
                            </Form.List>
                        </Form>
                        <div ><TextArea rows={4} placeholder="备注信息" maxLength={200} /></div>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export {Revise};