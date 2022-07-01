import 'antd/dist/antd.min.css';
import './index.css';
import { Page1 } from './page1/page1';
import { Page2 } from './page2/page2';
import { Page3 } from './page3/page3';
import { Page4 } from './page4/page4';
import { CaretDownOutlined, } from '@ant-design/icons';
import { useState } from 'react';
import { Button,
    Modal,
    Tabs, } from 'antd';

const { TabPane } = Tabs;

const Modal2 = () => {
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

    const upDate = () => {
        console.log('修改订单');
    }

    const delDate = () => {
        console.log('删除订单');
    }

    return (
        <>
        <Button type="primary" onClick={showModal}>
            Modal2
        </Button>
        <Modal
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer = {[
                <Button key='upDate'  
                onClick={upDate}
                style={{float: 'left',}}>
                修改订单</Button>,
                <Button key="delDate" 
                onClick={delDate}>
                删除订单</Button>,
                <Button 
                key="submit" 
                type="primary" 
                loading={loading}
                onClick={handleOk}
                className="modal-button">
                办理退房</Button>
            ]}
            width={"700px"}>
            {/* 头像 */}
            <div className='header-img'>自来客</div>
            {/* 基本个人信息 */}
            <div className='header-msg'>
                <span className='header-vip'>注册会员</span>
                <span className='header-someone'>someone</span>
                <span>13177812891</span>
                <span>（南昌）</span>
                <CaretDownOutlined className='header-msg-icon'/>
            </div>

            {/* 表单信息 */}
            <Tabs defaultActiveKey="1" >
                <TabPane tab="房间信息" key="tab1">
                    <Page1/>
                </TabPane>
                <TabPane tab="消费信息" key="tab2">
                    <Page2/>
                </TabPane>
                <TabPane tab="入住客人" key="tab3">
                    <Page3/>
                </TabPane>
                <TabPane tab="日志记录" key="tab4">
                    <Page4/>
                </TabPane>
            </Tabs>
        </Modal>
        </>
    );
};

export {Modal2};