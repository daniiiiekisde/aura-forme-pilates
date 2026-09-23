export interface Product {
  id: string;
  name: string;
  price: number;
  badge: string;
  desc: string;
  img: string;
}

export const PRODUCTS_DATA: Product[] = [
  {
    id: 'p1',
    name: 'Grip Socks "Aura"',
    price: 24,
    badge: 'Bestseller',
    desc: 'Calcetines de agarre con almohadillas de silicona invisibles y bordado caligráfico en hilo de oro.',
    img: '/assets/images/boutique-socks.jpg'
  },
  {
    id: 'p2',
    name: 'Bruma Botánica Signature',
    price: 32,
    badge: 'Orgánico',
    desc: 'Hidrolato de lavanda salvaje, salvia y extracto de higo blanco para relajar la mente antes o después de tu sesión.',
    img: '/assets/images/boutique-socks.jpg'
  },
  {
    id: 'p3',
    name: 'Correas de Cuero Taupe',
    price: 48,
    badge: 'Edición Limitada',
    desc: 'Correas de reformer acolchadas en piel regenerada con hebillas de latón pulido para máxima comodidad.',
    img: '/assets/images/sculpt-straps.jpg'
  },
  {
    id: 'p4',
    name: 'Ceremonial Matcha Tin (40g)',
    price: 38,
    badge: 'Ceremonial',
    desc: 'Matcha importado de Uji (Kioto), primera cosecha recolectada a mano, textura sedosa y notas florales suaves.',
    img: '/assets/images/matcha-latte.jpg'
  }
];
