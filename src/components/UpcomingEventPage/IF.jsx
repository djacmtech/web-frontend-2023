import React from 'react'
import "../../styles/MD.css"
import "../../styles/upcomingEvent.css"

import { FaChevronRight } from "react-icons/fa";

const IF = () => {
  return (
    <div>
      <h1 className='md_head'>ACM Internship Fair </h1>
      <hr style={{ width: "50vw", marginLeft: "25%" }} />
      <div className="main_p_container">

      <div className="up_container">

      <p className='about_events'>The highly anticipated Internship Fair is fast approaching, and we're thrilled to extend a warm invitation to all of you. Mark your calendars for May 3rd and 4th as we transform DJSCE into a dynamic hub of opportunity and growth. This event is meticulously curated to offer you a platform to explore a myriad of internship opportunities with esteemed companies. Whether you're a first-year, second-year, or third-year student, this fair is tailored to cater to your aspirations and career needs. Prepare to immerse yourself in a world of learning, networking, and professional advancement. Whether you're seeking remote or on-site internships, the fair has something for everyone. Don't miss out on this chance to take the first step towards realizing your career dreams. Register now and embark on a journey towards a promising future!
   </p>
      </div>
</div>
      <p className="register_head">
        Click Button Below To Register
      </p>
      <div className="a_div">
        <a href="https://djsceinternshipfair.netlify.app/" className="register_a">Register</a>
      </div>
      <hr />
    </div>
  )
}

export default IF
