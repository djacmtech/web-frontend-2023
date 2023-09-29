import React from 'react'
import "../../styles/upcomingEvent.css"
import { BsFillCalendarMonthFill, BsFillClockFill, BsGeoAltFill } from 'react-icons/bs'

const UpcomingEvent = () => {
    return (
        <div>
            <h1 className='h1_container'>D I G I H U N T <span style={{ marginLeft: "15px" }}>4.0</span></h1>
            <hr style={{ width: "30%", marginLeft: "35vw", backgroundColor: "yellow", marginTop: "10px" }} />
            <div className="main_p_container">
                <p className='p_container'>Can You Save the Conference Before it's too Late?</p>
            </div>
            <div className="up_container">
                <p className='about'>DJSCE-ACM is here with Digihunt 4.0, a fun & exciting Treasure Hunt with a technical twist for you to get a break from a tiring day and grab some amazing prizes. Trapped in the forest of hints, scrutinize and inspect every move that you make as Death is only a few feet apart in the world of Hunting. <span className='about_extra'>Register now for free in a team of 3 to secure your place for this thrilling mission and get a chance to win some exciting prizes worth Rs.10,000</span></p>
            </div>
            <div className="down_container">

                <div className="left">
                    <span className='head_left'>DATE AND VENUE</span>
                    {/* <hr style={{ marginLeft: "15px" }} /> */}
                    <div className="date">
                        <div className="icon"><BsFillCalendarMonthFill /></div>
                        <div className="text">2:00 PM Onwards</div>
                    </div>

                    <div className="time">
                        <div className="icon"><BsFillClockFill /></div>
                        <div className="text">6th Floor, Computer Dept.</div>
                    </div>

                    <div className="venue">
                        <div className="icon"><BsGeoAltFill /></div>
                        <div className="text">4th October, 2023</div>
                    </div>
                </div>

                <div className="right">
                    <span className='head_right'>P R I Z E</span>
                    {/* <hr style={{ width: "250px", marginLeft: "50px" }} /> */}
                    <div className="three_main">
                        <div className="one"> <img className='trophy' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHF7XTAMJpM3-zRM--g0d-2hvPeLBGyrMJoQ&usqp=CAU" alt="2nd" /> <span className='price'>1.5k</span></div>
                        <div className="two"> <img className='trophy' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHF7XTAMJpM3-zRM--g0d-2hvPeLBGyrMJoQ&usqp=CAU" alt="1st" /> <span className='price'>2k</span></div>
                        <div className="three"> <img className='trophy' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHF7XTAMJpM3-zRM--g0d-2hvPeLBGyrMJoQ&usqp=CAU" alt="3rd" /> <span className='price'>1k</span></div>
                    </div>
                    <div className="extra">Exciting Goodies and Hampers</div>
                </div>

            </div>

            <div className="register">
                <p className='register_link'>Register Now By Clicking on the Link Given Below</p>
                <div className='link_container'>
                    <a className='link' href="https://forms.gle/MaPwj5PHXVA3o59N6" target='blank'>Register Now</a>
                </div>
            </div>

            <hr />
            <div className="footer">
                <div className="left_footer">For Further Details or any Query Contact:</div>
                <div>
                    <span style={{ marginRight: "50px" }}>Tanay Dave :- +91 79770 06350</span>
                    <span>Krish Bharucha :- +91 98204 14513</span>
                </div>
            </div>
        </div>

    )
}

export default UpcomingEvent
