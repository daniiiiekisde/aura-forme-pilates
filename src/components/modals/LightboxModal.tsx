import React from 'react';
import { X, Sparkles, ArrowRight } from 'lucide-react';
import { MoodTile } from '../../data/moodboardData';
import { MagneticBtn } from '../common/MagneticBtn';

interface LightboxModalProps {
  tile: MoodTile | null;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  tile,
  onClose,
  onOpenBooking
}) => {
  if (!tile) return null;

  return (
    <div className="lightbox-modal active" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="lightbox-close-btn" aria-label="Cerrar ventana">
          <X size={20} strokeWidth={1.5} />
        </button>

        <div className="lightbox-img-wrap">
          <img src={tile.img} alt={tile.title} />
        </div>

        <div className="lightbox-body">
          <div>
            <div className="section-tag" style={{ marginBottom: '0.75rem' }}>
              <Sparkles size={11} strokeWidth={1.5} className="tag-sparkle" />
              <span>{tile.sublabel}</span>
            </div>
            <h3 className="section-title" style={{ fontSize: '2rem', marginBottom: '0.8rem' }}>
              {tile.title}
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontWeight: 300 }}>
              {tile.desc}
            </p>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <MagneticBtn
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="btn btn-primary"
              style={{ width: '100%' }}
            >
              <span>Unirme al Ritual del Estudio</span>
              <ArrowRight size={15} strokeWidth={1.5} />
            </MagneticBtn>
          </div>
        </div>
      </div>
    </div>
  );
};
