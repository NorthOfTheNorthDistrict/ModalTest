import { Menu } from 'antd';
import { useState } from 'react';
import './title.css';

const items = [
    {
        label: '全日房',
        key: '1',
    },
    {
        label: '包栋',
        key: '2',
    },
    {
        label: '钟点房',
        key: '3',
    },
];

const Title = () => {
    const [current, setCurrent] = useState('1');

    const onClick = (e) => {
        // console.log('click ', e);
        if(e.key !== '0') {
            setCurrent(e.key);
        }
    };

    return (
        <div className='header'>
            <div className='header-title'>新增订单</div>
            <div className='header-menu'>
                <Menu 
                onClick={onClick} 
                selectedKeys={[current]} 
                mode="horizontal" 
                items={items}
                />
            </div>
        </div>
    )
};

export {Title};