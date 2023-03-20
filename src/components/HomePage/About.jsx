import "https://rawcdn.githack.com/flackr/scroll-timeline/ca40d920073ab1c3775f6e2aa973c6ea747ae664/dist/scroll-timeline.js";
import { useEffect } from "react";

const About = () => {
  const cards = [
    {
      title: "Our Mission",
      text: [
        "Foster research acumen and analytical thinking in students to prepare them for technological challenges in the computing industry.",
        "Cultivate professionals who possess soft skills, ethical values, and a commitment to society's betterment.",
        "Raise awareness about sustainability issues and current developments in the computing field.",
        "Create a collaborative environment that supports aspiring technocrats in meeting industry demands.",
      ],
    },
    {
      title: "Our Vision",
      text: [
        "The goal is to provide excellent education, encourage a culture of research, and instill ethical values in order to produce skilled engineers who can effectively address worldwide challenges.",
      ],
    },
    {
      title: "What We Do",
      text: [
        "Stay up-to-date with the latest technology trends by reading our magazine and newsletter. Our members benefit from informative guest lectures that expand their knowledge.",
        "Our members benefit from informative guest lectures that expand their knowledge.",
        "Nothing beats hands-on learning experiences.",
        "We provide a full-day opportunity to experience the real world of industry.",
      ],
    },
  ];

  useEffect(() => {
    const BlockPairs = document.querySelectorAll(".block-pair");

    const mobile = window.matchMedia("(width < 900px)");

    // if (!mobile.matches) {
    BlockPairs.forEach((pair, i) => {
      const timeline = new ViewTimeline({
        subject: pair,
        axis: "vertical",
      });

      const options = {
        timeline,
        timeRange: mobile.matches ? "cover -10% 30%" : "cover -10% 50%",
        fill: "both",
        easing: "ease-in-out",
      };

      const [text, title] = pair.children;

      pair.animate(
        {
          "--extension": [0, 1],
        },
        { ...options }
      );

      title.animate(
        {
          translate: ["-50% 0", "0 0"],
        },
        { ...options }
      );
      text.animate(
        {
          translate: ["50% 0", "0 0"],
        },
        { ...options }
      );
    });
  }, []);

  return (
    <section className='about' id='aboutus'>
      <h1 className='about-header'>About Us</h1>
      <div className='blocks'>
        {cards.map(x => (
          <div className='block-pair' key={x.title} aria-label={x.title}>
            <ul className='block-text block'>
              {x.text.map(x => (
                <> {x}</>
              ))}
            </ul>
            <div className='block-title block'>{x.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
