import useData from "../../hooks/useData";

const TeamCarousel = () => {
  const Team = useData("https://djacmdev.pythonanywhere.com/api/core_committee/");

  const mid = Team.length / 2 + 1;
  const TeamRow1 = [...Team.slice(0, mid), ...Team.slice(0, mid), ...Team.slice(0, mid)];
  const Teamrow2 = [...Team.slice(mid), ...Team.slice(mid), ...Team.slice(mid)];

  console.log(TeamRow1);
  return (
    <section className='team-carousel'>
      <h1 className='team-header heading'>Team</h1>
      <div className='carousel-container'>
        <div className='carousel'>
          <div className='carousel-row carousel-row-1'>
            {TeamRow1.map((x, i) => (
              <div className='carousel-item' key={x.name + i}>
                <img src={x.pic} alt={x.name} className='carousel-img' />
              </div>
            ))}
          </div>
          <div className='carousel-row carousel-row-2'>
            {Teamrow2.map((x, i) => (
              <div className='carousel-item' key={x.name + i}>
                <img src={x.pic} alt={x.name} className='carousel-img' />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamCarousel;
