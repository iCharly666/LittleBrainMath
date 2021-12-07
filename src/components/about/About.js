import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>Multimedia</h3>
        <p>Accede gratuitamente a tus contenidos favoritos:</p>
        <ul type="A">
          <li>Actividades</li>
          <li>Ejercicios</li>
          <li>Videotutoriales</li>
          <li>Libros</li>
        </ul>
      </div>
      <div className="about-img">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/littlebrainmath.appspot.com/o/multimedia.jpeg?alt=media&token=f0bf5287-f234-4d84-b8c2-df4991f8b02f"
          alt="about"
        />
      </div>
    </div>
  );
};

export default About;