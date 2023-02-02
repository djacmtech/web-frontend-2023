import useData from "../../hooks/useData";
import Faculty from "./Faculty";

const TeamComplete = () => {
  const Team = useData("https://djacmdev.pythonanywhere.com/api/core_committee/");

  return (
    <section className='team-complete'>
      <h1 className='team-header heading'>Team</h1>

      <Faculty />

      <div className='team-members'>
        {Team.map(x => (
          <TeamMember name={x.name} position={x.post} img={x.pic} key={x.name} />
        ))}
      </div>
    </section>
  );
};

const TeamMember = ({ name, position, img, linkedin, i }) => {
  return (
    <div className='team-member'>
      <img src={img} alt={name + " image"} className='member-img' />
      <div className='divider'></div>
      <h2 className='member-name'>{name}</h2>
      <h3 className='member-position'>{position}</h3>
    </div>
  );
};

export default TeamComplete;
