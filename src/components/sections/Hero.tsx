import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Heart, Coffee } from 'lucide-react';
import { MagneticBtn } from '../common/MagneticBtn';
import { ShinyText } from '../common/ShinyText';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="hero-section" id="heroSection">
      <div className="container hero-grid">
        {/* Left Column: Serene Content */}
        <div className="hero-content">
          <div className="section-tag hero-tag-calm">
            <Sparkles size={11} strokeWidth={1.5} className="tag-sparkle" />
            <span>Santuario de Movimiento Consciente ✦ Madrid</span>
          </div>

          <h1 className="hero-headline hero-headline-calm">
            Esculpe tu cuerpo con precisión,<br />
            <em>encuentra tu serenidad</em>
            <span className="cursive-gold">
              <ShinyText text="Sanctuary" speed={6} />
            </span>
          </h1>

          <p className="hero-description hero-desc-calm">
            Un espacio concebido para pausar el ritmo del mundo exterior y reconectar con la fuerza profunda de tu centro. Camas Reformer Allegro 2 de roble claro, luz natural envolvente y grupos reducidos de máximo seis alumnas para una práctica íntima, precisa y reparadora.
          </p>

          <div className="hero-cta-group hero-cta-calm">
            <MagneticBtn onClick={onOpenBooking} className="btn btn-gold">
              <span>Reservar Sesión de Iniciación</span>
              <ArrowRight size={14} strokeWidth={1.5} />
            </MagneticBtn>

            <a href="#filosofia" className="btn btn-secondary hero-btn-subtle">
              <span>Conocer el Método</span>
            </a>
          </div>

          {/* Serene Zen Attributes Strip */}
          <div className="hero-zen-strip">
            <div className="zen-item">
              <ShieldCheck size={14} strokeWidth={1.5} className="zen-icon" />
              <span>Máx. 6 alumnas</span>
            </div>
            <span className="zen-divider">✦</span>
            <div className="zen-item">
              <Heart size={14} strokeWidth={1.5} className="zen-icon" />
              <span>Reformer Allegro 2 de roble</span>
            </div>
            <span className="zen-divider">✦</span>
            <div className="zen-item">
              <Coffee size={14} strokeWidth={1.5} className="zen-icon" />
              <span>Matcha Bar &amp; Eucalipto</span>
            </div>
          </div>
        </div>

        {/* Right Column: Serene Clean Visual without distracting bouncy floating pills */}
        <div className="hero-visual">
          <div className="hero-image-frame-calm">
            <img
              src="/assets/images/hero-studio.jpg"
              alt="Estudio luminoso de Pilates Reformer con luz de sol cálida y máquinas de madera de roble"
              className="hero-img-calm"
            />
            <div className="hero-image-caption">
              <span>SALA PRINCIPAL REFORMER ✦ LUZ NATURAL MATUTINA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
