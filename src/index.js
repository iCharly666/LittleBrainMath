import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from "./App";
import Inicio from '../src/components/rutas/Inicio';
import Formulario from './components/rutas/formulario'

import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<Inicio />}></Route>
        <Route path='formulario' element={<Formulario />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
