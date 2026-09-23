import React, { useState } from 'react';
import { Sparkles, ArrowRight, ArrowLeft, RotateCcw } from 'lucide-react';
import { MagneticBtn } from '../common/MagneticBtn';

interface QuizProps {
  onOpenBookingForClass: (className: string) => void;
  onToast: (msg: string) => void;
}

export const Quiz: React.FC<QuizProps> = ({ onOpenBookingForClass, onToast }) => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    exp: '',
    goal: '',
    time: ''
  });

  const handleSelect = (key: 'exp' | 'goal' | 'time', val: string) => {
    setAnswers(prev => ({ ...prev, [key]: val }));
  };

  const handleNext1 = () => {
    if (!answers.exp) {
      onToast('✦ Por favor, selecciona una opción para continuar');
      return;
    }
    setStep(2);
  };

  const handleNext2 = () => {
    if (!answers.goal) {
      onToast('✦ Por favor, selecciona tu objetivo principal');
      return;
    }
    setStep(3);
  };

  const handleFinish = () => {
    if (!answers.time) {
      onToast('✦ Por favor, escoge tu franja horaria preferida');
      return;
    }
    setStep(4);
  };

  const handleReset = () => {
    setAnswers({ exp: '', goal: '', time: '' });
    setStep(1);
  };

  // Determine Recommendation
  const getRecommendation = () => {
    if (answers.goal === 'cardio') {
      return {
        title: 'Athletic Jumpboard Cardio',
        desc: 'Tu cuerpo busca vitalidad, endorfinas y energía aeróbica. La tabla de salto acolchada te permite realizar cardio de alta eficacia con amortiguación cero para tus articulaciones.'
      };
    }
    if (answers.goal === 'calm' || answers.exp === 'recuperacion') {
      return {
        title: 'Yin & Deep Stretch Restore',
        desc: 'La opción ideal para desconectar el sistema nervioso, liberar tensiones acumuladas en la espalda baja y abrir el pecho mediante respiración diafragmática y muelles suaves.'
      };
    }
    if (answers.exp === 'principiante') {
      return {
        title: 'Classical Reformer Flow (Iniciación)',
        desc: 'Aprenderás a conectar con tu powerhouse, dominar los muelles y la postura corporal con máxima seguridad y corrección personalizada de nuestras instructoras.'
      };
    }
    return {
      title: 'Reformer Sculpt & Tone',
      desc: 'Nuestra clase insignia más deseada: resistencia controlada para esculpir glúteos elevados, brazos estilizados y abdomen plano y definido con estética pura.'
    };
  };

  const recommendation = getRecommendation();

  return (
    <section className="quiz-section" id="quizSection">
      <div className="container">
        <div className="text-center">
          <div className="section-tag">
            <Sparkles size={12} strokeWidth={1.5} className="tag-sparkle" />
            <span>Test Personalizado</span>
          </div>
          <h2 className="section-title">Encuentra tu Práctica Ideal</h2>
          <p className="section-subtitle">
            Responde a 3 breves preguntas para que nuestro equipo te recomiende la intensidad y el estilo perfecto para tus objetivos.
          </p>
        </div>

        <div className="quiz-card">
          <div className="quiz-progress-bar">
            <div
              className="quiz-progress-fill"
              style={{
                width: step === 1 ? '33.3%' : step === 2 ? '66.6%' : '100%'
              }}
            />
          </div>

          {/* Step 1 */}
          {step === 1 && (
            <div className="quiz-step active">
              <h3>Paso 1: ¿Cuál es tu experiencia previa con Pilates Reformer?</h3>
              <div className="quiz-options-grid">
                <div
                  onClick={() => handleSelect('exp', 'principiante')}
                  className={`quiz-option-card ${answers.exp === 'principiante' ? 'selected' : ''}`}
                >
                  <h4>Primera Vez</h4>
                  <p>Nunca me he subido a un reformer o busco aprender la técnica y los resortes desde cero con total seguridad.</p>
                </div>
                <div
                  onClick={() => handleSelect('exp', 'intermedio')}
                  className={`quiz-option-card ${answers.exp === 'intermedio' ? 'selected' : ''}`}
                >
                  <h4>Familiarizada</h4>
                  <p>He practicado mat o reformer en algunas ocasiones y domino los principios básicos de respiración y powerhouse.</p>
                </div>
                <div
                  onClick={() => handleSelect('exp', 'avanzado')}
                  className={`quiz-option-card ${answers.exp === 'avanzado' ? 'selected' : ''}`}
                >
                  <h4>Practicante Regular</h4>
                  <p>Practico pilates con asiduidad y busco transiciones fluidas, mayor resistencia y desafíos de equilibrio dinámico.</p>
                </div>
                <div
                  onClick={() => handleSelect('exp', 'recuperacion')}
                  className={`quiz-option-card ${answers.exp === 'recuperacion' ? 'selected' : ''}`}
                >
                  <h4>Recuperación & Postura</h4>
                  <p>Tengo molestias lumbares/cervicales y busco una sesión terapéutica guiada milimétricamente.</p>
                </div>
              </div>
              <div className="quiz-nav-btns" style={{ justifyContent: 'flex-end' }}>
                <button onClick={handleNext1} className="btn btn-primary">
                  <span>Siguiente Paso</span>
                  <ArrowRight size={14} strokeWidth={1.5} />
                </button>
              </div>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div className="quiz-step active">
              <h3>Paso 2: ¿Cuál es tu objetivo primordial hoy?</h3>
              <div className="quiz-options-grid">
                <div
                  onClick={() => handleSelect('goal', 'sculpt')}
                  className={`quiz-option-card ${answers.goal === 'sculpt' ? 'selected' : ''}`}
                >
                  <h4>Esculpir & Tonificar</h4>
                  <p>Definir glúteos, abdomen profundo, brazos estilizados y quemar calorías sin impacto.</p>
                </div>
                <div
                  onClick={() => handleSelect('goal', 'calm')}
                  className={`quiz-option-card ${answers.goal === 'calm' ? 'selected' : ''}`}
                >
                  <h4>Desconectar & Liberar Estrés</h4>
                  <p>Conectar con mi cuerpo, alargar músculos tensos y salir con una sensación de ligereza mental.</p>
                </div>
                <div
                  onClick={() => handleSelect('goal', 'posture')}
                  className={`quiz-option-card ${answers.goal === 'posture' ? 'selected' : ''}`}
                >
                  <h4>Postura Regia & Core</h4>
                  <p>Corregir hombros adelantados, fortalecer la espalda y estilizar la silueta corporal.</p>
                </div>
                <div
                  onClick={() => handleSelect('goal', 'cardio')}
                  className={`quiz-option-card ${answers.goal === 'cardio' ? 'selected' : ''}`}
                >
                  <h4>Cardio Dinámico</h4>
                  <p>Elevar pulsaciones con la tabla de salto (jumpboard) manteniendo la protección en articulaciones.</p>
                </div>
              </div>
              <div className="quiz-nav-btns">
                <button onClick={() => setStep(1)} className="btn btn-secondary">
                  <ArrowLeft size={14} strokeWidth={1.5} />
                  <span>Anterior</span>
                </button>
                <button onClick={handleNext2} className="btn btn-primary">
                  <span>Siguiente Paso</span>
                  <ArrowRight size={14} strokeWidth={1.5} />
                </button>
              </div>
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div className="quiz-step active">
              <h3>Paso 3: ¿En qué momento del día prefieres practicar?</h3>
              <div className="quiz-options-grid">
                <div
                  onClick={() => handleSelect('time', 'morning')}
                  className={`quiz-option-card ${answers.time === 'morning' ? 'selected' : ''}`}
                >
                  <h4>Mañanas Radiantes (07:30 - 11:30)</h4>
                  <p>Comenzar el día con energía serena, luz de sol y un matcha revitalizante antes del trabajo.</p>
                </div>
                <div
                  onClick={() => handleSelect('time', 'lunch')}
                  className={`quiz-option-card ${answers.time === 'lunch' ? 'selected' : ''}`}
                >
                  <h4>Pausa del Mediodía (13:30 - 15:30)</h4>
                  <p>Hacer una recarga activa en mitad de la jornada laboral para aliviar la tensión acumulada.</p>
                </div>
                <div
                  onClick={() => handleSelect('time', 'evening')}
                  className={`quiz-option-card ${answers.time === 'evening' ? 'selected' : ''}`}
                >
                  <h4>Tardes de Desconexión (18:00 - 20:30)</h4>
                  <p>El ritual perfecto para cerrar la jornada, soltar tensiones y preparar el descanso nocturno.</p>
                </div>
                <div
                  onClick={() => handleSelect('time', 'weekend')}
                  className={`quiz-option-card ${answers.time === 'weekend' ? 'selected' : ''}`}
                >
                  <h4>Sábados & Domingos Slow</h4>
                  <p>Fin de semana con calma, sin prisas, acompañado de un paseo por el barrio tras la clase.</p>
                </div>
              </div>
              <div className="quiz-nav-btns">
                <button onClick={() => setStep(2)} className="btn btn-secondary">
                  <ArrowLeft size={14} strokeWidth={1.5} />
                  <span>Anterior</span>
                </button>
                <MagneticBtn onClick={handleFinish} className="btn btn-gold">
                  <span>Ver Mi Recomendación</span>
                  <Sparkles size={14} strokeWidth={1.5} />
                </MagneticBtn>
              </div>
            </div>
          )}

          {/* Step 4: Result */}
          {step === 4 && (
            <div className="quiz-step active">
              <div className="quiz-result-box">
                <div className="quiz-result-badge">
                  <Sparkles size={12} strokeWidth={1.5} style={{ display: 'inline', marginRight: '4px' }} />
                  Recomendación Exclusiva para Ti
                </div>
                <h3 className="quiz-result-title">{recommendation.title}</h3>
                <p className="quiz-result-desc">{recommendation.desc}</p>

                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <MagneticBtn
                    onClick={() => onOpenBookingForClass(recommendation.title)}
                    className="btn btn-primary"
                  >
                    <span>Reservar esta Clase</span>
                    <ArrowRight size={14} strokeWidth={1.5} />
                  </MagneticBtn>

                  <button onClick={handleReset} className="btn btn-secondary">
                    <RotateCcw size={14} strokeWidth={1.5} />
                    <span>Reiniciar Test</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
