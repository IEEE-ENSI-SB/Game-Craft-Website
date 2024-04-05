import React from 'react'
import IEEE from '../assets/IEEE/Logo.png'
import CS from '../assets/IEEE/cs.458fc04a7bb451af9c54.png'
function AboutUs() {
  return (
    <div className='h-svh w-vw' >
      <div className='flex flex-wrap mt-20 justify-around'>
        <img src={IEEE} alt='ieee' className='w-[300px] text-white bg-white m-10'/>
        <span className='w-[500px] text-lg text-white mt-[50px]'>
          Established in October 2011 by engineering students from the National School of Computer Science, our Student Branch is committed
           to global collaboration and the advancement of engineering, computer science, and information technology.
        </span>
      </div>
      <div className='flex flex-wrap mt-40 justify-around'>
        <img src={CS} alt='CS' className='w-[300px] mt-[65px] bg-white m-10 '/>
        <span className='w-[500px] h-[100px] text-lg text-white' >
          The ENSI IEEE Computer Society is a prominent chapter operating within the Ensi student branch. Its primary mission is to foster a 
          deeper appreciation for the diverse facets of computer science within the academic community. To achieve this, the chapter actively 
          engages in hosting conferences, educational initiatives, competitions, and innovative IT projects. Beyond these activities, 
          it is also dedicated to the holistic development of its members, emphasizing not only technical prowess but also the cultivation of 
          essential soft skills.
        </span>
      </div>
    </div>
  )
}

export default AboutUs