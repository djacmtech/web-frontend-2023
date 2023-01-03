import axios from "axios";
import { useEffect, useState } from "react";

const TeamCarousel = () => {
  const [Team, setTeam] = useState([]);

  const getTeam = async () => {
    const res = await axios.get("https://djacmdev.pythonanywhere.com/api/core_committee/");
    const data = res.data;
    setTeam(data);
  };

  useEffect(() => {
    getTeam();
  }, []);

  return (
    <section className='team-carousel'>
      <h1 className='team-header heading'>Team</h1>
      <div className='carousel-container'>
        <div className='carousel'>
          {Team.map(x => (
            <img src={x.pic} alt={x.name} className='carousel-img' />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamCarousel;
