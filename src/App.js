import React, { useState, useEffect } from "react";
import "./App.css";
import { Outlet } from 'react-router';
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer"


function App() {
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

      <Navbar />

      <Footer />
      <Outlet />



    </div>
  );
}

export default App;
