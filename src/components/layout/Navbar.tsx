import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, Sparkles } from 'lucide-react';
import { AudioPlayer } from './AudioPlayer';
import { MagneticBtn } from '../common/MagneticBtn';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenBooking: () => void;
  onOpenMobileMenu: () => void;
  onToast: (msg: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenBooking,
  onOpenMobileMenu,
  onToast
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="top-ticker">
        <span>Nueva Temporada: Reformer Sculpt & Matcha Lounge</span>
        <Sparkles size={11} strokeWidth={1.5} className="ticker-sparkle" />
        <span>Grupos Reducidos (Máx. 6)</span>
        <Sparkles size={11} strokeWidth={1.5} className="ticker-sparkle" />
        <span>Reserva tu Sesión de Iniciación</span>
      </div>

      {/* Floating Glass Navbar */}
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <a href="#" className="nav-logo" aria-label="Ir al inicio de AURA & FORME">
          <span className="logo-main">AURA & FORME</span>
          <span className="logo-sub">Atelier de Pilates ✦ Madrid</span>
        </a>

        <nav className="desktop-nav">
          <ul className="nav-links">
            <li><a href="#filosofia" className="nav-link">El Método</a></li>
            <li><a href="#experiencia" className="nav-link">El Estudio</a></li>
            <li><a href="#horarios" className="nav-link">Horarios</a></li>
            <li><a href="#tarifas" className="nav-link">Membresías</a></li>
            <li><a href="#moodboard" className="nav-link">Life Lately</a></li>
            <li><a href="#boutique" className="nav-link">Boutique</a></li>
            <li><a href="#faq" className="nav-link">FAQ</a></li>
          </ul>
        </nav>

        <div className="nav-actions">
          {/* Audio 432Hz Player */}
          <AudioPlayer onToast={onToast} />

          {/* Cart Trigger */}
          <button
            onClick={onOpenCart}
            className="cart-trigger"
            aria-label={`Abrir cesta con ${cartCount} productos`}
          >
            <ShoppingBag size={18} strokeWidth={1.5} />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </button>

          {/* Desktop CTA */}
          <div className="nav-cta-desktop">
            <MagneticBtn
              onClick={onOpenBooking}
              className="btn btn-primary"
            >
              Reservar Sesión
            </MagneticBtn>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={onOpenMobileMenu}
            className="mobile-menu-trigger"
            aria-label="Abrir menú de navegación"
          >
            <Menu size={22} strokeWidth={1.5} />
          </button>
        </div>
      </header>
    </>
  );
};
