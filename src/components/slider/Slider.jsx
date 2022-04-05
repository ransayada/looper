import { useState, useRef, useEffect } from "react";
import "./slider.css";

const Slider = ({ percentage = 0, onChange }) => {
  const [position, setPosition] = useState(0);
  const [marginLeft, setMarginLeft] = useState(0);
  const [progressBarWidth, setProgressBarWidth] = useState(0);
  const rangeRef = useRef();
  const thumbRef = useRef();

  useEffect(() => {
    const rangeWidth = rangeRef.current.getBoundingClientRect().width; // get the width of the input range tag
    const thumbWidth = thumbRef.current.getBoundingClientRect().width; // will be always 15px (the width of the thumb) but it's better to get it from the DOM
    const centerThumb = (thumbWidth / 100) * percentage * -1;
    const centerProgressBar =
      thumbWidth +
      (rangeWidth / 100) * percentage -
      (thumbWidth / 100) * percentage;
    setPosition(percentage); // set the position of the thumb
    setMarginLeft(centerThumb); //the thumb go right using margin-left css property
    setProgressBarWidth(centerProgressBar); // set the position of the marked range
  }, [percentage]);

  return (
    <div className="slider-container">
      <div
        className="progress-bar-cover"
        style={{
          width: `${progressBarWidth}px`,
        }}
      ></div>
      <div
        className="thumb"
        ref={thumbRef}
        style={{
          left: `${position}%`,
          marginLeft: `${marginLeft}px`,
        }}
      ></div>
      <input
        type="range"
        value={position}
        ref={rangeRef}
        step="0.01"
        className="range"
        onChange={onChange}
      />
    </div>
  );
};

export default Slider;
