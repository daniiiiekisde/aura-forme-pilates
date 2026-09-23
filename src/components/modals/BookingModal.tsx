import React, { useState, useEffect } from 'react';
import { X, Sparkles, Check, ArrowRight, ArrowLeft, Calendar, Clock, User, Mail, Phone, ShieldCheck } from 'lucide-react';
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

const CLASS_OPTIONS = [
  { id: 'sculpt', name: 'Reformer Sculpt & Tone', level: 'Intensidad Media-Alta', focus: 'Tonificación, core profundo y glúteos' },
  { id: 'flow', name: 'Classical Reformer Flow', level: 'Todos los Niveles', focus: 'Alineación precisa y control postural' },
  { id: 'jumpboard', name: 'Athletic Jumpboard Cardio', level: 'Intermedio', focus: 'Cardio de bajo impacto articular' },
  { id: 'stretch', name: 'Yin & Deep Stretch Restore', level: 'Suave & Reparador', focus: 'Liberación miofascial y serenidad' }
];

const TIME_SLOTS = [
  { id: 'm1', time: '08:30', period: 'Mañana' },
  { id: 'm2', time: '10:00', period: 'Mañana' },
  { id: 'l1', time: '14:00', period: 'Mediodía' },
  { id: 'e1', time: '18:30', period: 'Tarde' },
  { id: 'e2', time: '20:00', period: 'Tarde' }
];

const DAYS = ['Hoy', 'Mañana', 'Jueves 01', 'Viernes 02', 'Sábado 03'];

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  sessionData,
  onConfirm
}) => {
  // Wizard Steps: 1 = Selección Clase/Turno, 2 = Datos Personales, 3 = Resumen y Confirmación, 4 = Pase de Éxito
  const [step, setStep] = useState(1);

  // Form State
  const [selectedClass, setSelectedClass] = useState(CLASS_OPTIONS[0].name);
  const [selectedDay, setSelectedDay] = useState(DAYS[0]);
  const [selectedSlot, setSelectedSlot] = useState(TIME_SLOTS[0].time);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [experience, setExperience] = useState('primera_vez');
  const [notes, setNotes] = useState('');
  const appliedPromo = 'AURA20';

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isOpen]);

  // Synchronize initial sessionData if passed
  useEffect(() => {
    if (sessionData?.title) {
      setSelectedClass(sessionData.title);
    }
    if (sessionData?.time) {
      setSelectedSlot(sessionData.time);
    }
    if (sessionData?.day) {
      setSelectedDay(sessionData.day);
    }
  }, [sessionData]);

  // Escape key listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleModalClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleModalClose = () => {
    setStep(1);
    onClose();
  };

  const handleNextStep1 = () => {
    setStep(2);
  };

  const handleNextStep2 = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !phone.trim()) return;
    setStep(3);
  };

  const handleFinalConfirm = () => {
    // Trigger subtle golden celebration confetti
    try {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#C5A880', '#DFCAAE', '#FDFBF7', '#1C1816']
      });
    } catch {
      // Ignore if confetti not supported
    }

    onConfirm(name, email);
    setStep(4);
  };

  return (
    <div className="booking-wizard-overlay" onClick={handleModalClose}>
      <div className="booking-wizard-modal" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          onClick={handleModalClose}
          className="wizard-close-btn"
          aria-label="Cerrar asistente de reserva"
        >
          <X size={18} strokeWidth={1.5} />
        </button>

        {/* Wizard Header */}
        <div className="wizard-header">
          <div className="wizard-brand">
            <span className="wizard-brand-tag">AURA &amp; FORME ✦ ATELIER PILATES</span>
            <h3>
              {step === 4 ? 'Plaza Confirmada' : 'Reserva de Plaza & Bienvenida'}
            </h3>
          </div>

          {/* Stepper Progress */}
          {step < 4 && (
            <div className="wizard-stepper">
              <div className="stepper-dots">
                <div className={`step-dot ${step >= 1 ? 'active' : ''} ${step > 1 ? 'completed' : ''}`}>
                  <span>1</span>
                  <label>Sesión</label>
                </div>
                <div className="step-line" />
                <div className={`step-dot ${step >= 2 ? 'active' : ''} ${step > 2 ? 'completed' : ''}`}>
                  <span>2</span>
                  <label>Tus Datos</label>
                </div>
                <div className="step-line" />
                <div className={`step-dot ${step >= 3 ? 'active' : ''}`}>
                  <span>3</span>
                  <label>Confirmación</label>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Wizard Body */}
        <div className="wizard-body">
          {/* ================= STEP 1: CLASS & TIME SELECTION ================= */}
          {step === 1 && (
            <div className="wizard-step-pane">
              <h4 className="wizard-section-label">1. Selecciona tu Modalidad de Reformer</h4>
              <div className="class-cards-selector">
                {CLASS_OPTIONS.map((c) => (
                  <div
                    key={c.id}
                    onClick={() => setSelectedClass(c.name)}
                    className={`wizard-class-card ${selectedClass === c.name ? 'is-selected' : ''}`}
                  >
                    <div className="class-card-radio">
                      {selectedClass === c.name && <Check size={12} strokeWidth={3} />}
                    </div>
                    <div className="class-card-text">
                      <div className="class-card-title-row">
                        <h5>{c.name}</h5>
                        <span className="class-card-level">{c.level}</span>
                      </div>
                      <p>{c.focus}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h4 className="wizard-section-label" style={{ marginTop: '1.5rem' }}>2. Fecha y Horario</h4>
              <div className="wizard-datetime-row">
                <div className="days-chip-group">
                  {DAYS.map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setSelectedDay(d)}
                      className={`day-chip ${selectedDay === d ? 'active' : ''}`}
                    >
                      <Calendar size={12} strokeWidth={1.5} />
                      <span>{d}</span>
                    </button>
                  ))}
                </div>

                <div className="time-chips-group">
                  {TIME_SLOTS.map((slot) => (
                    <button
                      key={slot.id}
                      type="button"
                      onClick={() => setSelectedSlot(slot.time)}
                      className={`time-chip ${selectedSlot === slot.time ? 'active' : ''}`}
                    >
                      <Clock size={12} strokeWidth={1.5} />
                      <span>{slot.time}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="wizard-footer-actions">
                <span className="wizard-helper-text">
                  <ShieldCheck size={14} strokeWidth={1.5} />
                  Aforo estricto de máx. 6 plazas por sesión
                </span>

                <MagneticBtn onClick={handleNextStep1} className="btn btn-gold">
                  <span>Continuar a tus Datos</span>
                  <ArrowRight size={14} strokeWidth={1.5} />
                </MagneticBtn>
              </div>
            </div>
          )}

          {/* ================= STEP 2: PERSONAL INFORMATION ================= */}
          {step === 2 && (
            <form onSubmit={handleNextStep2} className="wizard-step-pane">
              <h4 className="wizard-section-label">Tus Datos para la Reserva</h4>
              <p className="wizard-step-intro">
                Recibirás la confirmación inmediata y el código de acceso privado a tu correo.
              </p>

              <div className="wizard-form-grid">
                <div className="wizard-field">
                  <label htmlFor="wName">Nombre y Apellidos *</label>
                  <div className="input-with-icon">
                    <User size={15} strokeWidth={1.5} className="input-icon" />
                    <input
                      type="text"
                      id="wName"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Valentina Morales"
                      className="wizard-input"
                      required
                    />
                  </div>
                </div>

                <div className="wizard-field">
                  <label htmlFor="wEmail">Correo Electrónico *</label>
                  <div className="input-with-icon">
                    <Mail size={15} strokeWidth={1.5} className="input-icon" />
                    <input
                      type="email"
                      id="wEmail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="valentina@ejemplo.com"
                      className="wizard-input"
                      required
                    />
                  </div>
                </div>

                <div className="wizard-field">
                  <label htmlFor="wPhone">Teléfono Móvil (WhatsApp) *</label>
                  <div className="input-with-icon">
                    <Phone size={15} strokeWidth={1.5} className="input-icon" />
                    <input
                      type="tel"
                      id="wPhone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+34 600 000 000"
                      className="wizard-input"
                      required
                    />
                  </div>
                </div>

                <div className="wizard-field">
                  <label htmlFor="wExp">Experiencia en Reformer</label>
                  <select
                    id="wExp"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    className="wizard-input wizard-select"
                  >
                    <option value="primera_vez">Primera vez en Pilates Reformer</option>
                    <option value="intermedio">Familiarizada (he asistido a clases)</option>
                    <option value="avanzado">Practicante regular</option>
                    <option value="recuperacion">Recuperación postural / Lesión leve</option>
                  </select>
                </div>
              </div>

              <div className="wizard-field" style={{ marginTop: '1rem' }}>
                <label htmlFor="wNotes">Observaciones o Condiciones Físicas (Opcional)</label>
                <input
                  type="text"
                  id="wNotes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Ej. Molestia lumbar leve, embarazo en semana 14..."
                  className="wizard-input"
                />
              </div>

              <div className="wizard-footer-actions">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="btn btn-secondary"
                >
                  <ArrowLeft size={14} strokeWidth={1.5} />
                  <span>Volver</span>
                </button>

                <MagneticBtn type="submit" className="btn btn-gold">
                  <span>Revisar mi Reserva</span>
                  <ArrowRight size={14} strokeWidth={1.5} />
                </MagneticBtn>
              </div>
            </form>
          )}

          {/* ================= STEP 3: SUMMARY & CONFIRMATION ================= */}
          {step === 3 && (
            <div className="wizard-step-pane">
              <h4 className="wizard-section-label">Resumen de tu Pase de Sesión</h4>

              {/* Digital Pass Card */}
              <div className="digital-pass-card">
                <div className="pass-top">
                  <div>
                    <span className="pass-studio">AURA &amp; FORME ✦ SALAMANCA</span>
                    <h4 className="pass-class-title">{selectedClass}</h4>
                  </div>
                  <div className="pass-tag">Plaza Garantizada</div>
                </div>

                <div className="pass-meta-grid">
                  <div className="pass-meta-item">
                    <span>Fecha</span>
                    <strong>{selectedDay}</strong>
                  </div>
                  <div className="pass-meta-item">
                    <span>Horario</span>
                    <strong>{selectedSlot} h (50 min)</strong>
                  </div>
                  <div className="pass-meta-item">
                    <span>Alumna</span>
                    <strong>{name}</strong>
                  </div>
                  <div className="pass-meta-item">
                    <span>Ubicación</span>
                    <strong>Claudio Coello 42, Madrid</strong>
                  </div>
                </div>

                <div className="pass-amenities-list">
                  <span>✦ Toalla fría con aroma a eucalipto</span>
                  <span>✦ Calcetines de agarre de cortesía</span>
                  <span>✦ Té matcha o latte de bienvenida</span>
                </div>

                <div className="pass-promo-bar">
                  <div className="promo-info">
                    <Sparkles size={14} strokeWidth={1.5} className="promo-sparkle" />
                    <span>Código Promocional: <strong>{appliedPromo}</strong></span>
                  </div>
                  <span className="promo-discount-badge">-20% Aplicado</span>
                </div>
              </div>

              <div className="wizard-footer-actions">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="btn btn-secondary"
                >
                  <ArrowLeft size={14} strokeWidth={1.5} />
                  <span>Modificar Datos</span>
                </button>

                <MagneticBtn onClick={handleFinalConfirm} className="btn btn-gold">
                  <span>Confirmar mi Plaza</span>
                  <Sparkles size={15} strokeWidth={1.5} />
                </MagneticBtn>
              </div>
            </div>
          )}

          {/* ================= STEP 4: SUCCESS CONFIRMATION TICKET ================= */}
          {step === 4 && (
            <div className="wizard-step-pane wizard-success-pane">
              <div className="success-icon-wrap">
                <Check size={28} strokeWidth={2} />
              </div>

              <span className="success-badge">Reserva Completada con Éxito</span>
              <h3 className="success-title">¡Te Esperamos en el Santuario, {name.split(' ')[0]}!</h3>
              <p className="success-desc">
                Hemos enviado la confirmación y las instrucciones de llegada a <strong>{email}</strong>. Tu reformer y tu toalla de eucalipto estarán preparadas a tu llegada.
              </p>

              <div className="success-details-card">
                <div className="success-row">
                  <span>Clase</span>
                  <strong>{selectedClass}</strong>
                </div>
                <div className="success-row">
                  <span>Cita</span>
                  <strong>{selectedDay} a las {selectedSlot} h</strong>
                </div>
                <div className="success-row">
                  <span>Código de Pase</span>
                  <strong className="pass-code">AF-{Math.floor(1000 + Math.random() * 9000)}</strong>
                </div>
              </div>

              <div className="success-actions">
                <button
                  onClick={handleModalClose}
                  className="btn btn-primary btn-full"
                >
                  Cerrar y Volver a la Web
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
