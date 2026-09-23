import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface FooterProps {
  onToast: (msg: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onToast }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setEmail('');
    onToast('✦ ¡Bienvenida a nuestro Club Privado! Te mantendremos informada');
  };

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <h2>AURA & FORME</h2>
            <p>
              Santuario boutique de Pilates Reformer, movimiento consciente y estética atemporal. Espacio consagrado a tu bienestar integral.
            </p>
          </div>

          <div className="footer-col">
            <h4>Estudio</h4>
            <ul className="footer-links">
              <li><a href="#filosofia">El Método</a></li>
              <li><a href="#experiencia">Nuestras Reformers</a></li>
              <li><a href="#horarios">Horarios & Reservas</a></li>
              <li><a href="#tarifas">Membresías Privadas</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Santuario</h4>
            <ul className="footer-links">
              <li><a href="#boutique">Boutique & Grip Socks</a></li>
              <li><a href="#moodboard">Life Lately & Mood</a></li>
              <li><a href="#faq">Preguntas Frecuentes</a></li>
              <li><a href="#">Concierge Privado</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Club Privado</h4>
            <p style={{ fontSize: '0.85rem', color: '#A99F96', marginBottom: '1rem', lineHeight: '1.6' }}>
              Suscríbete para recibir invitaciones a meditaciones sonoras y nuevas cápsulas de la boutique.
            </p>
            <form onSubmit={handleSubmit} className="newsletter-form">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                className="newsletter-input"
                required
              />
              <button type="submit" className="btn btn-gold newsletter-submit-btn" aria-label="Suscribirse">
                <ArrowRight size={16} strokeWidth={1.5} />
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            <Sparkles size={12} strokeWidth={1.5} style={{ display: 'inline', marginRight: '6px', color: 'var(--accent-gold)' }} />
            © 2026 AURA & FORME STUDIO S.L. Calle de Claudio Coello 42, Barrio de Salamanca, Madrid.
          </div>
          <div>Aviso Legal ✦ Privacidad ✦ Cookies</div>
        </div>
      </div>
    </footer>
  );
};
