import React from "react";
import instagram from "../../assets/icons/instagram.svg";
import facebook from "../../assets/icons/facebook.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import direction from "../../assets/icons/direction_icon.svg";

const Contact = () => {
  return (
    <section className='contact'>
      <h1 className='head'>GET IN TOUCH</h1>

      <div className='container'>
        <form action='#'>
          <table>
            <tbody>
              <tr>
                <td>
                  <div className='up'>
                    <div className='design1'>
                      <input type='text' placeholder='Name' />
                    </div>

                    <div className='design2'>
                      <input type='text' placeholder='Email' />
                    </div>
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <div className='ref'>
                              <div className='design3'>
                                <a href='coreacm@gmail.com'>
                                  <p className='p1'>
                                    <b>coreacm@gmail.com</b>
                                  </p>
                                </a>
                              </div>

                              <div className='design4'>
                                <p className='p1'>Rishi Doshi:</p>
                                <p className='p1'>+91 1111111111</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className='social'>
                              <div className='soc1'>
                                <div className='design5'>
                                  <a href='https://www.facebook.com/djscoeacm/'>
                                    <img src={facebook} alt='facebook' />
                                  </a>
                                </div>

                                <div className='design6'>
                                  <a href='https://www.instagram.com/djsanghvi_acm/'>
                                    <img src={instagram} alt='instagram' />
                                  </a>
                                </div>
                              </div>

                              <div className='soc2'>
                                <div className='design7'>
                                  <a href='https://www.linkedin.com/dj-sanghvi-acm/'>
                                    <img src={linkedin} alt='linkedin' />
                                  </a>
                                </div>

                                <div className='design8'>
                                  <a href='https://goo.gl/maps/3pkAhj2jvCGia6XD8'>
                                    <img src={direction} alt='direction' />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </td>
                <td>
                  <div className='bottom'>
                    <div className='design11'>
                      <textarea type='text' placeholder='Message' />
                    </div>
                    <div className='design10'>
                      <button>Send </button>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </section>
  );
};
export default Contact;
