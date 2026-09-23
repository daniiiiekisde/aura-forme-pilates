export interface MoodTile {
  id: string;
  img: string;
  tagTitle: string;
  scriptAccent?: string;
  sublabel: string;
  title: string;
  desc: string;
}

export const MOODBOARD_DATA: MoodTile[] = [
  {
    id: 'm1',
    img: '/assets/images/aesthetic-mirror.jpg',
    tagTitle: 'NEXT LEVEL',
    scriptAccent: 'confidence',
    sublabel: 'Atelier Moments',
    title: 'NEXT LEVEL Confidence',
    desc: 'El porte y la seguridad que te otorga una espalda fuerte y alineada se reflejan en cada mirada al espejo antes de iniciar el día.'
  },
  {
    id: 'm2',
    img: '/assets/images/matcha-latte.jpg',
    tagTitle: 'FAQ',
    sublabel: 'FREQUENTLY ASKED QUESTIONS',
    title: 'Frequently Asked Questions',
    desc: 'Las charlas post-sesión en nuestra terraza de mármol de Carrara con un iced oat latte recién preparado son parte del ritual diario.'
  },
  {
    id: 'm3',
    img: '/assets/images/parisian-facade.jpg',
    tagTitle: 'LIFE',
    scriptAccent: 'lately',
    sublabel: 'The Neighborhood',
    title: 'LIFE lately',
    desc: 'Ubicados en un señorial edificio con balcones de forja y luz tenue. Tu refugio de tranquilidad en medio de la ciudad.'
  },
  {
    id: 'm4',
    img: '/assets/images/sculpt-straps.jpg',
    tagTitle: '',
    scriptAccent: 'Thank You',
    sublabel: 'Gratitude & Connection',
    title: 'Thank You Community',
    desc: 'La gratitud por cada respiración sincronizada, cada esfuerzo compartido y la energía colectiva que se respira en el estudio.'
  },
  {
    id: 'm5',
    img: '/assets/images/sanctuary-lounge.jpg',
    tagTitle: 'MOOD',
    sublabel: 'Curated Sanctuary',
    title: 'The Studio MOOD',
    desc: 'Texturas de bouclé crema, piedra travertino y libros de arte. El santuario donde los teléfonos se silencian y la respiración se calma.'
  },
  {
    id: 'm6',
    img: '/assets/images/reformer-movement.jpg',
    tagTitle: 'LIVE',
    scriptAccent: 'More',
    sublabel: 'Mindful Movement',
    title: 'LIVE More',
    desc: 'Moverte sin prisa, con intención y elegancia. La fuerza no se mide en el cansancio, sino en la solidez de tu centro.'
  },
  {
    id: 'm7',
    img: '/assets/images/boutique-socks.jpg',
    tagTitle: 'NEW',
    sublabel: 'CURATED COLLECTION',
    title: 'NEW Arrivals',
    desc: 'Nuestra colección cápsula de calcetines de agarre con bordados en hilo de oro, bruma de lavanda francesa y accesorios en lino orgánico.'
  },
  {
    id: 'm8',
    img: '/assets/images/hero-studio.jpg',
    tagTitle: '',
    scriptAccent: 'Sunlight',
    sublabel: '07:30 AM Ritual',
    title: 'Morning Sunlight',
    desc: 'Los primeros rayos de sol atravesando las cortinas de lino vaporosas mientras encendemos las velas aromáticas y preparamos los reformers.'
  },
  {
    id: 'm9',
    img: '/assets/images/matcha-latte.jpg',
    tagTitle: 'RITUAL',
    scriptAccent: 'serenity',
    sublabel: 'The Lifestyle',
    title: 'Post-Reformer Ritual',
    desc: 'Porque el autocuidado no concluye cuando sales del reformer; continúa en cada instante de deleite pausado.'
  }
];
