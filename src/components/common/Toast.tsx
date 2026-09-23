import React from 'react';
import { Sparkles } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose?: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="toast-msg show">
      <Sparkles size={16} className="text-accent-gold" strokeWidth={1.5} />
      <span>{message}</span>
    </div>
  );
};
