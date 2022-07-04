import 'antd/dist/antd.min.css';
import './editRoomType.css';
import { React, useState } from 'react';
import { Button, Modal, Divider, Input, Form } from 'antd';
import { CheckOutlined, PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';
// import { style } from '@mui/system';


function EditRoomType() {
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    // const [roomName, setRoomName] = useState('');

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

    const onFinish = (values) => {
        console.log('Received values of form:', values);
    };

    return (
        <>
            <Button type="primary" onClick={showModal}>
                编辑房型
            </Button>
            <Modal
            title={<span className="edit-title-font">编辑房型</span>}
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer = {[
                <Button 
                    key="cancel"
                    className="edit-btn1 edit-btn-font">
                    取消 
                </Button>,
                <Button 
                    key="submit"  
                    loading={loading}
                    onClick={handleOk}
                    className="edit-btn2 edit-btn-font">
                    确定
                </Button>]}
            width={"1000px"}>
                <div className='edit-from'>
                    <div className='from-input-group'>
                        <div className='group-title'>房型名称:</div>
                        <Input className='group1-input' size='large'/>
                    </div>
                    <Divider/>
                    <div className='from-input-group'>
                        <div className='group-title'>默认房价:</div>
                        <div className='input-group2'>
                            <div className='input-group2-1'>
                                <Input className='group2-1' size='large' defaultValue={"189.00"}/>
                                <CheckOutlined className='group2-1-icon'/>修改单日房价
                            </div>
                            <div className='input-group2-2'>
                                <div className='group2-2'>
                                    <div>周一</div>
                                    <Input size='large' defaultValue="189.00"/>
                                </div>
                                <div className='group2-2'>
                                    <div>周二</div>
                                    <Input size='large' defaultValue="189.00"/>
                                </div>
                                <div className='group2-2'>
                                    <div>周三</div>
                                    <Input size='large' defaultValue="189.00"/>
                                </div>
                                <div className='group2-2'>
                                    <div>周四</div>
                                    <Input size='large' defaultValue="189.00"/>
                                </div>
                                <div className='group2-2'>
                                    <div>周五</div>
                                    <Input size='large' defaultValue="189.00"/>
                                </div>
                                <div className='group2-2'>
                                    <div>周六</div>
                                    <Input size='large' defaultValue="189.00"/>
                                </div>
                                <div>
                                    <div>周日</div>
                                    <Input size='large' defaultValue="189.00"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Divider/>
                    <div className='from-input-group'>
                        <div className='group-title'>房间号:</div>
                        <div className='input-group3'>
                        <Form name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off" layout='inline'>
                            <Form.List name="users">
                                {(fields, { add, remove }) => (
                                <>
                                    {fields.map(({ key, name, ...restField }) => (
                                        <Form.Item
                                        {...restField}
                                        key={key}
                                        name={[name, 'last']}
                                        rules={[
                                            {
                                            required: true,
                                            message: 'Missing last name',
                                            },
                                        ]}
                                        >
                                        <Input 
                                        placeholder="请输入" 
                                        suffix={<MinusCircleOutlined onClick={() => remove(name)} style={{color: "red"}}/>}
                                        size="large"
                                        className="group3-from-input"/>
                                        </Form.Item>
                                    ))}
                                    <Form.Item key={'itemButton'}>
                                    <Button className="itemButton-button" size="large" type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                        添加房间
                                    </Button>
                                    </Form.Item>
                                </>
                                )}
                            </Form.List>
                            </Form>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}
export { EditRoomType };