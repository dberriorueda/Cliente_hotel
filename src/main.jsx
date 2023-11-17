import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from './Home/Home';
import { Carrusel } from './Carrusel/Carousel';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
    <Carrusel/>
  </React.StrictMode>,
)
