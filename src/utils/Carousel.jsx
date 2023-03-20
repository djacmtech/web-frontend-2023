import { useEffect, useState, useRef } from "react";

const Carousel = ({ children, className, disablehover, ...rest }) => {
  const [Current, setCurrent] = useState(0);
  const [SS, setSS] = useState(true);
  const Items = useRef(null);
  const Interval = useRef(null);

  const clamp = (x, a, b) => (x < a ? a : x > b ? b : x);
  useEffect(() => {
    const len = Items.current.childNodes.length;
    Interval.current = setInterval(() => {
      if (SS) {
        setCurrent(x => clamp((x + 1) % len, 0, len - 1));
      }
    }, 3000);

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
        <svg viewBox='0 0 46 34' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M3 14.75C1.75736 14.75 0.75 15.7574 0.75 17C0.75 18.2426 1.75736 19.25 3 19.25V14.75ZM44.591 18.591C45.4697 17.7123 45.4697 16.2877 44.591 15.409L30.2721 1.0901C29.3934 0.211418 27.9688 0.211418 27.0901 1.0901C26.2114 1.96878 26.2114 3.3934 27.0901 4.27208L39.818 17L27.0901 29.7279C26.2114 30.6066 26.2114 32.0312 27.0901 32.9099C27.9688 33.7886 29.3934 33.7886 30.2721 32.9099L44.591 18.591ZM3 19.25H43V14.75H3V19.25Z'
            fill='black'
          />
        </svg>
      </button>
      <button className='nav-prev nav-btn' onClick={prevImg}>
        <svg viewBox='0 0 46 34' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M43 19.25C44.2426 19.25 45.25 18.2426 45.25 17C45.25 15.7574 44.2426 14.75 43 14.75V19.25ZM1.40901 15.409C0.530331 16.2877 0.530331 17.7123 1.40901 18.591L15.7279 32.9099C16.6066 33.7886 18.0312 33.7886 18.9099 32.9099C19.7886 32.0312 19.7886 30.6066 18.9099 29.7279L6.18198 17L18.9099 4.27208C19.7886 3.3934 19.7886 1.96878 18.9099 1.0901C18.0312 0.211418 16.6066 0.211418 15.7279 1.0901L1.40901 15.409ZM43 14.75L3 14.75V19.25L43 19.25V14.75Z'
            fill='black'
          />
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
