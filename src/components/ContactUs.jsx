
import React , { useState } from 'react';
import ENSIMapsImage from "../assets/ensi-maps2.png";


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
    
    <div class="sm:mt[-1rem] overflow-hidden ls:pb-[13rem] ss:pb-[13rem] sm:pb-0 ">
      <div id='contact-bg' className="   pb-7  ">
          <div className='border bg-black bg-opacity-35  w-full  pb-4'>
            <div className=' text-white text-4xl font-stalinist mx-4 pt-2'>ContactUs</div>
            <div className="border mt-6 mb-12 mx-auto rounded-[8px] shadow-lg shadow-white backdrop-brightness-150   hover:shadow-purple-400  ls:w-[90%] ss:mx-auto ss:max-w-[90%] ls:h-[210%]   sm:flex   sm:w-[90%] md:flex lg:max-w-[72rem] ">
              
              <div className="  overflow-hidden w-full  rounded-[5px] relative sm:border ls:h-[13rem] ss:h-[13rem] sm:h-[36rem] sm:my-4 sm:mx-auto sm:w-[48%] ">
                <img src={ENSIMapsImage} alt="Ensimaps" className=" absolute  rounded-[5px] sm:h-[40rem] sm:w-[40rem] " />
                <div className=" inset-0  bg-blue-700 opacity-50 rounded-[5px] h-full "></div>
              </div>

              <form onSubmit={handleSubmit} className=" grid  my-4  mx-auto mb-[10px] h-[36rem] rounded-lg sm:w-[48%]   ">
                <p className=" text-white text-3xl font-semibold sm:text-red ">Let's Connect</p>
                <p className="text-white mt-[4px] pl-1 text-[1.14rem] ">Join us in connecting the dots of our gaming universe! Reach out and let's weave together the magic of collaboration to create exceptional experiences.</p>
                <div className='h-[2.8rem]  flex justify-between mt-5'>
                  <input type="text" name='firstname' id='firstname' onChange={(e)=> setfirstname(e.target.value)} className='border-[1px] border-indigo-700 rounded-[5px]  h-[2.8rem] w-[48.5%] outline-none border-0 pl-[8px] text-[0.9rem] bg-transparent text-white placeholder:text-[15px] placeholder:text-slate-400 ' placeholder='Last Name ' required/>
                  <input type="text" name='lastname' id='lastname' onChange={(e)=> setlastname(e.target.value)} className='border-[1px] border-indigo-700 rounded-[5px] h-[2.8rem] w-[48.5%] outline-none border-0 pl-[8px] text-[0.9rem] bg-transparent text-white placeholder:text-[15px] placeholder:text-gray-400 '    placeholder='First Name' required/>
                </div>
                <input type="email" id='email' onChange={(e)=> setemail(e.target.value)} className="border-[1px] border-indigo-700 rounded-[5px]  h-[2.8rem] mt-[0.7rem] outline-none border-0 pl-[8px] text-[0.9rem] bg-transparent text-white placeholder:text-[15px] placeholder:text-scale-400 " placeholder='Email' required/>
                <input type="tel" id='tel' onChange={(e)=> settel(e.target.value)} className="border-[1px] border-indigo-700 rounded-[5px]  h-[2.8rem] mt-[0.7rem] outline-none border-0 pl-[8px] text-[0.9rem] bg-transparent text-white placeholder:text-[15px] placeholder:text-slate-400 " placeholder='Tel' required /> 
                <textarea name="message" id="message" onChange={(e)=>setmessage(e.target.value)}  rows="10" className='border-[1px] border-indigo-700 mt-[0.7rem] rounded-[5px] outline-none  pl-[8px] pt-[6px]  resize-none text-[0.9rem] bg-transparent text-white placeholder:text-[15px] placeholder:text-scale-400 ' placeholder='Message' required></textarea>
                <button type='submit' className="rounded-[5px] w-full h-[2.8rem] mt-[0.9rem] bg-gradient-to-l from-purple-700 to-indigo-600 text-white text-lg hover:to-cyan-500 uppercase"> Send it</button>
              </form>
              
              

              

            </div>
         </div>



      </div>
      
      

      
    </div>
    
  ) 
}

export default ContactUs

