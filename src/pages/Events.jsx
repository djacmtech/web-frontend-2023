import React from "react";
// import Event from "../components/EventPage/Event";
import Carousel from "react-material-ui-carousel";

const Events = () => {
  return (
    <div className='eventspage page'>
      <section className='events'>
        <h1 className='heading events-header'>EVENTS</h1>

        <ul className='events-list'>
          <li>DIGIHUNT 3.0</li>
          <li>CODEBASH</li>
          <li>ACM 101</li>
          <li>DIGIHUNT 2.0</li>
          <li>FUTURES 101</li>
          <li>LOC 4.0</li>
          <li>GIT WORKSHOP</li>
          <li>PLACEMENTS 101</li>
          <li>LOC 3.0</li>
          <li>INDUSTRIAL VISIT</li>
        </ul>

        <Carousel
          className='events-carousel'
          indicatorContainerProps={{ className: "carousel-indicators" }}
          navButtonsWrapperProps={{ className: "carousel-nav-btn" }}>
          {Array(7)
            .fill(0)
            .map((_, i) => (
              <div className='events-carousel-item'>
                <img
                  src={`http://unsplash.it/400/300?random=${i}`}
                  key={i}
                  className='events-carousel-img'
                />
              </div>
            ))}
        </Carousel>
      </section>
    </div>
  );
};

export default Events;
