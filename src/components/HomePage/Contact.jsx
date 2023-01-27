import React from "react";
import instagram from "../../assets/icons/instagram.svg";
import facebook from "../../assets/icons/facebook.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import direction from "../../assets/icons/direction_icon.svg";
import "../../styles/Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <h1 className="head">GET IN TOUCH</h1>

      <div className="container">
        <form action="#">
          <div className="outer-table">
            <div className="outer-col">
              <div className="design1">
                <input type="text" placeholder="name" />
                <input type="text" placeholder="email" />
              </div>
              <div className="inner-table">
                <div className="inner-col">
                  <div className="design2">
                    <a href="coreacm@gmail.com" className="email">
                      coreacm@gmail.com
                    </a>
                  </div>
                  <div className="soc">
                    <div className="design3">
                      <a href="https://www.facebook.com/djscoeacm/">
                        <img src={facebook} width={50} alt="facebook" />
                      </a>
                    </div>
                    <div className="design3">
                      <a href="https://www.instagram.com/djsanghvi_acm/">
                        <img src={instagram} width={50} alt="instagram" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="inner-col">
                  <div className="design2">
                    <p className="p1">+91 9833447698</p>
                  </div>
                  <div className="soc">
                    <div className="design3">
                      <a href="https://www.linkedin.com/dj-sanghvi-acm/">
                        <img src={linkedin} width={50} alt="linkedin" />
                      </a>
                    </div>
                    <div className="design3">
                      <a href="https://goo.gl/maps/3pkAhj2jvCGia6XD8">
                        <img src={direction} width={50} alt="direction" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="outer-col">
              <div className="design4">
                <textarea type="text" placeholder="message" />
              </div>
              <br />
              <div className="design5">
                <button> Send </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
export default Contact;
