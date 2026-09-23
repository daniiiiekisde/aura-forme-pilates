import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, Sparkles, Copy, Check, X, ArrowRight } from 'lucide-react';
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
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyCode = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText('AURA20').catch(() => {});
    setCopied(true);
    onToast('✦ Código AURA20 copiado al portapapeles (-20% de cortesía)');
    setTimeout(() => setCopied(false), 3000);
  };

  const handleApplyDiscount = () => {
    onToast('✦ Descuento de bienvenida AURA20 aplicado');
    onOpenBooking();
  };

  return (
    <div className="header-wrapper">
      {/* ==================== TOP LUXURY DISCOUNT BANNER ==================== */}
      {isBannerVisible && (
        <aside className="top-discount-bar" aria-label="Descuento de bienvenida">
          <div className="discount-inner">
            <div className="discount-content">
              <span className="discount-badge">
                <Sparkles size={11} strokeWidth={1.5} />
                Privilegio de Bienvenida
              </span>

              <p className="discount-text">
                Disfruta de un <strong className="discount-highlight">20% de cortesía</strong> en tu primer bono de 5 sesiones con el código:
              </p>

              <button
                onClick={handleCopyCode}
                className={`discount-code-pill ${copied ? 'copied' : ''}`}
                title="Haga clic para copiar el código"
                aria-label="Copiar código promocional AURA20"
              >
                <span>AURA20</span>
                {copied ? (
                  <Check size={12} strokeWidth={2} className="code-icon" />
                ) : (
                  <Copy size={12} strokeWidth={1.5} className="code-icon" />
                )}
              </button>

              <button
                onClick={handleApplyDiscount}
                className="discount-cta-link"
              >
                <span>Reservar con Descuento</span>
                <ArrowRight size={12} strokeWidth={1.5} />
              </button>
            </div>

            <button
              onClick={() => setIsBannerVisible(false)}
              className="discount-dismiss-btn"
              aria-label="Cerrar barra de descuento"
            >
              <X size={14} strokeWidth={1.5} />
            </button>
          </div>
        </aside>
      )}

      {/* ==================== LUXURY ARCHITECTURAL NAVBAR ==================== */}
      <header className={`navbar-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Brand Logo */}
          <a href="#" className="nav-brand" aria-label="AURA & FORME Inicio">
            <span className="brand-title">AURA &amp; FORME</span>
            <span className="brand-subtitle">
              STUDIO &amp; SANCTUARY <span className="brand-sep">✦</span> MADRID
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="nav-desktop-menu" aria-label="Navegación principal">
            <ul className="nav-desktop-list">
              <li><a href="#filosofia" className="nav-desktop-link">El Método</a></li>
              <li><a href="#experiencia" className="nav-desktop-link">El Estudio</a></li>
              <li><a href="#horarios" className="nav-desktop-link">Horarios</a></li>
              <li><a href="#tarifas" className="nav-desktop-link">Membresías</a></li>
              <li><a href="#moodboard" className="nav-desktop-link">Life Lately</a></li>
              <li><a href="#boutique" className="nav-desktop-link">Boutique</a></li>
              <li><a href="#faq" className="nav-desktop-link">FAQ</a></li>
            </ul>
          </nav>

          {/* Action Cluster (Right) */}
          <div className="nav-action-cluster">
            {/* Shopping Cart Bag */}
            <button
              onClick={onOpenCart}
              className="nav-cart-btn"
              aria-label={`Abrir cesta de compras con ${cartCount} productos`}
            >
              <ShoppingBag size={18} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="nav-cart-badge">{cartCount}</span>
              )}
            </button>

            {/* Primary Action Button */}
            <div className="nav-cta-wrapper">
              <MagneticBtn
                onClick={onOpenBooking}
                className="btn btn-primary nav-cta-btn"
              >
                <span>Reservar Clase</span>
              </MagneticBtn>
            </div>

            {/* Mobile Menu Trigger */}
            <button
              onClick={onOpenMobileMenu}
              className="nav-mobile-toggle"
              aria-label="Abrir menú de navegación móvil"
            >
              <Menu size={22} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};
