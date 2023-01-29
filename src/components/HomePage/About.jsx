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
    const Blocks = document.querySelector(".blocks");
    const Page = document.querySelector(".page");
    const AboutSection = document.querySelector(".about");

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
    // } else {
    //   const delay = +window.getComputedStyle(Blocks).getPropertyValue("--delay-factor");

    //   BlockPairs.forEach((pair, i) => {
    //     pair.childNodes.forEach(x => {
    //       x.style.setProperty("transition-delay", delay * (i + 1) + "ms");
    //     });
    //   });

    //   const observer = new IntersectionObserver(
    //     entries => {
    //       entries.forEach(entry => {
    //         if (entry.isIntersecting) {
    //           entry.target.lastChild.classList.add("open");
    //         } else {
    //           entry.target.lastChild.classList.remove("open");
    //         }
    //       });
    //     },
    //     { root: Page, threshold: 0.5 }
    //   );

    //   observer.observe(AboutSection);

    //   return () => {
    //     observer.disconnect();
    //   };
    // }
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
