import React from 'react';
import { Sparkles } from 'lucide-react';
import { SpotlightCard } from '../common/SpotlightCard';

export const Philosophy: React.FC = () => {
  const pillars = [
    {
      num: '01',
      title: 'Precisión & Alineación',
      desc: 'Cada movimiento parte del powerhouse o centro de poder. Trabajamos la musculatura estabilizadora profunda, perfeccionando la postura y liberando tensiones acumuladas en la columna.'
    },
    {
      num: '02',
      title: 'Fluidez & Respiración',
      desc: 'La respiración diafragmática guía las transiciones en el reformer. La resistencia progresiva de los muelles esculpe fibras musculares largas y tonificadas sin sobrecargar las articulaciones.'
    },
    {
      num: '03',
      title: 'Calma & Restauración',
      desc: 'Finalizamos cada sesión con estiramientos asistidos y aromaterapia de lavanda y salvia silvestre, permitiendo que tu sistema nervioso descanse en un estado de profunda calma.'
    }
  ];

  return (
    <section className="philosophy-section" id="filosofia">
      <div className="container">
        <div className="text-center">
          <div className="section-tag">
            <Sparkles size={12} strokeWidth={1.5} className="tag-sparkle" />
            <span>Nuestra Filosofía</span>
          </div>
          <h2 className="section-title">El Método AURA & FORME</h2>
          <p className="section-subtitle">
            Inspirado en la danza clásica y el control de Joseph Pilates, nuestro enfoque esculpe una musculatura esbelta y alargada mientras cultiva una postura regia y una mente serena.
          </p>
        </div>

        <div className="philosophy-grid">
          {pillars.map((pillar, idx) => (
            <SpotlightCard key={idx} className="philosophy-card">
              <div className="card-num">{pillar.num}</div>
              <div>
                <h3>{pillar.title}</h3>
                <p>{pillar.desc}</p>
              </div>
            </SpotlightCard>
          ))}
        </div>

        <div className="philosophy-quote-banner">
          <p>
            "En diez sesiones sentirás la diferencia, en veinte sesiones verás la diferencia, y en treinta sesiones tendrás un cuerpo totalmente nuevo."
          </p>
          <span>— Joseph Pilates ✦ Atelier Philosophy</span>
        </div>
      </div>
    </section>
  );
};
