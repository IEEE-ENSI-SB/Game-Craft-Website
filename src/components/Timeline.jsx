import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoGameControllerOutline } from 'react-icons/io5';


const Timeline = () => {
  return (
    <div>
        <h1 style={{      textShadow: '2px 2px 4px  ',color:'#000', fontSize: '2.1rem', position: 'relative'}}>

Programme du jour J</h1> <br />
    <div style={{ height: '50%', backgroundcolor: 'blue' }}>
<VerticalTimeline lineColor='#000'>
  <VerticalTimelineElement
    className="vertical-timeline-element--work "
    contentStyle={{ background: 'linear-gradient(to right,blue,pink)', color: '#fff',borderRadius: '20px'}}
   /*</VerticalTimeline>contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}*/
    date="8.30"
    iconStyle={{ background: 'linear-gradient(to right,blue,pink)', color: '#fff' }}
    icon={<IoGameControllerOutline />}
  >
    <h3 className="vertical-timeline-element-title">Mot d'ouverture</h3>
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'linear-gradient(to right,blue,pink)', color: '#fff',borderRadius: '20px'}}
    //contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="9:40"
    iconStyle={{ background: 'linear-gradient(to right,blue,pink)', color: '#fff' }}
     icon={<IoGameControllerOutline />}
  >
    <h3 className="vertical-timeline-element-title">Pause café</h3>
    
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'linear-gradient(to right,blue,pink)', color: '#fff',borderRadius: '20px'}}
     date='10:00'
    iconStyle={{ background: 'linear-gradient(to right,blue,pink)', color: '#fff' }}
    icon={<IoGameControllerOutline />}
  >
    <h3 className="vertical-timeline-element-title">Workshops</h3>
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'linear-gradient(to right,blue,pink)', color: '#fff',borderRadius: '20px'}}
    date='12:15'
    iconStyle={{ background: 'linear-gradient(to right,blue,pink)', color: '#fff' }}
    icon={<IoGameControllerOutline />}
  > 
    <h3 className="vertical-timeline-element-title">Pause déjeuner </h3>
  
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: 'linear-gradient(to right,blue,pink)', color: '#fff',borderRadius: '20px'}}
    date='13.00'
    iconStyle={{ background: 'linear-gradient(to right,blue,pink)', color: '#fff' }}
    icon={<IoGameControllerOutline/>}
  >
    <h3 className="vertical-timeline-element-title">Conférence et remise des prix </h3>
    
  </VerticalTimelineElement>
 
</VerticalTimeline>
    </div>
    </div>
  )
}

export default Timeline
