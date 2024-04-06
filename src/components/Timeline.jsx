import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoGameControllerOutline } from 'react-icons/io5';
import style from '../style';

const Timeline = () => {
  return (
    <div>
        <h1 className={` flex justify-center text-white text-2xl font-stalinist mx-4 pt-2 ${style.heading2} text-gradient`}>

Programme</h1> <br />
    <div style={{ height: '50%', backgroundcolor: 'blue' }}>
<VerticalTimeline lineColor='#000'>
  <VerticalTimelineElement
    className={`vertical-timeline-element--work ${style.paragraph} bg-[]`}
    contentStyle={{ background: 'linear-gradient(to right,indigo,pink)', color: '#fff',borderRadius: '20px'}}
   /*</VerticalTimeline>contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}*/
    date="8.30"
    iconStyle={{ background: 'linear-gradient(to right,indigo,pink)', color: '#fff' }}
    icon={<IoGameControllerOutline />}
  >
    <h3 className="vertical-timeline-element-title">Mot d'ouverture</h3>
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className={`vertical-timeline-element--work ${style.paragraph} `}
    contentStyle={{ background: 'linear-gradient(to right,indigo,pink)', color: '#fff',borderRadius: '20px'}}
    //contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="9:40"
    iconStyle={{ background: 'linear-gradient(to right,indigo,pink)', color: '#fff' }}
     icon={<IoGameControllerOutline />}
  >
    <h3 className="vertical-timeline-element-title">Pause café</h3>
    
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className={`vertical-timeline-element--work ${style.paragraph} `}
    contentStyle={{ background: 'linear-gradient(to right,indigo,pink)', color: '#fff',borderRadius: '20px'}}
     date='10:00'
    iconStyle={{ background: 'linear-gradient(to right,indigo,pink)', color: '#fff' }}
    icon={<IoGameControllerOutline />}
  >
    <h3 className="vertical-timeline-element-title">Workshops</h3>
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className={`vertical-timeline-element--work ${style.paragraph} `}
    contentStyle={{ background: 'linear-gradient(to right,indigo,pink)', color: '#fff',borderRadius: '20px'}}
    date='12:15'
    iconStyle={{ background: 'linear-gradient(to right,indigo,pink)', color: '#fff' }}
    icon={<IoGameControllerOutline />}
  > 
    <h3 className="vertical-timeline-element-title">Pause déjeuner </h3>
  
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className={`vertical-timeline-element--work ${style.paragraph} `}
    contentStyle={{ background: 'linear-gradient(to right,indigo,pink)', color: '#fff',borderRadius: '20px'}}
    date='13.00'
    iconStyle={{ background: 'linear-gradient(to right,indigo,pink)', color: '#fff' }}
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
