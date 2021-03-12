import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = (props) => {
  const settings = {
    infinite: true,
    draggable: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    arrows: false,
    focusOnSelect: true,
    centerMode: true
  };
  const renderSlides = (range) => {
    return new Array(range + 1)
      .fill("_")
      .map((_, idx) => {
        return idx.toString().padStart(2, "0");
      })
      .map((num, idx) => (
        <div
          key={idx}
          className="number"
          onDoubleClick={() => console.log("clicked")}
        >
          <h3>{num}</h3>
        </div>
      ));
  };
  return (
    <div className="slider-container">
      <div className="slider-header">
        <h3>Hours</h3>
        <h3>Minutes</h3>
        <h3>Seconds</h3>
      </div>
      <div className="slider-wrapper">
        <Slider
          {...settings}
          afterChange={(currentSlide) => props.setHours(currentSlide)}
        >
          {renderSlides(99)}
        </Slider>
        <div className="slider-colon">:</div>
        <Slider
          {...settings}
          afterChange={(currentSlide) => props.setMinutes(currentSlide)}
        >
          {renderSlides(59)}
        </Slider>
        <div className="slider-colon">:</div>
        <Slider
          {...settings}
          afterChange={(currentSlide) => props.setSeconds(currentSlide)}
        >
          {renderSlides(59)}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
