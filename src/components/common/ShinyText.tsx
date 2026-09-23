import React from 'react';

interface ShinyTextProps {
  text: string;
  className?: string;
  disabled?: boolean;
  speed?: number;
}

export const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  className = '',
  disabled = false,
  speed = 4
}) => {
  return (
    <span
      className={`shiny-text ${disabled ? 'disabled' : ''} ${className}`}
      style={{
        animationDuration: `${speed}s`,
        background: 'linear-gradient(120deg, rgba(28,24,22,0.9) 0%, rgba(28,24,22,0.9) 35%, rgba(197,168,128,1) 50%, rgba(28,24,22,0.9) 65%, rgba(28,24,22,0.9) 100%)',
        backgroundSize: '200% auto',
        color: 'transparent',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        display: 'inline-block'
      }}
    >
      {text}
    </span>
  );
};
