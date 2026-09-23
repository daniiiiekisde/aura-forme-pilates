import React, { useState } from 'react';
import { X, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { MagneticBtn } from '../common/MagneticBtn';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  sessionData: {
    title: string;
    time?: string;
    instructor?: string;
    day?: string;
  } | null;
  onConfirm: (name: string, email: string) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  sessionData,
  onConfirm
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');

  if (!isOpen || !sessionData) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) return;

    // Trigger subtle golden celebration confetti
    try {
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.65 },
        colors: ['#C5A880', '#DFC7A5', '#FDFBF7', '#1C1816']
      });
    } catch {
      // Ignore if canvas-confetti fails
    }

    onConfirm(name, email);
    setName('');
    setEmail('');
    setPhone('');
    setNotes('');
  };

  return (
    <div className="modal-overlay active" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="modal-close-btn" aria-label="Cerrar modal">
          <X size={20} strokeWidth={1.5} />
        </button>

        <div className="modal-header">
          <div className="section-tag" style={{ marginBottom: '0.5rem' }}>
            <Sparkles size={11} strokeWidth={1.5} className="tag-sparkle" />
            <span>Reserva de Plaza</span>
          </div>
          <h3>{sessionData.title}</h3>
        </div>

        <div className="modal-class-summary">
          <strong>Sesión Seleccionada:</strong> {sessionData.title}<br />
          {sessionData.time && (
            <>
              <strong>Horario:</strong> {sessionData.time} ({sessionData.day || 'Próxima Sesión'}) ✦ <strong>Instructora:</strong> {sessionData.instructor || 'Certificada'}<br />
            </>
          )}
          <span style={{ color: 'var(--accent-gold-dark)', fontSize: '0.8rem' }}>
            ✦ Toalla de eucalipto, taquilla privada y bebida ceremonial incluidas
          </span>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="clientName">Nombre Completo</label>
            <input
              type="text"
              id="clientName"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-input"
              placeholder="Ej. Valentina Morales"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="clientEmail">Correo Electrónico</label>
            <input
              type="email"
              id="clientEmail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
              placeholder="valentina@ejemplo.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="clientPhone">Teléfono Móvil</label>
            <input
              type="tel"
              id="clientPhone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-input"
              placeholder="+34 600 000 000"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="clientNotes">¿Alguna lesión o condición especial?</label>
            <input
              type="text"
              id="clientNotes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="form-input"
              placeholder="Ej. Molestia lumbar leve, embarazo..."
            />
          </div>

          <MagneticBtn
            type="submit"
            className="btn btn-gold"
            style={{ width: '100%', marginTop: '1.25rem' }}
          >
            <span>Confirmar Reserva de Plaza</span>
            <Sparkles size={15} strokeWidth={1.5} />
          </MagneticBtn>
        </form>
      </div>
    </div>
  );
};
