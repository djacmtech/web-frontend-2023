import { useEffect } from "react";
import "../../styles/about.css";

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
    const Page = document.querySelector(".page");
    const AboutSection = document.querySelector(".about");
    const BlockPairs = document.querySelectorAll(".block-pair");

    BlockPairs.forEach((pair, i) => {
      pair.childNodes.forEach(x => {
        x.style.setProperty("transition-delay", 150 * (i + 1) + "ms");
      });
    });

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.lastChild.classList.add("open");
          } else {
            entry.target.lastChild.classList.remove("open");
          }
        });
      },
      { root: Page, threshold: 0.5 }
    );

    observer.observe(AboutSection);

    return () => {
      observer.disconnect();
    };
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
