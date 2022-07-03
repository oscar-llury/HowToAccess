import React from "react";
import { Breadcrumb } from "react-bootstrap";

export default function BreadcrumbCustom({ breadcrumb }) {
  return (
    <Breadcrumb className="breadcrumb-custom">
      {breadcrumb.map((slide, index) =>
        index < breadcrumb.length - 1 ? (
          <Breadcrumb.Item key={index} href={slide.link}>
            {slide.title}
          </Breadcrumb.Item>
        ) : (
          <Breadcrumb.Item key={index} active>
            {slide.title}
          </Breadcrumb.Item>
        )
      )}
    </Breadcrumb>
  );
}
