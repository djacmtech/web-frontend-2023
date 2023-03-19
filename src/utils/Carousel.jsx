import { useEffect, useState, useRef } from "react";

const Carousel = ({ children, className, disablehover, slideshow, ...rest }) => {
  const [Current, setCurrent] = useState(0);
  const [SS, setSS] = useState(slideshow);
  const Items = useRef(null);
  const Interval = useRef(null);

  const clamp = (x, a, b) => (x < a ? a : x > b ? b : x);
  useEffect(() => {
    const len = Items.current.childNodes.length;
    Interval.current = setInterval(() => {
      if (SS) {
        setCurrent(x => clamp((x + 1) % len, 0, len - 1));
      }
    }, 2000);

    return () => {
      clearInterval(Interval.current);
    };
  }, []);

  useEffect(() => {
    let offset = Items.current.childNodes[Current].offsetLeft;
    Items.current.scrollTo(offset, 0);
    return () => {};
  }, [Current]);

  const nextImg = () => {
    const len = Items.current.childNodes.length;
    setCurrent(x => (x + 1 >= len ? len - 1 : x + 1));
    setSS(false);
  };
  const prevImg = () => {
    setCurrent(x => (x - 1 < 0 ? 0 : x - 1));
    setSS(false);
  };

  return (
    <div className={`carousel ${className} ${disablehover ? "nohover" : ""}`} {...rest}>
      <div className='carousel-items' ref={Items}>
        {children?.map((x, i) => (
          <div className='carousel-item' key={i}>
            {x}
          </div>
        ))}
      </div>
      <button className='nav-next nav-btn' onClick={nextImg}>
        {">"}
      </button>
      <button className='nav-prev nav-btn' onClick={prevImg}>
        {"<"}
      </button>
    </div>
  );
};

export default Carousel;
