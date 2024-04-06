import React from 'react'
import News1 from '../assets/news/new1.png'
import News2 from '../assets/news/new2.png'
import News3 from '../assets/news/new3.png'
import New from './ahmed/New'
import bg from '../assets/background/hero-background.jpg'
import style from '../style'
function News() {
  return (
      <div className='flex -mt-10 flex-wrap h-fit min-h-screen justify-center items-center w-screen ml-[-65px]' style={{
                backgroundImage: `url(${bg})`,
                backgroundPosition:'center'
              }}>
         <div className={`text-white text-2xl font-stalinist  mx-4 pl-8 pb-5 ${style.heading2} flex justify-center text-gradient`}>News</div>
        <New src={News1}/>
        <New src={News2}/>
        <New src={News3}/>
      </div>
  )
}

export default News