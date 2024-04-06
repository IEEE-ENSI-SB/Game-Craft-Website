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
    
    <div class="bg-gradient-to-br from-purple-950 via-violet-500 to-cyan-500 w-full ">
    
      <div className='text-white text-4xl font-stalinist mx-4 pt-2 ' >ContactUs</div>

      <div className='border'>
        <div className="mt-6 mb-12 w-[70rem] mx-auto rounded-[8px] flex shadow-2xl shadow-white hover:shadow-purple-400 backdrop-grayscale backdrop-opacity-40  border mb-10 bg-no-repeat bg-[length:100%_100%]">
          
          <form onSubmit={handleSubmit} className=" mt-5 ml-[20px] mx-[10rem]  w-full md:w-1/2 h-[40rem] rounded-lg ">
            <p className=" text-white text-3xl font-semibold">Let's Connect</p>
            <p className="text-white mt-[4px] pl-1 text-[1.14rem] ">Join us in connecting the dots of our gaming universe! Reach out and let's weave together the magic of collaboration to create exceptional experiences.</p>
            <div className=' h-[2.8rem] w-[32.8rem] flex justify-between mt-5'>
              <input type="text" name='firstname' id='firstname' onChange={(e)=> setfirstname(e.target.value)} className='border-[1px] border-indigo-900 rounded-[5px] w-64 h-[2.8rem] outline-none border-0 pl-[8px] text-[0.9rem] bg-transparent text-white ' placeholder='Last Name' required/>
              <input type="text" name='lastname' id='lastname' onChange={(e)=> setlastname(e.target.value)} className='border-[1px] border-indigo-800 rounded-[5px] w-64 h-[2.8rem] outline-none border-0 pl-[8px] text-[0.9rem] bg-transparent text-white '    placeholder='First Name' required/>
            </div>
            <input type="email" id='email' onChange={(e)=> setemail(e.target.value)} className="border-[1px] border-indigo-900 rounded-[5px] w-full h-[2.8rem] mt-[0.9rem] outline-none border-0 pl-[8px] text-[0.9rem] bg-transparent text-white" placeholder='Email' required/>
            <input type="tel" id='tel' onChange={(e)=> settel(e.target.value)} className="border-[1px] border-indigo-800 rounded-[5px] w-full h-[2.8rem] mt-[0.9rem] outline-none border-0 pl-[8px] text-[0.9rem] bg-transparent text-white" placeholder='Tel' required /> 
            <textarea name="message" id="message" onChange={(e)=>setmessage(e.target.value)} cols="30" rows="10" className='border-[1px] border-indigo-800 mt-[0.9rem] rounded-[5px] w-[32.8rem] outline-none  pl-[8px] pt-[6px]  resize-none text-[0.9rem] bg-transparent text-white  ' placeholder='Message' required></textarea>
            <button type='submit' className="rounded-[5px] w-full h-[2.8rem] mt-[0.9rem] bg-gradient-to-l from-purple-700 to-indigo-600 text-white text-lg"> Send it</button>
          </form>

          <div className="w-full md:w-1/2 mt-5 mr-5 mb-10 rounded-[5px] relative" style={{ marginLeft: '-140px' }}>
            <div className="absolute inset-0 bg-blue-200 opacity-50 rounded-[5px]"></div>
            <img src={ENSIMapsImage} alt="Ensi maps" className="w-full h-full rounded-[5px]" />
          </div>

         </div>
      </div>

    </div>
    
  ) 
}

export default ContactUs

