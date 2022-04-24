import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Carousel } from "react-bootstrap";

export default function Carrousel({ slides }) {
  return (
    <Carousel variant="dark">
      {slides.map((slide, index) => (
        <Carousel.Item key={index} interval={100000}>
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
