import React from 'react';
import './FeaturedServices.css';
import { Link } from 'react-router-dom';

interface ServiceProps {
  id: string;
  title: string;
  description: string;
  icon: string;
}

const FeaturedServices: React.FC = () => {
  const services: ServiceProps[] = [
    {
      id: "desarrollo-web",
      title: "Desarrollo Web",
      description: "Sitios web modernos, responsivos y optimizados para convertir visitantes en clientes.",
      icon: "💻"
    },
    {
      id: "redes-sociales",
      title: "Marketing Digital",
      description: "Estrategia de redes sociales coordinada con tu presencia web para maximizar resultados.",
      icon: "📱"
    },
    {
      id: "aplicaciones-moviles",
      title: "Aplicaciones Móviles",
      description: "Apps nativas que materializan tus ideas de negocio y mejoran la experiencia del cliente.",
      icon: "📲"
    }
  ];

  return (
    <section className="featured-services">
      <div className="section-header">
        <h2 className="section-title">Servicios Destacados</h2>
        <p className="section-subtitle">
          No somos un proveedor más. Somos el departamento de tecnología y marketing que tu empresa necesita.
        </p>
      </div>
      
      <div className="services-grid">
        {services.map(service => (
          <div className="service-card" key={service.id}>
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <Link to={`/servicio/${service.id}`} className="service-link">
              Conocer más <span className="arrow">→</span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedServices;
