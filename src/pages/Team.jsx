// import Debug from "../utils/Debug";
// import TextBlock from "../utils/TextBlock";
import TeamCarousel from "../components/TeamPage/TeamCarousel";
import TeamComplete from "../components/TeamPage/TeamComplete";
// import TeamMembers from "../components/TeamPage/TeamMembers_2";

const Team = () => {
  return (
    <div className='teampage page'>
      {/* <TeamCarousel /> */}
      <TeamComplete />
      {/* <TeamMembers /> */}
    </div>
  );
};

export default Team;
