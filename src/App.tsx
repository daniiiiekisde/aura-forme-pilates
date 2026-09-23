import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { MobileDrawer } from './components/layout/MobileDrawer';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Philosophy } from './components/sections/Philosophy';
import { Experience } from './components/sections/Experience';
import { Schedule } from './components/sections/Schedule';
import { Quiz } from './components/sections/Quiz';
import { Pricing } from './components/sections/Pricing';
import { Moodboard } from './components/sections/Moodboard';
import { Boutique } from './components/sections/Boutique';
import { FAQ } from './components/sections/FAQ';
import { BookingModal } from './components/modals/BookingModal';
import { LightboxModal } from './components/modals/LightboxModal';
import { CartDrawer, CartItem } from './components/modals/CartDrawer';
import { Toast } from './components/common/Toast';
import { Product } from './data/productsData';
import { MoodTile } from './data/moodboardData';

export const App: React.FC = () => {
  // Cart State
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Mobile Menu State
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Booking Modal State
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedSession, setSelectedSession] = useState<{
    title: string;
    time?: string;
    instructor?: string;
    day?: string;
  } | null>(null);

  // Lightbox Modal State
  const [selectedMoodTile, setSelectedMoodTile] = useState<MoodTile | null>(null);

  // Toast Notification State
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const toastTimeoutRef = React.useRef<number | null>(null);

  const showToast = (msg: string) => {
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    setToastMessage(msg);
    toastTimeoutRef.current = window.setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  // Cart Handlers
  const handleAddToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
    showToast(`✦ ${product.name} añadido a tu bolsa de compra`);
  };

  const handleRemoveFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
    showToast('✦ Producto retirado de tu cesta');
  };

  const handleCheckout = () => {
    setCart([]);
    setIsCartOpen(false);
    showToast('✦ Pedido privado registrado. Nuestro concierge te contactará para la entrega');
  };

  // Booking Handlers
  const handleOpenBooking = (session?: { title: string; time?: string; instructor?: string; day?: string }) => {
    setSelectedSession(session || { title: 'Reformer Sculpt & Tone (Sesión Abierta)' });
    setIsBookingOpen(true);
  };

  const handleConfirmBooking = (name: string, email: string) => {
    setIsBookingOpen(false);
    showToast(`✦ ¡Plaza confirmada para ${name}! Detalles enviados a ${email}`);
  };

  const cartTotalCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="aura-app-wrapper">
      {/* Navbar with floating design */}
      <Navbar
        cartCount={cartTotalCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenBooking={() => handleOpenBooking()}
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
        onToast={showToast}
      />

      {/* Luxury Full-screen Mobile Drawer */}
      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenBooking={() => handleOpenBooking()}
        cartCount={cartTotalCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenBooking={() => handleOpenBooking()} />
        <Philosophy />
        <Experience onOpenBooking={() => handleOpenBooking()} />
        <Schedule onSelectClass={(session) => handleOpenBooking(session)} />
        <Quiz
          onOpenBookingForClass={(className) => handleOpenBooking({ title: className })}
          onToast={showToast}
        />
        <Pricing onSelectPlan={(plan) => handleOpenBooking({ title: `Membresía ${plan}` })} />
        <Moodboard onOpenLightbox={(tile) => setSelectedMoodTile(tile)} />
        <Boutique onAddToCart={handleAddToCart} />
        <FAQ />
      </main>

      {/* Footer & Club VIP */}
      <Footer onToast={showToast} />

      {/* Modals & Drawers */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        sessionData={selectedSession}
        onConfirm={handleConfirmBooking}
      />

      <LightboxModal
        tile={selectedMoodTile}
        onClose={() => setSelectedMoodTile(null)}
        onOpenBooking={() => handleOpenBooking()}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onRemoveItem={handleRemoveFromCart}
        onCheckout={handleCheckout}
      />

      {/* Toast Notification */}
      <Toast message={toastMessage} />
    </div>
  );
};

export default App;
