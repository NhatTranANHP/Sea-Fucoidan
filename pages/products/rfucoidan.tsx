'use client'; // Only needed if you're using this in app/ directory

// import { useEffect, useRef } from 'react';
// import { useTranslation } from "@/hook/useTranslation";
import Layout from "@/components/Layout";
// import { useCart } from '@/context/CartContext';
// import { products, Product } from '@/data/products';
import Image from "next/image";
// import Link from 'next/link';


export default function TFucoidan100() {
    // const { t } = useTranslation();
    // const inviewRefs = useRef<NodeListOf<Element>>(null);
    // const counterRef = useRef<HTMLDivElement>(null);
    // const { addToCart } = useCart();
    // const product: Product | undefined = products.find(p => p.id === 't-fucoidan100');
    // const handleAddToCart = (e: React.MouseEvent) => {
    //     e.preventDefault(); // prevent the link from navigating
    //     addToCart(product as Product);
    // };

  return (
    <Layout>
        <Image src="/rfucoidan.jpg" alt="rfucoidan" width={679} height={960}/>
    </Layout>
  );}