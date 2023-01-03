import React from "react";

import instagramColor from "../assets/instagram.svg";
import facebookColor from "../assets/facebook.svg";
import linkedinColor from "../assets/linkedin.svg";
import gmailColor from "../assets/gmail.svg";
import instagramBW from "../assets/instagram_bw.svg";
import facebookBW from "../assets/facebook_bw.svg";
import linkedinBW from "../assets/linkedin_bw.svg";
import gmailBW from "../assets/gmail_bw.svg";

const Socials = () => {
  const socials = [
    {
      name: "instagram",
      icon: { color: instagramColor, bw: instagramBW },
      link: "https://www.instagram.com/djsanghvi_acm/",
    },
    {
      name: "facebook",
      icon: { color: facebookColor, bw: facebookBW },
      link: "https://www.facebook.com/djscoeacm/",
    },
    {
      name: "linkedin",
      icon: { color: linkedinColor, bw: linkedinBW },
      link: "https://www.linkedin.com/company/dj-sanghvi-acm/",
    },
    {
      name: "Gmail",
      icon: { color: gmailColor, bw: gmailBW },
      link: "mailto:coreacm@gmail.com",
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
          <div
            className='socials-icon'
            style={{ backgroundImage: `url(${x.icon.bw})`, backgroundSize: "contain" }}>
            <img src={x.icon.color} width='100%' />
            {/* <img src={x.icon.bw} width='100%' /> */}
          </div>
        </a>
      ))}
    </div>
  );
};

export default Socials;
