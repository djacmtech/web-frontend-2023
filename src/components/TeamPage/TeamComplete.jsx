import { useState } from "react";
import "../../styles/teamcomplete.css";

const TeamComplete = () => {
  const [Team, setTeam] = useState("2022");

  const changeHandler = e => {
    setTeam(e.target.value);
  };

  return (
    <section className='team-complete'>
      <h1 className='team-header heading'>Team</h1>
      <fieldset className='team-select'>
        {new Array(5).fill(0).map((_, i) => (
          <span key={i} className='team-input'>
            <input
              type='radio'
              name='team'
              id={`team-${22 - i}-${23 - i}`}
              value={2022 - i}
              onChange={changeHandler}
            />
            <label htmlFor={`team-${22 - i}-${23 - i}`}>{`${2022 - i}-${2023 - i}`}</label>
          </span>
        ))}
      </fieldset>

      <TeamMembers Year={Team} />
    </section>
  );
};

const TeamMembers = ({ Year }) => {
  return <div className='team-members'>{Year}</div>;
};

const TeamMember = ({ name, img, socials }) => {
  return <div>TeamMember</div>;
};

export default TeamComplete;
