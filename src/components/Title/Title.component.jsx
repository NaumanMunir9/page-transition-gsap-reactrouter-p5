import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Title.styles.scss";

const Title = ({ lineContent, lineContent2 }) => {
  let line1 = useRef(null);
  let line2 = useRef(null);

  useEffect(() => {
    gsap.from([line1, line2], 0.8, {
      delay: 0.8,
      ease: "power3.out",
      y: 64,
      stagger: {
        amount: 0.15,
      },
    });
  }, [line1, line2]);

  return (
    <div className="title-page">
      <div className="line-wrap">
        <div ref={(el) => (line1 = el)} className="line">
          <h1>{lineContent}</h1>
        </div>
      </div>

      <div className="line-wrap">
        <div ref={(el) => (line2 = el)} className="line">
          <h1>{lineContent2}</h1>
        </div>
      </div>
    </div>
  );
};

export default Title;
