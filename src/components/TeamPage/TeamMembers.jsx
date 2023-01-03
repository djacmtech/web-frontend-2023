import devansh from "../../assets/devansh.png";

const TeamMembers = ({ Year }) => {
  return (
    <div className='team-members'>
      {Array(3)
        .fill(0)
        .map((_, i) => (
          <TeamMember
            name='Devansh Rathor'
            img={devansh}
            position='Member'
            linkedin='https://linkedin.com/in/DevanshR1123'
            key={i}
            i={i}
          />
        ))}
    </div>
  );
};

const TeamMember = ({ name, position, img, linkedin, i }) => {
  return (
    <div className='team-member'>
      <a href={linkedin} className='member-img-container' target='_blank'>
        <img src={`https://unsplash.it/320.webp?random=${i}`} alt='' className='member-bg' />
        <img src={img} alt={name + " image"} className='member-img' />
      </a>
      <div className='divider'></div>
      <h2 className='member-name'>{name}</h2>
      <h3 className='member-position'>{position}</h3>
    </div>
  );
};

export default TeamMembers;
