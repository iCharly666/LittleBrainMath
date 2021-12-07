import React from "react";
import Card from "./Card";

import image1 from "../../assets/act1.jpg"
import image2 from '../../assets/juegos.png'
import image3 from '../../assets/video1.jpeg'


const cards = [
    {
        id: 1,
        title: "Actividades",
        image: image1,
        url: "https://actividadesparapreescolar.net/actividades-de-matematicas-para-ninos-de-4-anos/",
    },
    {
        id: 2,
        title: "Juegos de matemáticas para niños",
        image: image2,
        url: "https://arbolabc.com/juegos-de-matematicas",
    },
    {
        id: 3,
        title: "Videos Educativos",
        image: image3,
        url: "https://www.youtube.com/watch?v=idSCY8HpeYU",
    },
];

function Cards() {
    return (
        <div className="container mt-5  d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {cards.map(({ title, image, url, id }) => (
                    <div className="col-md-4" key={id}>
                        <Card imageSource={image} title={title} url={url} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cards;