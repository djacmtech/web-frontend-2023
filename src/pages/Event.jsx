import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Carousel from "../utils/Carousel";

const Event = () => {
  const { eventKey } = useParams();
  const [event, setEvent] = useState({});

  const getEvent = async () => {
    const url = `https://djacmdev.pythonanywhere.com/api/events/${eventKey}`;
    const res = await fetch(url);
    const data = await res.json();
    setEvent(data);
  };

  useEffect(() => {
    getEvent();
  }, []);

  console.log(event);
  return event.event_name ? (
    <div className={`eventpage page ${eventKey}`}>
      <section className='event'>
        {event.images?.length > 0 ? (
          <Carousel className='event-carousel'>
            {event.images?.map((x, i) => (
              <img src={x.image} alt={`${event.event_name} image`} key={i} className='event-img' />
            ))}
          </Carousel>
        ) : (
          ""
        )}
        <div className='event-text'>
          <h1 className='event-name'>{event.event_name}</h1>
          <EventDate from_date={event.from_date} to_date={event.to_date} />
          <span className='event-content'>{event.content}</span>
        </div>
      </section>
    </div>
  ) : (
    "Loading..."
  );
};
export default Event;

export const EventDate = ({ from_date, to_date }) => {
  return from_date === to_date ? (
    <h2 className='event-date-single'>
      {new Date(from_date).toLocaleDateString("en-uk", { dateStyle: "medium" })}
    </h2>
  ) : (
    <h2 className='event-date-double'>
      {`${new Date(from_date).toLocaleDateString("en-uk", {
        dateStyle: "medium",
      })} - ${new Date(to_date).toLocaleDateString("en-uk", {
        dateStyle: "medium",
      })}`}
    </h2>
  );
};
