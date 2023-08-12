import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Main() {
    return (
        <main className="about-main">
            <div className="container">
                <div className="container-main-title">
                    <h1 className="main-title decorated">History of Breaking Waves</h1>
                </div>
                <VerticalTimeline lineColor="#000">
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work vertical-none">
                    </VerticalTimelineElement>
                    <VerticalTimelineElement className="vertical-timeline-element--work" 
                    contentStyle={ {display:'flex', flexDirection:'column', alignItems:'center'} } 
                    >
                    <h2 className="vertical-timeline-element-title history-title">2015</h2>
                        <p className="history-text">Breaking Waves is founded by a group of passionate individuals with a love for urban culture, skateboarding, and surfing. They aim to create a clothing brand that embodies the spirit of these activities and resonates with the youth. With a small team and limited resources, they begin designing and producing their first collection of urban clothing.</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement className="vertical-timeline-element--work"
                    contentStyle={ {display:'flex', flexDirection:'column', alignItems:'center'} }
                    iconStyle={{display:'none'}}
                    >
                        <div className="history-img--container">
                            <img className="history-img history-decorated" src={require("../../assets/images/about-history1.png")} alt="" />
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement className="vertical-timeline-element--work"
                    contentStyle={{ display:'flex', flexDirection:'column', alignItems:'center', paddingTop:'0'}}
                    >
                        <h2 className="vertical-timeline-element-title history-title">2018</h2>
                        <p className="history-text">The brand gains momentum within the skate and surf community, captivating enthusiasts with its distinctive style and commitment to quality. Collaborating with local athletes, Breaking Waves sponsors events and competitions, fostering a sense of camaraderie and support within the scene. Their urban clothing becomes a sought-after choice for those seeking an edgy and fashionable look.</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement className="vertical-timeline-element--education"
                    contentStyle={ {display:'flex', flexDirection:'column', alignItems:'center'} }
                    >
                        <h2 className="vertical-timeline-element-title history-title text-end">2021</h2>
                        <p className="history-text text-end">Breaking Waves sets a new standard in the industry with the launch of an innovative collection of skate and surf apparel. Embracing sustainability, the brand incorporates eco-friendly materials and production methods into their designs, resonating with environmentally conscious consumers. Expanding their reach globally, Breaking Waves opens flagship stores in major cities and establishes an online platform, becoming a symbol of urban fashion and adventure worldwide.</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement className="vertical-timeline-element--education" 
                    contentStyle={ {display:'flex', flexDirection:'column', alignItems:'center'} }
                    iconStyle={{display:'none'}}
                    >
                    <div className="history-img--container">
                        <img className="history-img history-decorated" src={require("../../assets/images/about-history2.png")} alt="" />
                    </div>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </main>
    )
}