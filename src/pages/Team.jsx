// import Debug from "../utils/Debug";
// import TextBlock from "../utils/TextBlock";
import TeamCarousel from "../components/TeamPage/TeamCarousel";
import TeamComplete from "../components/TeamPage/TeamComplete";
import "../styles/teampage.css";

const Team = () => {
  return (
    <div className='teampage page'>
      {/* <TeamCarousel /> */}
      <TeamComplete />
    </div>
  );
};

export default Team;
