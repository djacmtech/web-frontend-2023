import "https://rawcdn.githack.com/flackr/scroll-timeline/ca40d920073ab1c3775f6e2aa973c6ea747ae664/dist/scroll-timeline.js";
import { useEffect } from "react";

const About = () => {
  const cards = [
    {
      title: "Our Mission",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae vel necessitatibus deserunt dolor nulla soluta dignissimos iure enim cupiditate officia esse tempora veritatis, obcaecati in dolorum laboriosam eveniet recusandae quae!",
    },
    {
      title: "Our Vision",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae vel necessitatibus deserunt dolor nulla soluta dignissimos iure enim cupiditate officia esse tempora veritatis, obcaecati in dolorum laboriosam eveniet recusandae quae!",
    },
    {
      title: "What We Do",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae vel necessitatibus deserunt dolor nulla soluta dignissimos iure enim cupiditate officia esse tempora veritatis, obcaecati in dolorum laboriosam eveniet recusandae quae!",
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
    <section className='about'>
      <h1 className='about-header'>About Us</h1>
      <div className='blocks'>
        {cards.map(x => (
          <div className='block-pair' key={x.title} aria-label={x.title}>
            <div className='block-text block'>{x.text}</div>
            <div className='block-title block'>{x.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
