"use client";
// import { useState, useMemo } from 'react';
import Link from "next/link";
import Image from "next/image";
import { products } from '@/data/products'
import { useTranslation } from '@/hook/useTranslation';

export default function ProductGrid() {
  //   const [category, setCategory] = useState('All');
  // const [minPrice, setMinPrice] = useState('');
  // const [maxPrice, setMaxPrice] = useState('');
  // const [sort, setSort] = useState('default');
  const { t } = useTranslation();

  // const categories = ['All', ...new Set(products.map((p) => p.category))];

  // const filteredProducts = useMemo(() => {
    const filteredProducts = [...products];

  //   if (category !== 'All') {
  //     filtered = filtered.filter((p) => p.category === category);
  //   }

  //   if (minPrice) {
  //     filtered = filtered.filter((p) => (p.price) >= parseFloat(minPrice));
  //   }

  //   if (maxPrice) {
  //     filtered = filtered.filter((p) => (p.price) <= parseFloat(maxPrice));
  //   }

  //   switch (sort) {
  //     case 'price-asc':
  //       filtered.sort((a, b) => (a.price) - (b.price));
  //       break;
  //     case 'price-desc':
  //       filtered.sort((a, b) => (b.price) - (a.price));
  //       break;
  //   }

  //   return filtered;
  // }, [category, minPrice, maxPrice, sort]);
  return (
    <div className="section-template--20903562871069__product-grid shopify-section section">
      <style jsx>{`
        .section-template--20903562871069__product-grid-padding {
          padding-top: 27px;
          padding-bottom: 27px;
        }

        @media screen and (min-width: 750px) {
          .section-template--20903562871069__product-grid-padding {
            padding-top: 36px;
            padding-bottom: 36px;
          }
        }
      `}</style>
      
      {/* <div className="flex flex-wrap gap-4 mb-4">
        <select onChange={(e) => setCategory(e.target.value)} value={category}>
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>

        <input
          type="number"
          placeholder="Min price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Max price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />

        <select onChange={(e) => setSort(e.target.value)} value={sort}>
          <option value="default">Default</option>
          <option value="price-asc">Price ↑</option>
          <option value="price-desc">Price ↓</option>
        </select>
      </div> */}
      
      <div className="section-template--20903562871069__product-grid-padding">
        <div className="product-grid-container" id="ProductGridContainer">
          <div className="collection page-width">
            <div className="loading-overlay gradient"></div>

            <ul id="product-grid" className="grid product-grid grid--2-col-tablet-down grid--4-col-desktop">
              {filteredProducts.map((product) => (
                <li key={product.id} className="grid__item">
                  <div className="card-wrapper product-card-wrapper underline-links-hover">
                    <div className="card card--standard card--media">
                      <div className="card__inner">
                        <div className="card__media">
                          <div className=" media--transparent media--hover-effect">
                            <Link href={product.href}>
                              <Image
                                src={product.image}
                                alt={product.title}
                                width={550}
                                height={550}
                                className="motion-reduce"
                                style={{maxHeight: "269px", objectFit: "contain"}}
                              />
                            </Link>
                          </div>
                        </div>
                        <div className="card__content">
                          <div className="card__information">
                            <h3 className="card__heading">
                              <Link href={product.href} className="full-unstyled-link">
                                {t(product.title)}
                              </Link>
                            </h3>
                          </div>
                          <div className="card__badge bottom left"></div>
                        </div>
                      </div>
                      <div className="card__content">
                        <div className="card__information">
                          <h3 className="card__heading h5">
                            <Link href={product.href} className="full-unstyled-link">
                            </Link>
                          </h3>
                          <div className="card-information">
                            <span className="caption-large light"></span>
                            <div className="price">
                              <div className="price__container">
                                <div className="price__regular">
                                  <span className="visually-hidden visually-hidden--inline">通常価格</span>
                                  <span className="price-item price-item--regular">
                                    {product.price} {t(product.currency)}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card__badge bottom left"></div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}