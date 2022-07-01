import './page4.css';
import * as React from 'react';
import { Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineContent,
    TimelineOppositeContent, } from '@material-ui/lab';

function Page4() {
    return (
        <div className="page4-all">
            <div className='timelineconnector'/>
            <Timeline position="alternate">
                <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                    06-27
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <div class="timelineDot"/>
                    {/* <div className='timelineconnector'/> */}
                </TimelineSeparator>
                <TimelineContent>
                    <div className="timeline-font">
                        <div className="timeline-title">09:02:54<span  className='timeline-zhangui'>掌柜</span>通过网站</div>
                        <div>为【someone. 13177812891. 362502199809120619】 《自来客》办理入住</div>
                        <div>102. 2022-06-22入住. 住2晚, 金额378.00元: 103, 2022-06-22入住. 住2晚。金额378.00元: 房费总额￥756.00; 收款￥300.00 (06/18 16:17收款￥300支付宝)</div>
                    </div>
                </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                    06-18
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <div class="timelineDot"/>
                    {/* <div className='timelineconnector'/> */}
                </TimelineSeparator>
                <TimelineContent>
                    <div className="timeline-font">
                        <div className="timeline-title">16:17:36<span  className='timeline-zhangui'>掌柜</span>通过网站</div>
                        <div>添加收款￥300.00[支付宝]</div>
                    </div>
                </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                    {/* this is none */}
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <div class="timelineDot"/>
                    {/* <div className='timelineconnector'/> */}
                </TimelineSeparator>
                <TimelineContent>
                    <div className="timeline-font">
                        <div className="timeline-title">13:38:57<span  className='timeline-zhangui'>掌柜</span>通过网站</div>
                        <div>为【 someone. 13177812891. 362502199809120619 】 《自来客》办理预定</div>
                        <div>102. 2022-06-22入住. 住2晚, 金额378.00元: 103, 2022-06-22入住. 住2晚。金额378.00元: 房费总额￥756.00</div>
                        <div>.................................</div>
                        <div>入住人信息:</div>
                        <div>增加入住人 someone(13177812891)</div>
                    </div>
                </TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>
    )
}

export {Page4};