import './page1.css';
import  { Divider, } from 'antd';
import { CarryOutOutlined,
    PayCircleOutlined,
    TagOutlined, } from '@ant-design/icons';

const date = [
    {
        key: 1,
        name: '102(大床房)',
        date: '06-22 ~ 06-24(共2晚)',
        active: '已入住',
        cost: '378.00',
    },{
        Key: 2,
        name: '103(大床房)',
        date: '06-22 ~ 06-24(共2晚)',
        active: '已入住',
        cost: '378.00',
    },
];

function Page1() {
    return (
        <div className="page1-all">
            <div className="page">
                {/* 表单 */}
                {date.map((item)=>
                    <div key={item.key} className='page-item'>
                        <div className='item-left'>
                            <div className='item-left-name'>
                                <span className='item-left-active'>{item.active}</span>
                                &nbsp;&nbsp;{item.name}
                            </div>
                            <div>
                                <CarryOutOutlined />
                                &nbsp;&nbsp;{item.date}
                            </div>
                        </div>
                        <div className='item-right'>
                            <div>
                            房费：￥
                            <span className='item-right-cost'>{item.cost}</span>
                            </div>
                        </div>
                    </div>
                )}
                {/* 分割线 */}
                <Divider plain><span style={{color: '#00c3a4',}}>共2间房</span></Divider>
                {/* 标签以及费用 */}
                <div className="page-lable">
                    <TagOutlined style={{margin: "4px 0 0 0",}}/>&nbsp;&nbsp;标签
                    <div className="page-lable-msg">
                        <div className="page-lable-msgicon">全</div>
                        &nbsp;&nbsp;全日房
                    </div>
                </div>
                <div className="page-cost">
                    <PayCircleOutlined style={{margin: "4px 0 0 0",}}/>&nbsp;&nbsp;费用 
                    <div className="page-cost-msg">
                        <div className="page-cost-msg-row">
                            <div>房费:&nbsp;&nbsp;￥756.00</div>
                            <div>其它:&nbsp;&nbsp;￥0.00</div>
                            <div>商品:&nbsp;&nbsp;￥0.00</div>
                        </div>
                        <div className="page-cost-msg-row">
                            <div>已收款:&nbsp;&nbsp;￥300.00</div>
                            <div>已收押金:&nbsp;&nbsp;￥0.00</div>
                            <div>已退押金:&nbsp;&nbsp;￥0.00</div>
                            <div style={{color: "red"}}>待收款:&nbsp;&nbsp;￥456.00</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 系统订单号以及创建时间 */}
            <div className="footer">系统订单号: 104547234 &nbsp;&nbsp;&nbsp;创建时间: 2022-06-18 13:38:56</div>
        </div>
    );
}

export {Page1};
