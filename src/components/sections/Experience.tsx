import React from 'react';
import { Sparkles, Wind, Coffee, ArrowRight } from 'lucide-react';
import { MagneticBtn } from '../common/MagneticBtn';

interface ExperienceProps {
  onOpenBooking: () => void;
}

export const Experience: React.FC<ExperienceProps> = ({ onOpenBooking }) => {
  return (
    <section className="experience-section" id="experiencia">
      <div className="container experience-grid">
        <div className="experience-gallery">
          <div className="gallery-card gallery-card-tall">
            <img
              src="/assets/images/reformer-movement.jpg"
              alt="Mujer realizando ejercicio de Pilates Reformer con elegancia y alineación perfecta"
            />
          </div>
          <div className="gallery-card">
            <img
              src="/assets/images/sculpt-straps.jpg"
              alt="Detalle de correas de cuero y anillos dorados en cama de Pilates"
            />
          </div>
          <div className="gallery-card">
            <img
              src="/assets/images/sanctuary-lounge.jpg"
              alt="Zona lounge del estudio con sofá bouclé y decoración minimalista cálida"
            />
          </div>
        </div>

        <div className="experience-content">
          <div className="section-tag">
            <Sparkles size={12} strokeWidth={1.5} className="tag-sparkle" />
            <span>El Santuario</span>
          </div>

          <h2>Un espacio pensado para desconectar del mundo exterior</h2>
          <p className="hero-description">
            Diseñado con materiales nobles como madera de roble natural, mármol de Carrara, lino orgánico y tonos arena. Cada rincón está bañado en luz natural y perfumado con nuestra esencia botánica personalizada.
          </p>

          <ul className="experience-feature-list">
            <li className="exp-feature-item">
              <div className="exp-feature-icon">
                <Sparkles size={16} strokeWidth={1.5} />
              </div>
              <div className="exp-feature-text">
                <h4>Reformer Allegro 2 de Última Generación</h4>
                <p>Reconocidas mundialmente por su deslizamiento ultra silencioso y versatilidad para una alineación corporal sin impacto articular.</p>
              </div>
            </li>

            <li className="exp-feature-item">
              <div className="exp-feature-icon">
                <Wind size={16} strokeWidth={1.5} />
              </div>
              <div className="exp-feature-text">
                <h4>Toallas Frías con Infusión de Eucalipto</h4>
                <p>Servicio exclusivo de toallas aromatizadas y bruma facial orgánica al concluir tu práctica para una recuperación sensorial.</p>
              </div>
            </li>

            <li className="exp-feature-item">
              <div className="exp-feature-icon">
                <Coffee size={16} strokeWidth={1.5} />
              </div>
              <div className="exp-feature-text">
                <h4>Lounge & Matcha Bar Privado</h4>
                <p>Disfruta de un Iced Oat Matcha Latte de grado ceremonial o café de especialidad mientras compartes momentos con la comunidad.</p>
              </div>
            </li>
          </ul>

          <div style={{ marginTop: '2.5rem' }}>
            <MagneticBtn onClick={onOpenBooking} className="btn btn-primary">
              <span>Reservar mi Visita</span>
              <ArrowRight size={15} strokeWidth={1.5} />
            </MagneticBtn>
          </div>
        </div>
      </div>
    </section>
  );
};
