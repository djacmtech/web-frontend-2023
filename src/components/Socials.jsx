import React from "react";
import { ReactComponent as instagram } from "../assets/instagram.svg";
import { ReactComponent as facebook } from "../assets/facebook.svg";
import { ReactComponent as linkedin } from "../assets/linkedin.svg";
import "../styles/socials.css";

const Socials = () => {
  const socials = [
    {
      name: "instagram",
      icon: instagram,
      link: "https://www.instagram.com/djsanghvi_acm/",
    },
    {
      name: "facebook",
      icon: facebook,
      link: "https://www.facebook.com/djscoeacm/",
    },
    {
      name: "linkedin",
      icon: linkedin,
      link: "https://www.linkedin.com/company/dj-sanghvi-acm/",
    },
  ];

  return (
    <div className='socials'>
      {socials.map(x => (
        <a
          className={`socials-link ${x.name}`}
          key={x.name}
          href={x.link}
          target='_blank'
          rel='noreferrer'>
          <div className='hover-target'></div>
          <div className='socials-icon'>
            <x.icon />
          </div>
        </a>
      ))}
    </div>
  );
};

export default Socials;
