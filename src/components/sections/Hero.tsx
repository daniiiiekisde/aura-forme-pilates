import React from 'react';
import { Sparkles, Coffee, Users, ArrowRight } from 'lucide-react';
import { MagneticBtn } from '../common/MagneticBtn';
import { ShinyText } from '../common/ShinyText';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="hero-section" id="heroSection">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="section-tag">
            <Sparkles size={12} strokeWidth={1.5} className="tag-sparkle" />
            <span>Santuario Boutique de Movimiento</span>
          </div>

          <h1 className="hero-headline">
            Esculpe tu fuerza,<br />
            <em>eleva tu calma</em>
            <span className="cursive-gold">
              <ShinyText text="Sanctuary" speed={5} />
            </span>
          </h1>

          <p className="hero-description">
            Un espacio consagrado a la precisión anatómica, el alargamiento muscular y la serenidad interior. Nuestras camas Reformer Allegro 2 y grupos íntimos de seis personas redefinen la experiencia de tu bienestar diario.
          </p>

          <div className="hero-cta-group">
            <MagneticBtn onClick={onOpenBooking} className="btn btn-gold">
              <span>Reservar Primera Clase</span>
              <ArrowRight size={15} strokeWidth={1.5} />
            </MagneticBtn>

            <a href="#quizSection" className="btn btn-secondary">
              <span>Encontrar mi Clase Ideal</span>
              <Sparkles size={14} strokeWidth={1.5} className="text-accent-gold" />
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <h4>Allegro 2</h4>
              <p>Reformer Studio</p>
            </div>
            <div className="stat-item">
              <h4>Máx. 6</h4>
              <p>Alumnas por sesión</p>
            </div>
            <div className="stat-item">
              <h4>Ceremonial</h4>
              <p>Matcha & Café Bar</p>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-card">
            <img
              src="/assets/images/hero-studio.jpg"
              alt="Interior luminoso del estudio de Pilates AURA & FORME con reformers de roble claro y luz de mañana"
              className="hero-img"
            />
          </div>

          {/* Floating Pill 1 */}
          <div className="floating-pill floating-pill-1">
            <div className="pill-icon">
              <Users size={16} strokeWidth={1.5} />
            </div>
            <div className="pill-text">
              <h5>Grupos Reducidos</h5>
              <p>Atención personalizada</p>
            </div>
          </div>

          {/* Floating Pill 2 */}
          <div className="floating-pill floating-pill-2">
            <div className="pill-icon">
              <Coffee size={16} strokeWidth={1.5} />
            </div>
            <div className="pill-text">
              <h5>Matcha & Latte Bar</h5>
              <p>Incluido tras tu sesión</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
