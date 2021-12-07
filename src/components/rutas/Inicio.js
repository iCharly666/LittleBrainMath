import React, { useState, useEffect } from "react";
import "./Inicio.css";

import Cover from "../cover/Cover";
import About from "../about/About";
import Slider from "../slider/Slider";
import Info from "../info/Info";
import Cards from "../cards/Cards";


function Inicio() {
    const [scrollHeight, setScrollHeight] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollHeight(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, [scrollHeight]);

    return (
        <div className="App">

            <Cover />
            <About />
            <Slider />
            <Cards />
            <Info />

        </div>
    );
}

export default Inicio;