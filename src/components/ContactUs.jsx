
import React , { useState } from 'react';
import ENSIMapsImage from "../assets/ENSI-maps.png";


function ContactUs() {
  
  const [firstname , setfirstname]= useState('') ;
  const [lastName, setlastname] = useState('');
  const [email, setemail] = useState('');
  const [tel, settel] = useState('');
  const [message ,setmessage] =useState('');



 
  const handleSubmit = (event) =>{
    event.preventDefault();

    console.log('Prénom:', firstname);
    console.log('Nom:', lastName);
    console.log('Adresse e-mail:', email);
    console.log('Tel:', tel);
    console.log('message :', message) ;
    

  };

  
  return (
    
    <div class="bg-gradient-to-br from-purple-950 via-violet-500 to-cyan-500 w-full  ">
    
      <div className='text-white text-4xl font-stalinist mx-4 pt-2 ${styles.paddingX} ' >ContactUs</div>

      <div className={'border animate-slide-top' }>
        <div className=" grid mt-6 mb-12 w-[26rem] mx-auto rounded-[8px] flex shadow-2xl shadow-white hover:shadow-purple-400 backdrop-grayscale backdrop-opacity-40  border mb-10 bg-no-repeat bg-[length:100%_100%] sm:flex sm:w-auto lg:grid ">
          
          <form onSubmit={handleSubmit} className="border grid mt-5 ml-[10px] mr-[10px] mx-auto mb-[10px]  md:w-1/2 h-[40rem] rounded-lg ">
            <p className=" text-white text-3xl font-semibold ">Let's Connect</p>
            <p className="text-white mt-[4px] pl-1 text-[1.14rem] ">Join us in connecting the dots of our gaming universe! Reach out and let's weave together the magic of collaboration to create exceptional experiences.</p>
            <div className='h-[2.8rem]  flex justify-between mt-5'>
              <input type="text" name='firstname' id='firstname' onChange={(e)=> setfirstname(e.target.value)} className='border-[1px] border-indigo-900 rounded-[5px]  h-[2.8rem] w-[48.5%] outline-none border-0 pl-[8px] text-[0.9rem] bg-transparent text-white ' placeholder='Last Name' required/>
              <input type="text" name='lastname' id='lastname' onChange={(e)=> setlastname(e.target.value)} className='border-[1px] border-indigo-800 rounded-[5px] h-[2.8rem] w-[48.5%] outline-none border-0 pl-[8px] text-[0.9rem] bg-transparent text-white '    placeholder='First Name' required/>
            </div>
            <input type="email" id='email' onChange={(e)=> setemail(e.target.value)} className="border-[1px] border-indigo-900 rounded-[5px]  h-[2.8rem] mt-[0.9rem] outline-none border-0 pl-[8px] text-[0.9rem] bg-transparent text-white" placeholder='Email' required/>
            <input type="tel" id='tel' onChange={(e)=> settel(e.target.value)} className="border-[1px] border-indigo-800 rounded-[5px]  h-[2.8rem] mt-[0.9rem] outline-none border-0 pl-[8px] text-[0.9rem] bg-transparent text-white" placeholder='Tel' required /> 
            <textarea name="message" id="message" onChange={(e)=>setmessage(e.target.value)}  rows="10" className='border-[1px] border-indigo-800 mt-[0.9rem] rounded-[5px] outline-none  pl-[8px] pt-[6px]  resize-none text-[0.9rem] bg-transparent text-white  ' placeholder='Message' required></textarea>
            <button type='submit' className="rounded-[5px] w-full h-[2.8rem] mt-[0.9rem] bg-gradient-to-l from-purple-700 to-indigo-600 text-white text-lg hover:to-cyan-500 uppercase"> Send it</button>
          </form>
          <div className=" border-black border-[1px] overflow-hidden w-full h-[15rem] mt-5 rounded-[5px] relative  sm:h-[40rem] sm:w-1/2  ">
            <img src={ENSIMapsImage} alt="Ensi maps" className=" rounded-[5px] border-[1px] " />
            <div className="absolute inset-0  bg-blue-200 opacity-50 rounded-[5px] h-full "></div>
          </div>

          

         </div>
      </div>

    </div>
    
  ) 
}

export default ContactUs

