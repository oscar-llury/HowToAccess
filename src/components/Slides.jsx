import React from "react";
//import { AnimationOnScroll } from "react-animation-on-scroll";
import { Carousel } from "react-bootstrap";

/*
 * Component for Slides (only show one slide) also Prev,Next buttons
 */

export default function Slides({ slides, interval }) {
  return (
    <Carousel variant="dark">
      {slides.map((slide, index) => (
        <Carousel.Item key={index} interval={interval}>
          <img className="d-block w-100" src={slide.img} alt={slide.img_alt} />
          <div></div>
          <Carousel.Caption className="text-black">
            <p className="title animate__animated animate__bounceInUp animate__slow">
              {slide.title}
            </p>
            <p className="description animate__animated animate__bounceInUp animate__delay-2s animate__slow">
              {slide.desc}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
