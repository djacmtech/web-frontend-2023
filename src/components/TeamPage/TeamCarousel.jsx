import useData from "../../hooks/useData";
import Faculty from "./Faculty";

const TeamCarousel = () => {
  const Team = useData("https://djacmdev.pythonanywhere.com/api/core_committee/");

  const mid = Team.length / 2 + 1;
  const TeamRow1 = [
    ...Team.slice(mid - 2, mid),
    ...Team.slice(0, mid),
    ...Team.slice(0, mid),
    ...Team.slice(0, 2),
  ];
  const Teamrow2 = [
    ...Team.slice(-2),
    ...Team.slice(mid),
    ...Team.slice(mid),
    ...Team.slice(mid, mid + 2),
  ];

  return (
    <section className='team-carousel'>
      <h1 className='team-header heading'>Team</h1>
      <Faculty />

      <div className='carousel-container'>
        <div className='carousel'>
          <div className='carousel-row carousel-row-1'>
            {TeamRow1.map((x, i) => (
              <CarouselItem x={x} key={x.name + i} />
            ))}
          </div>
          <div className='carousel-row carousel-row-2'>
            {Teamrow2.map((x, i) => (
              <CarouselItem x={x} key={x.name + i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const CarouselItem = ({ x }) => {
  return (
    <div className={`carousel-item ${x.name.toLowerCase().split(" ").join("-")}`}>
      <img src={x.pic} alt={x.name} className='carousel-img' />
      <h3 className='team-member-post'>{x.post}</h3>
    </div>
  );
};

export default TeamCarousel;
