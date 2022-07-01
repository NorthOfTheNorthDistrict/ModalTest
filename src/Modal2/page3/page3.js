import './page3.css';
import { Table } from 'antd';

const columns = [
    {
        // 姓名
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
    },{
        // 手机号
        title: '手机号',
        dataIndex: 'phone',
        key: 'phone',
    },{
        // 性别
        title: '性别',
        dataIndex: 'sex',
        key: 'sex',
    },{
        // 民族
        title: '民族',
        dataIndex: 'nation',
        key: 'nation',
    },{
        // 证件号
        title: '证件号',
        dataIndex: 'IDnumber',
        key: 'IDnumber',
    },{
        // 地址
        title: '地址',
        dataIndex: 'address',
        key: 'address',
    },
];

const data = [
    {
        name: 'someone',
        phone: '13177812891',
        sex: '-',
        nation: '-',
        IDnumber: '身份证362502199809120619',
        address: '-',
    },
];

function Page3() {
    return (
        <div className="page3-all">
            <div className="header">
                未分配房间的入住人
            </div>
            <div className="table">
                <Table 
                columns={columns} 
                dataSource={data} 
                size='small'
                pagination={false} />
            </div>
        </div>
    )
}

export {Page3};