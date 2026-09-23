import React, { useState } from 'react';
import { Sparkles, Check } from 'lucide-react';
import { MagneticBtn } from '../common/MagneticBtn';

interface PricingProps {
  onSelectPlan: (planName: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section className="pricing-section" id="tarifas">
      <div className="container">
        <div className="text-center">
          <div className="section-tag">
            <Sparkles size={12} strokeWidth={1.5} className="tag-sparkle" />
            <span>Tarifas Exclusivas</span>
          </div>
          <h2 className="section-title">Inversión en tu Bienestar</h2>
          <p className="section-subtitle">
            Elige entre membresías mensuales ilimitadas o bonos flexibles con máxima libertad de horario.
          </p>

          <div className="pricing-toggle-wrap">
            <button
              onClick={() => setIsMonthly(true)}
              className={`pricing-toggle-btn ${isMonthly ? 'active' : ''}`}
            >
              Membresías Mensuales
            </button>
            <button
              onClick={() => setIsMonthly(false)}
              className={`pricing-toggle-btn ${!isMonthly ? 'active' : ''}`}
            >
              Bonos Flexibles
            </button>
          </div>
        </div>

        <div className="pricing-grid">
          {/* Tier 1 */}
          <div className="pricing-card">
            <div className="pricing-header">
              <h3>Atelier Essentiel</h3>
              <p>{isMonthly ? '4 sesiones mensuales en grupo reducido' : '1 sesión suelta en reformer'}</p>
            </div>

            <div className="pricing-price">
              <span className="price-currency">€</span>
              <span className="price-number">{isMonthly ? '115' : '32'}</span>
              <span className="price-period">{isMonthly ? '/mes' : '/clase'}</span>
            </div>

            <ul className="pricing-features">
              <li>
                <Check size={16} strokeWidth={2} className="feature-check" />
                <span>{isMonthly ? '1 clase semanal a tu elección' : 'Acceso a cualquier horario'}</span>
              </li>
              <li>
                <Check size={16} strokeWidth={2} className="feature-check" />
                <span>Servicio de toalla de eucalipto</span>
              </li>
              <li>
                <Check size={16} strokeWidth={2} className="feature-check" />
                <span>Reserva prioritaria con 7 días de antelación</span>
              </li>
              <li>
                <Check size={16} strokeWidth={2} className="feature-check" />
                <span>Cancelación gratuita hasta 12h antes</span>
              </li>
            </ul>

            <button
              onClick={() => onSelectPlan('Atelier Essentiel')}
              className="btn btn-secondary select-plan-btn"
            >
              Seleccionar Plan
            </button>
          </div>

          {/* Tier 2 (Featured) */}
          <div className="pricing-card featured">
            <div className="featured-ribbon">
              <Sparkles size={11} strokeWidth={1.5} style={{ display: 'inline', marginRight: '4px' }} />
              La Más Codiciada
            </div>

            <div className="pricing-header">
              <h3>Aura Signature</h3>
              <p>{isMonthly ? '8 sesiones mensuales en grupo reducido (2/sem)' : 'Bono flexible de 5 clases'}</p>
            </div>

            <div className="pricing-price">
              <span className="price-currency">€</span>
              <span className="price-number">{isMonthly ? '195' : '145'}</span>
              <span className="price-period">{isMonthly ? '/mes' : '/bono 5'}</span>
            </div>

            <ul className="pricing-features">
              <li>
                <Check size={16} strokeWidth={2} className="feature-check" />
                <span>{isMonthly ? '2 clases semanales en reformer' : '5 clases con validez de 3 meses'}</span>
              </li>
              <li>
                <Check size={16} strokeWidth={2} className="feature-check" />
                <span>Matcha Latte o café de cortesía post-sesión</span>
              </li>
              <li>
                <Check size={16} strokeWidth={2} className="feature-check" />
                <span>Calcetines de agarre AURA de bienvenida</span>
              </li>
              <li>
                <Check size={16} strokeWidth={2} className="feature-check" />
                <span>Acceso prioritario a masterclasses de sonido</span>
              </li>
            </ul>

            <MagneticBtn
              onClick={() => onSelectPlan('Aura Signature')}
              className="btn btn-gold select-plan-btn"
            >
              Elegir Membresía Signature
            </MagneticBtn>
          </div>

          {/* Tier 3 */}
          <div className="pricing-card">
            <div className="pricing-header">
              <h3>Sanctuary VIP Privé</h3>
              <p>{isMonthly ? 'Acceso ilimitado a grupos + 2 privadas' : 'Bono flexible de 10 clases'}</p>
            </div>

            <div className="pricing-price">
              <span className="price-currency">€</span>
              <span className="price-number">{isMonthly ? '340' : '270'}</span>
              <span className="price-period">{isMonthly ? '/mes' : '/bono 10'}</span>
            </div>

            <ul className="pricing-features">
              <li>
                <Check size={16} strokeWidth={2} className="feature-check" />
                <span>{isMonthly ? 'Clases ilimitadas en cualquier franja' : '10 clases con validez de 6 meses'}</span>
              </li>
              <li>
                <Check size={16} strokeWidth={2} className="feature-check" />
                <span>{isMonthly ? '2 Sesiones Privadas 1-on-1 al mes' : '1 Invitación para acompañante'}</span>
              </li>
              <li>
                <Check size={16} strokeWidth={2} className="feature-check" />
                <span>Taquilla permanente privada en vestidor de mármol</span>
              </li>
              <li>
                <Check size={16} strokeWidth={2} className="feature-check" />
                <span>Bebidas ilimitadas en nuestro Matcha Bar</span>
              </li>
            </ul>

            <button
              onClick={() => onSelectPlan('Sanctuary VIP Privé')}
              className="btn btn-secondary select-plan-btn"
            >
              Solicitar Acceso VIP
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
