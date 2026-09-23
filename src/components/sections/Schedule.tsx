import React, { useState } from 'react';
import { Calendar, Clock } from 'lucide-react';
import { SCHEDULE_DATA, DAYS_CONFIG, ScheduleItem } from '../../data/scheduleData';

interface ScheduleProps {
  onSelectClass: (session: { title: string; time: string; instructor: string; day: string }) => void;
}

export const Schedule: React.FC<ScheduleProps> = ({ onSelectClass }) => {
  const [currentDay, setCurrentDay] = useState('lunes');
  const [currentType, setCurrentType] = useState<'all' | 'sculpt' | 'flow' | 'jumpboard' | 'stretch'>('all');

  const dayClasses = SCHEDULE_DATA[currentDay] || [];
  const filteredClasses = currentType === 'all'
    ? dayClasses
    : dayClasses.filter((c: ScheduleItem) => c.type === currentType);

  const getDayName = (key: string) => {
    return key.charAt(0).toUpperCase() + key.slice(1);
  };

  return (
    <section className="schedule-section" id="horarios">
      <div className="container">
        <div className="text-center">
          <div className="section-tag">
            <Calendar size={12} strokeWidth={1.5} className="tag-sparkle" />
            <span>Agenda Semanal</span>
          </div>
          <h2 className="section-title">Horarios de Sesiones & Reserva</h2>
          <p className="section-subtitle">
            Selecciona tu día y modalidad predilecta. Debido a nuestra exclusividad de 6 plazas por sesión, te recomendamos reservar con antelación.
          </p>
        </div>

        <div className="schedule-filters-wrapper">
          {/* Day Switcher */}
          <div className="days-bar">
            {DAYS_CONFIG.map((d) => (
              <button
                key={d.key}
                onClick={() => setCurrentDay(d.key)}
                className={`day-btn ${currentDay === d.key ? 'active' : ''}`}
                aria-label={`Ver clases de ${d.name}`}
              >
                <span className="day-name">{d.name}</span>
                <span className="day-date">{d.date}</span>
              </button>
            ))}
          </div>

          {/* Type Pills */}
          <div className="class-types-bar">
            <button
              onClick={() => setCurrentType('all')}
              className={`type-filter-btn ${currentType === 'all' ? 'active' : ''}`}
            >
              Todas las Modalidades
            </button>
            <button
              onClick={() => setCurrentType('sculpt')}
              className={`type-filter-btn ${currentType === 'sculpt' ? 'active' : ''}`}
            >
              Reformer Sculpt
            </button>
            <button
              onClick={() => setCurrentType('flow')}
              className={`type-filter-btn ${currentType === 'flow' ? 'active' : ''}`}
            >
              Classical Flow
            </button>
            <button
              onClick={() => setCurrentType('jumpboard')}
              className={`type-filter-btn ${currentType === 'jumpboard' ? 'active' : ''}`}
            >
              Jumpboard Athletic
            </button>
            <button
              onClick={() => setCurrentType('stretch')}
              className={`type-filter-btn ${currentType === 'stretch' ? 'active' : ''}`}
            >
              Yin & Restore
            </button>
          </div>
        </div>

        {/* Schedule List */}
        <div className="schedule-list">
          {filteredClasses.length === 0 ? (
            <div className="schedule-empty-card">
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                No hay sesiones disponibles
              </p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                Prueba a seleccionar otra modalidad o día en la barra superior.
              </p>
            </div>
          ) : (
            filteredClasses.map((item: ScheduleItem) => {
              const isFull = item.status === 'full';
              const isUrgent = item.status === 'urgent';

              return (
                <div key={item.id} className="schedule-row">
                  <div className="row-time">
                    <span className="time-val">{item.time}</span>
                    <span className="duration">
                      <Clock size={11} strokeWidth={1.5} style={{ display: 'inline', marginRight: '3px' }} />
                      {item.duration}
                    </span>
                  </div>

                  <div className="row-info">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>

                  <div className="row-instructor">
                    <div className="instructor-avatar">{item.initial}</div>
                    <div className="instructor-meta">
                      <h5>{item.instructor}</h5>
                      <span>Instructora Certificada</span>
                    </div>
                  </div>

                  <div className="row-spots">
                    {isFull ? (
                      <span className="spots-badge full">Completo</span>
                    ) : isUrgent ? (
                      <span className="spots-badge urgent">¡Quedan {item.spots} plazas!</span>
                    ) : (
                      <span className="spots-badge available">{item.spots} plazas libres</span>
                    )}
                  </div>

                  <div>
                    {isFull ? (
                      <button className="btn-book-row disabled-btn" disabled>
                        Lista de Espera
                      </button>
                    ) : (
                      <button
                        onClick={() => onSelectClass({
                          title: item.title,
                          time: item.time,
                          instructor: item.instructor,
                          day: getDayName(currentDay)
                        })}
                        className="btn-book-row"
                      >
                        Reservar
                      </button>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};
