import "./Slider.css";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

const slides = [
  "images/s1.jpg",
  "images/s2.jpg",
  "images/s3.jpg",
  "images/s4.jpg",
  "images/s5.jpg",
  "images/s6.jpg",
];

function Slider() {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  return (
    <div className="slider relative ">
      <div
        className="container flex transition-transform ease-out duration-1000 h-[65vh]"
        style={{ transform: `translateX(-${curr * 100}vw)` }}
      >
        {slides.map((slide, index) => (
          <img key={index} src={slide} alt={`Slide ${index}`} />
        ))}
      </div>
      <div className=" absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className=" p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={next}
          className=" p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronRight size={40} />
        </button>
      </div>
    </div>
  );
}

export default Slider;
