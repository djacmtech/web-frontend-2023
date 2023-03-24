import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useData from "../hooks/useData";
import Carousel from "../utils/Carousel";

const Event = () => {
  const { eventKey } = useParams();
  const [Event, setEvent] = useState({});

  const getEvent = async () => {
    const url = `https://djacmdev.pythonanywhere.com/api/events/${eventKey}`;
    const res = await fetch(url);
    const data = await res.json();
    setEvent(data);
  };

  useEffect(() => {
    getEvent();
  }, []);

  console.log(Event);
  return (
    <div className={`eventpage page ${eventKey}`}>
      <section className='event'>
        {Event.images?.length > 0 ? (
          <Carousel className='event-carousel'>
            {Event.images?.map((x, i) => (
              <img src={x.image} alt={`${Event.event_name} image`} key={i} className='event-img' />
            ))}
          </Carousel>
        ) : (
          ""
        )}
        <div className='event-text'>
          <h1 className='event-name'>{Event.event_name}</h1>
          {Event.from_date === Event.to_date ? (
            <h2 className='event-date-single'>
              {new Date(Event.from_date).toLocaleDateString("en-uk", { dateStyle: "medium" })}
            </h2>
          ) : (
            <h2 className='event-date-double'>
              {`${new Date(Event.from_date).toLocaleDateString("en-uk", {
                dateStyle: "medium",
              })} - ${new Date(Event.to_date).toLocaleDateString("en-uk", {
                dateStyle: "medium",
              })}`}
            </h2>
          )}
          <span className='event-content'>{Event.content}</span>
        </div>
      </section>
    </div>
  );
};
export default Event;
