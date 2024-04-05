import React from 'react'
import News1 from '../assets/news/new1.png'
import News2 from '../assets/news/new2.png'
import News3 from '../assets/news/new3.png'
import New from './ahmed/New'
function News() {
  return (
    <div className='flex flex-wrap h-fit'>
      <New src={News1}/>
      <New src={News2}/>
      <New src={News3}/>
    </div>
  )
}

export default News