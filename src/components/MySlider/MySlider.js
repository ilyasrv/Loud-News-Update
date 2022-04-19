import React, { useCallback, useEffect, useState } from "react";

import "./slider.css";

const Slider = ({ slides, loop, pags, delay = 5, auto, navs }) => {
  if (!loop) auto = false;

  let interval = `${delay}000`;

  const dotsArray = Array.from({ length: slides.length }, (item, index) => {
    if (index === 0) {
      item = { id: index, isChecked: true };
    } else {
      item = { id: index, isChecked: false };
    }
    return item;
  });

  let [slide, setSlide] = useState(0);

  const [dots, setDots] = useState(dotsArray);

  useEffect(() => {
    if (auto) {
      const timer = setTimeout(() => {
        setSlide(slide === slides.length - 1 ? 0 : slide + 1);
        setDot(slide === slides.length - 1 ? 0 : slide + 1);
      }, interval);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [auto, interval, slide, slides.length]);

  const setDot = useCallback(
    (id) => {
      const newDots = dots.map((item) => {
        if (item.id === id) {
          item.isChecked = true;
        } else {
          item.isChecked = false;
        }
        return item;
      });
      setDots(newDots);
    },
    [dots]
  );

  const handleDotChecked = (id) => {
    setDot(id);
    setSlide(id);
  };

  const handlePrevSlide = useCallback(() => {
    if (loop) {
      setSlide(slide === 0 ? slides.length - 1 : slide - 1);
      setDot(slide === 0 ? slides.length - 1 : slide - 1);
    } else {
      setSlide(slide === 0 ? 0 : slide - 1);
      setDot(slide === 0 ? 0 : slide - 1);
    }
  }, [loop, setDot, slide, slides.length]);

  const handleNextSlide = useCallback(() => {
    if (loop) {
      setSlide(slide === slides.length - 1 ? 0 : slide + 1);
      setDot(slide === slides.length - 1 ? 0 : slide + 1);
    } else {
      setSlide(slide === slides.length - 1 ? slides.length - 1 : slide + 1);
      setDot(slide === slides.length - 1 ? slides.length - 1 : slide + 1);
    }
  }, [loop, setDot, slide, slides.length]);

  return (
    <div className="container mt-5">
      <div
        className="slider__container"
        onMouseOver={() => console.log("in")}
        onMouseLeave={() => console.log("out")}
      >
        <div className="slider__counter">
          <span className="slider__counter--start">{slide + 1}</span>/
          <span className="slider__counter--end">{slides.length}</span>
        </div>
        <div className="slider__slides">
          {navs && (
            <div className="slider__arrow">
              <div
                className="arrow slider__arrow--left"
                onClick={handlePrevSlide}
              >
                <i className="fas fa-chevron-left"></i>
              </div>
              <div
                className="arrow slider__arrow--right"
                onClick={handleNextSlide}
              >
                <i className="fas fa-chevron-right"></i>
              </div>
            </div>
          )}

          {slides.length > 0 && (
            <div className="slide_item">
              <img className="slider__img" src={slides[slide].img} alt="" />
              <div className="slide_text">{slides[slide].text}</div>
            </div>
          )}
        </div>
        <div className="slider__dots">
          {pags &&
            dots.map((item, index) => (
              <div
                key={index}
                onClick={() => handleDotChecked(index)}
                className={`slider__dot ${item.isChecked ? "active" : ""}`}
              ></div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
