import 'antd/dist/antd.min.css';
import './editRoomType.css';
import { React, useState } from 'react';
import { Button, Modal, Divider, Input } from 'antd';
import { CheckOutlined, } from '@ant-design/icons';


function EditRoomType() {
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
                                <Input className='input2-1' size='large' defaultValue={"189.00"}/>
                                <CheckOutlined className='group2-1-icon'/>修改单日房价
                            </div>
                            <div></div>
                        </div>
                    </div>
                    <Divider/>
                    <div className='from-input-group'>
                        <div className='group-title'>房间号:</div>
                    </div>
                </div>
            </Modal>
        </>
    )
}
export { EditRoomType };