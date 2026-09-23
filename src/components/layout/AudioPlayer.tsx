import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface AudioPlayerProps {
  onToast: (msg: string) => void;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ onToast }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  const initAudio = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.0001, ctx.currentTime);
      gainNodeRef.current = masterGain;

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(600, ctx.currentTime);

      // 216Hz Sub-harmonic warm body
      const osc1 = ctx.createOscillator();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(216, ctx.currentTime);

      // 432Hz Resonant Harmonic
      const osc2 = ctx.createOscillator();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(432, ctx.currentTime);

      // Slow Breathing LFO
      const lfo = ctx.createOscillator();
      const lfoGain = ctx.createGain();
      lfo.frequency.setValueAtTime(0.08, ctx.currentTime);
      lfoGain.gain.setValueAtTime(0.012, ctx.currentTime);

      lfo.connect(lfoGain);
      lfoGain.connect(masterGain.gain);

      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(masterGain);
      masterGain.connect(ctx.destination);

      osc1.start();
      osc2.start();
      lfo.start();
    } catch (e) {
      console.warn('Web Audio not supported', e);
    }
  };

  const toggleSound = () => {
    if (!audioCtxRef.current) {
      initAudio();
    }

    const ctx = audioCtxRef.current;
    const gain = gainNodeRef.current;
    if (!ctx || !gain) return;

    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    if (!isPlaying) {
      gain.gain.cancelScheduledValues(ctx.currentTime);
      gain.gain.setValueAtTime(gain.gain.value, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.08, ctx.currentTime + 1.2);
      setIsPlaying(true);
      onToast('Frecuencia 432Hz activada: calma y movimiento consciente');
    } else {
      gain.gain.cancelScheduledValues(ctx.currentTime);
      gain.gain.setValueAtTime(gain.gain.value, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.0001, ctx.currentTime + 0.8);
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    return () => {
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <button
      onClick={toggleSound}
      className={`sound-toggle-btn ${isPlaying ? 'playing' : ''}`}
      title="Frecuencia 432Hz del estudio"
      aria-label="Alternar sonido ambiental 432Hz"
    >
      {isPlaying ? (
        <Volume2 size={14} strokeWidth={1.5} className="sound-icon active" />
      ) : (
        <VolumeX size={14} strokeWidth={1.5} className="sound-icon" />
      )}
      <div className="sound-waves">
        <span />
        <span />
        <span />
      </div>
      <span className="sound-label">{isPlaying ? '432Hz ON' : '432Hz'}</span>
    </button>
  );
};
