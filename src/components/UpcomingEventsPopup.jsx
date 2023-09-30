import React, { useState } from "react";
import "../../src/styles/upcomingeventspopup.css";
const UpcomingEventsPopup = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <div
      className={`event-popup-container ${isVisible ? "visible" : "hidden"}`}
    >
      <div className="event-popup">
        <button className="close-button" onClick={handleClose}>
          &#x2716;
        </button>
        <div className="event-title">
          Upcoming Event <span className="celebration-emoji">🎉</span>
        </div>
        <div className="event-name">Digi hunt</div>
        <button
          className="event-button"
          onClick={() => (window.location.href = "/upcoming")}
        >
          <span className="button-text">Explore Upcoming Events</span>
        </button>
      </div>
    </div>
  );
};

export default UpcomingEventsPopup;
