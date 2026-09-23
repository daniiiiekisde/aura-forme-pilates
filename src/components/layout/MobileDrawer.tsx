import React from 'react';
import { X, Sparkles, Calendar, ShoppingBag, MessageCircle, ArrowRight } from 'lucide-react';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
  cartCount: number;
  onOpenCart: () => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  onClose,
  onOpenBooking,
  cartCount,
  onOpenCart
}) => {
  if (!isOpen) return null;

  const links = [
    { label: 'El Método', href: '#filosofia' },
    { label: 'El Estudio & Reformer', href: '#experiencia' },
    { label: 'Horarios de Clases', href: '#horarios' },
    { label: 'Membresías & Bonos', href: '#tarifas' },
    { label: 'Life Lately & Mood', href: '#moodboard' },
    { label: 'Boutique Atelier', href: '#boutique' },
    { label: 'Preguntas Frecuentes', href: '#faq' }
  ];

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div className="mobile-drawer-overlay" onClick={onClose}>
      <div className="mobile-drawer-card" onClick={(e) => e.stopPropagation()}>
        <div className="mobile-drawer-header">
          <div className="drawer-logo">
            <span className="logo-main">AURA & FORME</span>
            <span className="logo-sub">Atelier de Pilates</span>
          </div>
          <button
            onClick={onClose}
            className="drawer-close-btn"
            aria-label="Cerrar menú móvil"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        <nav className="mobile-drawer-nav">
          <ul className="drawer-links-list">
            {links.map((link, idx) => (
              <li key={idx} style={{ animationDelay: `${idx * 0.05}s` }}>
                <a href={link.href} onClick={handleLinkClick} className="drawer-link-item">
                  <span>{link.label}</span>
                  <ArrowRight size={14} strokeWidth={1.5} className="drawer-arrow" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mobile-drawer-footer">
          <div className="drawer-actions-row">
            <button
              onClick={() => {
                onClose();
                onOpenCart();
              }}
              className="drawer-action-btn"
            >
              <ShoppingBag size={18} strokeWidth={1.5} />
              <span>Bolsa ({cartCount})</span>
            </button>

            <a
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
              className="drawer-action-btn"
            >
              <MessageCircle size={18} strokeWidth={1.5} />
              <span>Concierge</span>
            </a>
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenBooking();
            }}
            className="btn btn-gold btn-full"
          >
            <Calendar size={16} strokeWidth={1.5} style={{ marginRight: '6px' }} />
            Reservar Sesión de Cortesía
          </button>

          <p className="drawer-address">
            <Sparkles size={12} strokeWidth={1.5} style={{ display: 'inline', marginRight: '4px', color: 'var(--accent-gold)' }} />
            Calle de Claudio Coello 42, Salamanca, Madrid
          </p>
        </div>
      </div>
    </div>
  );
};
