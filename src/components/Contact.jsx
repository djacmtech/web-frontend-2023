import React from "react";
import "../styles/Contact.css";
const Contact = () => {
  return (
    <>
      <h1>GET IN TOUCH</h1>

      <div className='column'>
        <form action='#'>
          <div className='design'>
            <input type='text' placeholder='Name' />
          </div>

          <div className='design'>
            <input type='text' placeholder='Email' />
          </div>

          <div className='design'>
            <textarea type='text' placeholder='Message' />
            <br />
            <button>Submit</button>
            <br />
            <br />
          </div>
        </form>

        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15080.024175003662!2d72.82843413236904!3d19.10739079311722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c676018b43%3A0x75f29a4205098f99!2sSVKM&#39;s%20Dwarkadas%20J.%20Sanghvi%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1672153432032!5m2!1sen!2sin'
          width='400'
          height='300'
          style={{ border: 0, float: "right", display: "flex" }}
          allowfullscreen=''
          loading='lazy'
          referrerpolicy='no-referrer-when-downgrade'></iframe>
      </div>
    </>
  );
};
export default Contact;
