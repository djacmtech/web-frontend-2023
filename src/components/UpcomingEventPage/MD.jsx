import React from 'react'
import "../../styles/MD.css"
import { FaChevronRight } from "react-icons/fa";

const MD = () => {
  return (
    <div>
      <h1 className='md_head'>Why to Choose ACM Membership? </h1>
      <hr style={{ width: "50vw", marginLeft: "25%" }} />

      <div className="perks">
        <p className="perk">
          1. Unlock Substantial Savings for skill boosting geeks for geeks courses!
        </p>
        <p className="perk">
          2. Attain top priority at lines of Code 6.0
        </p>
        <p className="perk">
          3. Embrace your Path to Success at our flagship Event Internship Fair.
        </p>
        <p className="perk">
          4. Acquire Three Interviews at no cost.
        </p>
        <p className="perk">
          5. Gain exclusive priority access to Industry visits.
        </p>
        <p className="perk">
          6. Elevate your achievements to the forefront of ACM's estimated annual magazine.
        </p>
        <p className="perk">
          7. Dive into an Exclusive world of Member-Only Events.
        </p>
        <p className="perk">
          8. Join our Official Discord server to connect with Distinguished Alumni.
        </p>
        <p className="perk">
          9. Experience the ACM 101 webinar series - Your Gateway to knowledge
        </p>
      </div>

      <p className="register_head">
        Click Button Below To Register
      </p>
      <div className="a_div">
        <a href="https://forms.gle/2qVUsrfgKeoVfkP88" className="register_a">Register</a>
      </div>
      <hr />
    </div>
  )
}

export default MD
