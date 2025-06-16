// data/products.ts

// Define a TypeScript interface for product data (optional)
export interface Product {
  id: string;
  title: string;
  href: string;
  image: string;
  price: number;
  category: string;
}

export const products: Product[] = [
  {
    id: 'seafucoidandx',
    title: 'シーフコイダンDX',
    price: 13000,
    image: '/dx900x2.png',
    href: '/products/seafucoidandx',
    category: 'availability'
  },
  {
    id: 'nk-fucoidan',
    title: 'NK-FUCOIDAN',
    price: 12960,
    image: '/nk-fucoidan.jpg',
    href: '/products/nk-fucoidan',
    category: 'availability'
  },
  {
    id: 'fucoxanthinex',
    title: 'フコキサンチンEX',
    price: 59400,
    image: '/fucoxanthin.png',
    href: '/products/fucoxanthinex',
    category: 'availability'
  },
  {
    id: 'fucoidannormal',
    title: 'シーフコイダンノーマルタイプ',
    price: 28300,
    image: '/normal900x2.png',
    href: '/products/fucoidannormal',
    category: 'availability'
  },
  {
    id: 'dxfucoidan',
    title: 'DXフコイダンカプセル',
    price: 27648,
    image: '/capsule.png',
    href: '/products/dxfucoidan',
    category: 'availability'
  },
  {
    id: 'trial',
    title: 'シーフコイダンDX 30ml×2本お試しセット',
    price: 1000,
    image: '/trial.png',
    href: '/products/trial',
    category: 'availability'
  },
  {
    id: 'lapita',
    title: 'LAPITA（ラピタ） 保湿ローション 50ml',
    price: 7480,
    image: '/lapita.png',
    href: '/products/lapita',
    category: 'availability'
  },
  {
    id: 't-fucoidan100',
    title: 'T-Fucoidan100',
    price: 60000,
    image: '/t-fucoidan.png',
    href: '/products/t-fucoidan100',
    category: 'availability'
  }
];
