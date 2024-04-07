import React from 'react'
import IEEE from '../assets/IEEE/Logo.png'
import CS from '../assets/IEEE/cswhite.png'
import bg from '../assets/background/cool-geometric-triangular-figure-neon-laser-light-great-backgrounds-wallpapers_181624-9331.jpg'
function AboutUs() {
  return (
    <div className='min-h-screen w-vw md:min-h-[100vh] sm:min-h-[150vh] ss:min-h-[1100px] xs:min-h-[1300px]' 
      style={{
        backgroundImage:`url(${bg})`,
        backgroundSize:'cover',
      }}>
      <div className='flex flex-wrap mt-20 justify-around'>
        <img src={IEEE} alt='ieee' className='w-[300px] text-white m-10 '/>
        <span className='w-[650px] text-lg text-white mt-[50px] bg-black border-double border-orange-400 border-8 p-5'>
          Established in October 2011 by engineering students from the National School of Computer Science, our Student Branch is committed
           to global collaboration and the advancement of engineering, computer science, and information technology under the umbrella of IEEE 
           region 8 Tunisia section.IEEE is the largest technical professional organization dedicated to advancing technology for the benefit of 
           humanity, IEEE's core purpose is to foster technological innovation and excellence for the benefit of humanity. ENSI was established 
           in 1984 as the first school of computer science in tunisia
        </span>
      </div>
      <div className='flex flex-wrap mt-40 justify-around'>
        <img src={CS} alt='CS' className='w-[300px] h-[150px] mt-[65px] m-10 '/>
        <span className='w-[650px] text-lg text-white bg-black border-double border-orange-400 border-8 p-5 mb-4' >
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