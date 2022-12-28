import "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js";
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
    document.querySelectorAll(".block-pair").forEach(pair => {
      const [text, title] = pair.children;

      const topOffset = pair.offsetTop;
      const pairHeight = pair.offsetHeight;

      const BlockTimeline = new ScrollTimeline({
        source: document.scrollingElement,
        orientation: "block",
        scrollOffsets: [new CSSUnitValue("50", "percent"), new CSSUnitValue("80", "percent")],

        // [
        //   new CSSUnitValue(topOffset + pairHeight - window.innerHeight + 300, "px"),
        //   new CSSUnitValue(topOffset - 300, "px"),
        // ],
      });

      console.log(BlockTimeline);

      title.animate(
        {
          translate: ["-50% 0", "0 0"],
        },
        {
          timeline: BlockTimeline,
          fill: "both",
        }
      );
      text.animate(
        {
          translate: ["50% 0", "0 0"],
        },
        {
          timeline: BlockTimeline,
        }
      );
      console.log(title.getAnimations());
    });
  }, []);

  return (
    <div className='blocks'>
      {cards.map(x => (
        <div className='block-pair' key={x.title}>
          <div className='block-text block'>{x.text}</div>
          <div className='block-title block'>{x.title}</div>
        </div>
      ))}
    </div>
  );
};

export default About;
