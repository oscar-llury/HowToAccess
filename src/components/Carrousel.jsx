import React from "react";
import { Carousel } from "react-bootstrap";

export default function Carrousel({ slides }) {
  return (
    <Carousel variant="dark">
      {slides.map((slide, index) => (
        <Carousel.Item key={index} interval={100000}>
          <img className="d-block w-100" src={slide.img} alt={slide.img_alt} />
          <Carousel.Caption className="text-black">
            <p className="title">{slide.title}</p>
            <p className="description">{slide.desc}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
