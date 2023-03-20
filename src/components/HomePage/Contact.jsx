import React from "react";
import instagram from "../../assets/icons/instagram.svg";
import facebook from "../../assets/icons/facebook.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import direction from "../../assets/icons/direction_icon.svg";

const Contact = () => {
  return (
    <section className='contact' id='contactus'>
      <h1 className='heading contact-header'>GET IN TOUCH</h1>

      <form action='#' className='contact-form'>
        <input type='text' placeholder='name' className='name-input' />
        <input type='email' placeholder='email' className='email-input' />

        <a href='mailto:coreacm@gmail.com' className='cp-email'>
          coreacm@gmail.com
        </a>
        <a href='tel:+919833447698' className='cp-phone'>
          +91 9833447698
        </a>

        <a href='https://www.facebook.com/djscoeacm/' className='contact-socials'>
          <img src={facebook} alt='facebook' />
        </a>

        <a href='https://www.instagram.com/djsanghvi_acm/' className='contact-socials'>
          <img src={instagram} alt='instagram' />
        </a>

        <a href='https://www.linkedin.com/dj-sanghvi-acm/' className='contact-socials'>
          <img src={linkedin} alt='linkedin' />
        </a>

        <a href='https://goo.gl/maps/3pkAhj2jvCGia6XD8' className='contact-socials location'>
          <img src={direction} alt='direction' />
        </a>

        <textarea type='text' placeholder='message' className='message-field' />
        <input type='button' value='send' className='send-btn' />
      </form>
    </section>
  );
};
export default Contact;
