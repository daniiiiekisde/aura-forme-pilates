import React from 'react';
import { Sparkles } from 'lucide-react';
import { MOODBOARD_DATA, MoodTile } from '../../data/moodboardData';

interface MoodboardProps {
  onOpenLightbox: (tile: MoodTile) => void;
}

export const Moodboard: React.FC<MoodboardProps> = ({ onOpenLightbox }) => {
  return (
    <section className="moodboard-section" id="moodboard">
      <div className="container">
        <div className="moodboard-header">
          <div className="section-tag">
            <Sparkles size={12} strokeWidth={1.5} className="tag-sparkle" />
            <span>Estética & Comunidad</span>
          </div>
          <h2 className="section-title">Life Lately & The Moodboard</h2>
          <p className="section-subtitle">
            Capturas de la vida en nuestro estudio, la serenidad matutina, el aroma a café y el compromiso de nuestra comunidad de mujeres conscientes. Haz clic en cada postal para descubrir su historia.
          </p>
        </div>

        <div className="moodboard-grid">
          {MOODBOARD_DATA.map((tile) => (
            <div
              key={tile.id}
              onClick={() => onOpenLightbox(tile)}
              className="mood-tile"
              role="button"
              tabIndex={0}
              aria-label={`Ver detalle de ${tile.title}`}
            >
              <img src={tile.img} alt={tile.title} loading="lazy" />
              <div className="mood-overlay">
                {tile.tagTitle && (
                  <span className="mood-tag-title">{tile.tagTitle}</span>
                )}
                {tile.scriptAccent && (
                  <span className="mood-script-accent">{tile.scriptAccent}</span>
                )}
                <span className="mood-sublabel">{tile.sublabel}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
