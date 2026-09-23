export interface ScheduleItem {
  id: string;
  time: string;
  duration: string;
  type: 'sculpt' | 'flow' | 'jumpboard' | 'stretch';
  title: string;
  desc: string;
  instructor: string;
  initial: string;
  spots: number;
  status: 'available' | 'urgent' | 'full';
}

export const SCHEDULE_DATA: Record<string, ScheduleItem[]> = {
  lunes: [
    { id: 'lun-1', time: '07:30', duration: '50 min', type: 'sculpt', title: 'Reformer Sculpt & Tone', desc: 'Activación del core profundo, trabajo excéntrico de glúteos y brazos.', instructor: 'Clara Del Val', initial: 'CV', spots: 2, status: 'urgent' },
    { id: 'lun-2', time: '09:00', duration: '50 min', type: 'flow', title: 'Classical Reformer Flow', desc: 'La secuencia original de Joseph Pilates con alineación milimétrica.', instructor: 'Inés Montaner', initial: 'IM', spots: 4, status: 'available' },
    { id: 'lun-3', time: '14:00', duration: '45 min', type: 'jumpboard', title: 'Athletic Jumpboard Cardio', desc: 'Cardio aeróbico sin impacto articular sobre tabla de salto acolchada.', instructor: 'Lucía B.', initial: 'LB', spots: 1, status: 'urgent' },
    { id: 'lun-4', time: '18:30', duration: '50 min', type: 'sculpt', title: 'Reformer Sculpt & Tone', desc: 'Resistencia progresiva en muelles medios para estilizar silueta.', instructor: 'Clara Del Val', initial: 'CV', spots: 0, status: 'full' },
    { id: 'lun-5', time: '20:00', duration: '55 min', type: 'stretch', title: 'Yin & Deep Stretch Restore', desc: 'Elongación miofascial asistida con correas y aromaterapia de lavanda.', instructor: 'Elena Vidal', initial: 'EV', spots: 3, status: 'available' }
  ],
  martes: [
    { id: 'mar-1', time: '08:00', duration: '50 min', type: 'flow', title: 'Classical Reformer Flow', desc: 'Enfoque en respiración, ritmo continuo y estabilidad lumbo-pélvica.', instructor: 'Inés Montaner', initial: 'IM', spots: 3, status: 'available' },
    { id: 'mar-2', time: '10:30', duration: '50 min', type: 'sculpt', title: 'Powerhouse & Glute Sculpt', desc: 'Énfasis en cadena posterior, postura de bailarina y transiciones.', instructor: 'Clara Del Val', initial: 'CV', spots: 2, status: 'urgent' },
    { id: 'mar-3', time: '19:00', duration: '50 min', type: 'jumpboard', title: 'Athletic Jumpboard Cardio', desc: 'Ritmo enérgico, quema calórica elegante y fortalecimiento de gemelos.', instructor: 'Lucía B.', initial: 'LB', spots: 1, status: 'urgent' },
    { id: 'mar-4', time: '20:15', duration: '55 min', type: 'stretch', title: 'Yin & Deep Stretch Restore', desc: 'Descarga de hombros y flexores de cadera con luz tenue.', instructor: 'Elena Vidal', initial: 'EV', spots: 4, status: 'available' }
  ],
  miercoles: [
    { id: 'mie-1', time: '07:30', duration: '50 min', type: 'sculpt', title: 'Reformer Sculpt & Tone', desc: 'Activación del core profundo, trabajo excéntrico de glúteos y brazos.', instructor: 'Clara Del Val', initial: 'CV', spots: 1, status: 'urgent' },
    { id: 'mie-2', time: '11:00', duration: '50 min', type: 'flow', title: 'Classical Reformer Flow', desc: 'Secuencia clásica con muelles ligeros para control abdominal avanzado.', instructor: 'Inés Montaner', initial: 'IM', spots: 3, status: 'available' },
    { id: 'mie-3', time: '18:00', duration: '50 min', type: 'jumpboard', title: 'Athletic Jumpboard Cardio', desc: 'Cardio aeróbico sin impacto articular sobre tabla acolchada.', instructor: 'Lucía B.', initial: 'LB', spots: 2, status: 'urgent' },
    { id: 'mie-4', time: '19:30', duration: '50 min', type: 'sculpt', title: 'Reformer Sculpt & Tone', desc: 'Definición de silueta y alineación postural con muelles balanceados.', instructor: 'Clara Del Val', initial: 'CV', spots: 0, status: 'full' }
  ],
  jueves: [
    { id: 'jue-1', time: '08:30', duration: '50 min', type: 'flow', title: 'Classical Reformer Flow', desc: 'Ritmo sostenido, coordinación motora y elongación vertebral.', instructor: 'Inés Montaner', initial: 'IM', spots: 4, status: 'available' },
    { id: 'jue-2', time: '13:30', duration: '45 min', type: 'sculpt', title: 'Express Powerhouse Lunch', desc: 'Pausa perfecta para estilizar el cuerpo y oxigenar la mente al mediodía.', instructor: 'Clara Del Val', initial: 'CV', spots: 2, status: 'urgent' },
    { id: 'jue-3', time: '19:00', duration: '55 min', type: 'stretch', title: 'Yin & Deep Stretch Restore', desc: 'Descompresión espinal asistida por la barra y las correas de cuero.', instructor: 'Elena Vidal', initial: 'EV', spots: 2, status: 'urgent' }
  ],
  viernes: [
    { id: 'vie-1', time: '08:00', duration: '50 min', type: 'sculpt', title: 'Reformer Sculpt & Tone', desc: 'Cierra la semana tonificando glúteos y abdomen con precisión.', instructor: 'Clara Del Val', initial: 'CV', spots: 3, status: 'available' },
    { id: 'vie-2', time: '10:00', duration: '50 min', type: 'jumpboard', title: 'Athletic Jumpboard Cardio', desc: 'Saltos controlados sobre carro suspendido para elevar endorfinas.', instructor: 'Lucía B.', initial: 'LB', spots: 2, status: 'urgent' },
    { id: 'vie-3', time: '18:00', duration: '55 min', type: 'stretch', title: 'Friday Unwind & Candlelight', desc: 'Práctica restaurativa a la luz de las velas con infusión de lavanda.', instructor: 'Elena Vidal', initial: 'EV', spots: 1, status: 'urgent' }
  ],
  sabado: [
    { id: 'sab-1', time: '09:30', duration: '55 min', type: 'sculpt', title: 'Weekend Master Sculpt', desc: 'Sesión integral de 55 minutos para activar toda la musculatura con pausa de matcha.', instructor: 'Clara Del Val', initial: 'CV', spots: 1, status: 'urgent' },
    { id: 'sab-2', time: '11:00', duration: '50 min', type: 'flow', title: 'Mindful Morning Flow', desc: 'Fluidez, equilibrio y apertura de pecho en el estudio bañado en sol.', instructor: 'Inés Montaner', initial: 'IM', spots: 2, status: 'urgent' },
    { id: 'sab-3', time: '12:30', duration: '55 min', type: 'stretch', title: 'Restorative Sound & Stretch', desc: 'Estiramientos profundos acompañados de frecuencias calmantes.', instructor: 'Elena Vidal', initial: 'EV', spots: 3, status: 'available' }
  ],
  domingo: [
    { id: 'dom-1', time: '10:00', duration: '55 min', type: 'flow', title: 'Sunday Slow Flow & Reset', desc: 'Comienza tu domingo con un despertar muscular armonioso y suave.', instructor: 'Inés Montaner', initial: 'IM', spots: 2, status: 'urgent' },
    { id: 'dom-2', time: '11:45', duration: '55 min', type: 'stretch', title: 'Sunday Deep Fascia Release', desc: 'Liberación de fascias, descompresión articular y paz mental.', instructor: 'Elena Vidal', initial: 'EV', spots: 4, status: 'available' }
  ]
};

export const DAYS_CONFIG = [
  { key: 'lunes', name: 'Lun', date: '28' },
  { key: 'martes', name: 'Mar', date: '29' },
  { key: 'miercoles', name: 'Mié', date: '30' },
  { key: 'jueves', name: 'Jue', date: '01' },
  { key: 'viernes', name: 'Vie', date: '02' },
  { key: 'sabado', name: 'Sáb', date: '03' },
  { key: 'domingo', name: 'Dom', date: '04' }
];
