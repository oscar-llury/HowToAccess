import React from "react";
import { Carousel } from "react-bootstrap";

export default function Carrousel({ slides }) {
  return (
    <Carousel className="app-home">
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={slide.img} alt={slide.img_alt} />
          <Carousel.Caption>
            <p>{slide.title}</p>
            <p>{slide.desc}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
