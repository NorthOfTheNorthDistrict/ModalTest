import './page2.css';
import 'antd/dist/antd.min.css';
import { PayCircleOutlined, } from '@ant-design/icons';
import { Divider,Table } from 'antd';

const columns = [
    {
        // 收支类型
        title: '收支类型',
        dataIndex: 'name',
        key: 'name',
    },{
        // 金额
        title: '金额',
        dataIndex: 'amount',
        key: 'amount',
        render: (text) => <span>￥{text}</span>,
    },{
        // 支付/退款方式
        title: '支付/退款方式',
        dataIndex: 'type',
        key: 'type',
    },{
        // 操作类型
        title: '操作类型',
        dataIndex: 'operator',
        key: 'operator',
    },{
        // 时间
        title: '时间',
        dataIndex: 'date',
        key: 'date',
    },
];

const data = [
    {
        name:'收款',
        amount: '300.00',
        type: '支付宝',
        operator: '修改订单',
        date: '2022-06-18 16:17',
    },
];

function Page2() {
    return (
        <div className="page2-all">
            <div className='page-msg'>
                <div className='page-msg-left'>
                    <PayCircleOutlined />&nbsp;&nbsp;收支明细
                </div>
                <div className="page-msg-right">
                    <div>已收款:￥300.00&nbsp;(收款:￥300.00元，退款:￥0.00)</div>
                    <Divider type="vertical" style={{height: '22px',}}/>
                    <div>已收押金:￥0.00</div>
                    <Divider type="vertical" style={{height: '22px',}}/>
                    <div>已退押金:￥0.00</div>
                </div>
            </div>
            <div className='page-table'>
                <Table 
                columns={columns} 
                dataSource={data}
                pagination={false}
                size="small" />
            </div>
        </div>
    )
}

export {Page2};