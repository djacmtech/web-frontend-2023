import React from "react";
import instagram from "../../assets/icons/instagram.svg";
import facebook from "../../assets/icons/facebook.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import direction from "../../assets/icons/direction_icon.svg";
import { Direction, Facebook, Instagram, LinkedIn, Send } from "../ContactIcons";

const Contact = () => {
  return (
    <section className='contact' id='contactus'>
      <h1 className='contact-header'>Contact Us</h1>

      <form action='#' className='contact-form'>
        <input type='text' placeholder='name' className='name-input' />
        <input type='email' placeholder='email' className='email-input' />

        <a href='mailto:coreacm@gmail.com' className='cp-email'>
          coreacm@gmail.com
        </a>
        <a href='tel:+919833447698' className='cp-phone'>
          +91 9833447698
        </a>

        <a href='https://www.instagram.com/djsanghvi_acm/' className='contact-socials'>
          <Instagram />
        </a>

        <a href='https://www.facebook.com/djscoeacm/' className='contact-socials'>
          <Facebook />
        </a>

        <a href='https://www.linkedin.com/dj-sanghvi-acm/' className='contact-socials'>
          <LinkedIn />
        </a>

        <a href='https://goo.gl/maps/3pkAhj2jvCGia6XD8' className='contact-socials location'>
          <Direction />
        </a>

        <textarea type='text' placeholder='message' className='message-field' />
        <button type='button' className='send-btn'>
          <Send />
          <span>Send</span>
        </button>
      </form>
    </section>
  );
};
export default Contact;
