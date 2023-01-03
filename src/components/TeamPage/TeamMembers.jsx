import devansh from "../../assets/devansh.png";

const TeamMembers = ({ Year }) => {
  return (
    <div className='team-members'>
      <TeamMember
        name='Devansh Rathor'
        img={devansh}
        position='Member'
        linkedin='https://linkedin.com/in/DevanshR1123'
      />
      <TeamMember
        name='Devansh Rathor'
        img={devansh}
        position='Member'
        linkedin='https://linkedin.com/in/DevanshR1123'
      />
      <TeamMember
        name='Devansh Rathor'
        img={devansh}
        position='Member'
        linkedin='https://linkedin.com/in/DevanshR1123'
      />
    </div>
  );
};

const TeamMember = ({ name, position, img, linkedin }) => {
  return (
    <div className='team-member'>
      <a href={linkedin} className='member-img-container' target='_blank'>
        <img src='https://unsplash.it/320' alt='' className='member-bg' />
        <img src={img} alt={name + " image"} className='member-img' />
      </a>
      <div className='divider'></div>
      <h2 className='member-name'>{name}</h2>
      <h3 className='member-position'>{position}</h3>
    </div>
  );
};

export default TeamMembers;
