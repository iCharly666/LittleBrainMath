import React from "react";
import "./Slider.css";

const slidesInfo = [
  {
    src:
      "https://firebasestorage.googleapis.com/v0/b/littlebrainmath.appspot.com/o/principe.jpeg?alt=media&token=1c29ea8a-d16a-4a45-9a52-f3325ff855a0",
    alt: "Project 1",
    desc: "El principito",
  },
  {
    src:
      "https://firebasestorage.googleapis.com/v0/b/littlebrainmath.appspot.com/o/libros2.jpeg?alt=media&token=0ac3dbc1-f86a-4426-828c-3ff315e83b85",
    alt: "Project 2",
    desc: "Formas, números",
  },
  {
    src:
      "https://firebasestorage.googleapis.com/v0/b/littlebrainmath.appspot.com/o/librosss.jpeg?alt=media&token=e6c28f50-06b0-446b-87ca-c3ca5ab6ee7c",
    alt: "Project 3",
    desc: "Luz de estrellas",
  },
];

const slides = slidesInfo.map((slide) => (
  <div className="slide-container">
    <img src={slide.src} alt={slide.alt} />
    <div className="slide-desc">
      <span>{slide.desc}</span>
    </div>
  </div>
));

export default slides;
