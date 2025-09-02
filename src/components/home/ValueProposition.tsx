import React from 'react';
import './ValueProposition.css';

interface ClientProfile {
  title: string;
  description: string;
  solutions: string[];
  icon: string;
}

const ValueProposition: React.FC = () => {
  const clientProfiles: ClientProfile[] = [
    {
      title: "Para el Empresario Básico",
      description: "Presencia digital simple y profesional",
      solutions: ["Sitio web + mantenimiento básico", "Redes sociales esenciales", "Soporte continuo"],
      icon: "🏠"
    },
    {
      title: "Para el Empresario en Crecimiento",
      description: "Herramientas para gestión y expansión",
      solutions: ["Aplicaciones personalizadas", "Marketing digital avanzado", "Sistemas de gestión específicos"],
      icon: "📈"
    },
    {
      title: "Para el Empresario Visionario",
      description: "Ecosistema tecnológico completo",
      solutions: ["Aplicaciones complejas integradas", "Estrategia digital integral", "Analytics y optimización"],
      icon: "🚀"
    }
  ];

  return (
    <section className="value-proposition">
      <div className="value-header">
        <h2 className="value-title">Nos Adaptamos a tu Visión</h2>
        <p className="value-subtitle">
          Como la nube, escalamos contigo según tu visión y presupuesto. Tu presupuesto y visión definen el alcance. Nosotros nos adaptamos, no tú.
        </p>
      </div>
      
      <div className="profiles-container">
        {clientProfiles.map((profile, index) => (
          <div className="profile-card" key={index}>
            <div className="profile-icon">{profile.icon}</div>
            <h3 className="profile-title">{profile.title}</h3>
            <p className="profile-description">{profile.description}</p>
            <ul className="profile-solutions">
              {profile.solutions.map((solution, i) => (
                <li key={i}>{solution}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="value-cta">
        <div className="cta-content">
          <h3>¿Listo para materializar tus planes de negocio?</h3>
          <p>Agenda una consulta gratuita y descubre cómo podemos ser tu departamento tecnológico.</p>
        </div>
        <a href="#contacto" className="cta-button">Contactar Ahora</a>
      </div>
    </section>
  );
};

export default ValueProposition;
