import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">El Socio Tecnológico de las PyMEs</h1>
        <p className="hero-subtitle">
          Tu visión, nuestra ejecución. Tecnología y marketing coordinados para materializar tus planes de negocio.
        </p>
        <div className="hero-buttons">
          <Link to="/servicio/desarrollo-web" className="primary-button">
            Conoce Nuestros Servicios
          </Link>
          <Link to="/proyectos" className="secondary-button">
            Ver Proyectos
          </Link>
        </div>
      </div>
      <div className="hero-gradient"></div>
    </div>
  );
};

export default Hero;
