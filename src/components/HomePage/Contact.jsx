import React,{Fragment} from 'react'
import './Contact.css'
import {FaFacebook,FaInstagram,FaLinkedin,FaLocationArrow} from 'react-icons/fa'

const Contact=()=>{

     return(
          <section className='contact'>
     <h1 className='head'>GET IN TOUCH</h1>
     
      <div className='container'>
      
            <form action='#'>
            <table>
               <tr>
                    <td>
                         <div className='up'>
            <div className='design1'>
                 <input type="text" placeholder='Name'/>
                
            </div>
            
            <div className='design2'>
              
                 <input type="text" placeholder='Email'/>
            </div>
           <table>
               <tr>
                    <td>
      <div className='ref'>
            <div className='design3'>
               <a href='coreacm@gmail.com'>
                 <p className='p12'><b>coreacm@gmail.com</b></p>
                 </a>
            </div>
            <div className='design4'>
                 <p className='p1'>Rishi Doshi:+91 1111111111</p>
            </div>
      </div>
      </td>
          <td>
      <div className='social'>
          <div className='soc1'>
            <div className='design5'>
               <a href='https://www.facebook.com/djscoeacm/'>
               <FaFacebook/>
               </a>
            </div>

            <div className='design6'>
               <a href='https://www.instagram.com/djsanghvi_acm/'> 
               <FaInstagram/>
               </a>
              </div>
            </div>
            
          <br/>
          <div className='soc2'>
            <div className='design7'>
               <a href='https://www.linkedin.com/dj-sanghvi-acm/'>
               <FaLinkedin/>
               </a>
            </div>

            <div className='design8'>
               <a href='https://goo.gl/maps/3pkAhj2jvCGia6XD8'>
               <FaLocationArrow/>
               </a>
            </div>
          </div>
      </div>  
      </td>
      </tr> 
      </table>
      </div>
      </td>  
      
           <br/>
           <td>
               <div className='bottom'>
            <div className='design11'>
                 <textarea type="text" placeholder='Message'/>
            </div>
               <br/>
               
            <div className='design10'>
                 <button>Send </button>
            </div>
            </div>
            </td>
            
            </tr>

            </table>
            </form> 
      
      </div>
      
      </section>
    
  );
}
export default Contact;
