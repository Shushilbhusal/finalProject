import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel: React.FC = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: true,
    fade: true,
    swipeToSlide: true,
  };

  return (
    <div className="slider-container h-80  ">
      <Slider {...settings}>
        <div className="h-60">
          <img src="/slider1.jpg" alt="Slide 1" className="w-full h-80 " />
        </div>
        <div className="h-60">
          <img src="/slider2.jpg" alt="Slide 2" className="w-full h-80 " />
        </div>
        <div className="h-60">
          <img src="/slider3.png" alt="Slide 3" className="w-full h-80 " />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
