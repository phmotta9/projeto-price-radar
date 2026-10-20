import type { Product } from './types';

export const products: Product[] = [
  {
    id: 1,
    name: "Teclado Mecânico",
    store: "Amazon",
    imgUrl: "https://m.media-amazon.com/images/I/4176rwot7oL._AC_UF1000,1000_QL80_.jpg",
    category: "Informática",
    currentPrice: 180,
    previousPrice: 220,
    targetPrice: 150,
    isFavorite: true
  },
  {
    id: 2,
    name: "Mouse Gamer",
    store: "Kabum",
    category: "Informática",
    currentPrice: 150,
    previousPrice: 120,
    targetPrice: 100,
    isFavorite: false
  },
  {
    id: 3,
    name: "Monitor 24 polegadas",
    store: "Magazine Luiza",
    category: "Monitores",
    currentPrice: 899,
    targetPrice: 800,
    isFavorite: true
  },
  {
    id: 4,
    name: "Headset",
    store: "Mercado Livre",
    category: "Áudio",
    currentPrice: 200,
    previousPrice: 200,
    targetPrice: 170,
    isFavorite: false
  }
];