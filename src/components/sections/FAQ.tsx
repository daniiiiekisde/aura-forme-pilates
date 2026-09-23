import React, { useState } from 'react';
import { Sparkles, Plus } from 'lucide-react';

interface FAQItem {
  q: string;
  a: string;
}

export const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      q: '¿Qué vestimenta debo traer a la clase?',
      a: 'Recomendamos ropa deportiva cómoda y elástica que te permita moverte con libertad (leggings, tops o monos ajustados para que la instructora pueda observar tu alineación). Por motivos de higiene y seguridad en el reformer, el uso de calcetines de agarre (grip socks) es obligatorio. Si no posees unos, disponemos de nuestra colección exclusiva en recepción.'
    },
    {
      q: 'Nunca he practicado Pilates Reformer, ¿puedo asistir?',
      a: '¡Por supuesto! Al contar con un aforo estricto de solo 6 alumnas por clase, nuestras instructoras adaptan los muelles y las progresiones a tu nivel de manera individual. Si es tu primera experiencia, te sugerimos la modalidad Reformer Classic Flow o una sesión privada de iniciación.'
    },
    {
      q: '¿Cómo funciona la política de cancelación de clases?',
      a: 'Entendemos los imprevistos de la rutina diaria. Puedes cancelar o reprogramar tu sesión sin penalización alguna hasta con 12 horas de antelación desde tu perfil de reservas o contactando a nuestro concierge de WhatsApp.'
    },
    {
      q: '¿Qué servicios están incluidos con mi clase?',
      a: 'Todas nuestras alumnas disfrutan de taquillas con llave, vestidores de mármol con amenities botánicos de cuidado personal, toallas frías aromatizadas al concluir la sesión y una taza de té matcha ceremonial o café de especialidad en nuestro lounge de bienvenida.'
    }
  ];

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="text-center">
          <div className="section-tag">
            <Sparkles size={12} strokeWidth={1.5} className="tag-sparkle" />
            <span>Resolvemos tus Dudas</span>
          </div>
          <h2 className="section-title">Preguntas Frecuentes</h2>
          <p className="section-subtitle">
            Todo lo que precisas saber antes de tu primera visita a nuestro estudio.
          </p>
        </div>

        <div className="faq-accordion-wrap">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className={`faq-item ${isOpen ? 'open' : ''}`}>
                <button
                  onClick={() => toggle(idx)}
                  className="faq-question-btn"
                  aria-expanded={isOpen}
                >
                  <h4>{faq.q}</h4>
                  <div className={`faq-icon-wrapper ${isOpen ? 'rotated' : ''}`}>
                    <Plus size={18} strokeWidth={1.5} />
                  </div>
                </button>
                <div
                  className="faq-answer-collapsible"
                  style={{
                    maxHeight: isOpen ? '300px' : '0px',
                    opacity: isOpen ? 1 : 0
                  }}
                >
                  <p>{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
