// app/page.tsx or pages/index.tsx

import Image from 'next/image';
import Link from 'next/link';

export const products = [
  {
    id: 1,
    title: "【定期購入】シーフコイダンDX 900ml×2本セット",
    image: "/dx900x2.png",
    link: "/products/teiki_fucoidandx",
    price: "45,000 円",
    originalPrice: null,
  },
  {
    id: 2,
    title: "【定期購入】NK-FUCOIDAN",
    image: "/nk-fucoidan.jpg",
    link: "/products/teiki_nk-fucoidan",
    price: "10,368 円",
    originalPrice: "12,960 円",
  },
];

export default function SubscriptionProducts() {
  return (
    <>
    <div className="collection__title title-wrapper title-wrapper--no-top-margin page-width"><h2 className="title inline-richtext h1 scroll-trigger animate--slide-in">
          定期購入
        </h2></div>
    <ul
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full justify-center"
      role="list"
      aria-label="Product slider"
    >
      {products.map((product) => (
        <li key={product.id} className="p-2">
          <div className="relative overflow-hidden">
            <Link href={product.link}>
              <Image
                src={product.image}
                alt={product.title}
                width={550}
                height={550}
                className="transition-transform hover:scale-105 w-full h-auto"
              />
            </Link>
          </div>
          <div className="" style={{padding: "1rem"}}>
            <Link
              href={product.link}
              className="text-base text-blue-600 hover:underline block"
            >
              <h3 className="text-sm font-semibold">{product.title}</h3>
            </Link>
            <div className="mt-1 flex">
              {product.originalPrice ? (
                <div className="text-[2rem] text-gray-500 line-through" style={{marginRight: '20px'}}>
                  {product.originalPrice}
                </div>
              ) : null}
              <div className="text-[2rem] font-bold">{product.price}</div>
            </div>
          </div>
        </li>
      ))}
    </ul>
    </>
  );
}
