'use client';

import Link from 'next/link';
import { useMemo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { products } from '@/data/products';

const topCategories = [
  { name: 'Green Therapy', image: products[0].image },
  { name: 'Hanging Plants', image: products[1].image },
  { name: 'Herb Garden', image: products[2].image },
  { name: 'Outdoor Plants', image: products[3].image },
  { name: 'Plant Gifts', image: products[4].image }
];

const filterGroups = [
  { title: 'Categories', items: ['Outdoor Plants', 'Summer Garden', 'Best Seller', 'Herb Garden', 'Plant Lovers', 'Hanging Plants', 'Cactus Lovers', 'Special Succulent', 'Palms'] },
  { title: 'Price', items: ['Price: $10 - $120'] },
  { title: 'Color', items: ['Black', 'Gray', 'Green', 'Pink', 'White'] },
  { title: 'Tag', items: ['Cacti Plant', 'Easy Plant', 'Dark Green', 'Very Hard', 'Tall Plant'] },
  { title: 'Brand', items: ['Garget', 'Fennelg', 'Garget Gardening', 'Houseplants Store Shopify 2.0', 'Homey', 'PlantBliss', 'PureParadise'] }
];

export default function ProductsPage() {
  const listing = useMemo(() => [...products, ...products.slice(0, 3)], []);

  return (
    <main className="bg-white">
      <Header />

      <section className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1800&q=80"
          alt="Products banner"
          className="h-[480px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 mx-auto flex w-full max-w-[1600px] items-center justify-center px-4">
          <div className="text-center text-white">
            <h1 className="text-6xl font-semibold leading-none">Products</h1>
            <p className="mt-5 text-[15px] text-white/90">Home &nbsp; &gt; &nbsp; Products</p>
          </div>
        </div>

        <div className="absolute bottom-[38px] left-0 right-0 mx-auto flex w-full max-w-[1600px] items-center justify-center gap-8 px-4">
          {topCategories.map((category) => (
            <div key={category.name} className="text-center text-white">
              <div className="mx-auto flex h-[108px] w-[108px] items-center justify-center rounded-full bg-white/95 shadow-sm">
                <img src={category.image} alt={category.name} className="h-14 w-14 object-contain" />
              </div>
              <p className="mt-3 text-[12px] font-semibold leading-none sm:text-[14px]">{category.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-[1600px] grid-cols-1 lg:grid-cols-[270px_1fr]">
        <aside className="border-r border-[#ebebeb] bg-[#fafafa] px-5 py-8">
          {filterGroups.map((group) => (
            <div key={group.title} className="mb-8">
              <h2 className="mb-3 text-[14px] font-semibold uppercase tracking-[0.3em] text-[#161616]">{group.title}</h2>
              <ul className="space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="text-[14px] text-[#555]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </aside>

        <div className="px-5 py-8">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-[14px] text-[#666]">{listing.length} products</p>
            <p className="text-[14px] text-[#666]">Featured</p>
          </div>

          <div className="grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-4">
            {listing.map((product, index) => (
              <article key={`${product.id}-${index}`} className="group">
                <Link href={`/products/${product.id}`}>
                  <div className="relative bg-[#f6f6f6] p-5">
                    {product.isSale && (
                      <span className="absolute right-2 top-2 bg-[#cb2942] px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                        Sale
                      </span>
                    )}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="mx-auto h-[140px] w-full max-w-[110px] object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-3 text-center text-[13px] font-medium text-[#1d1d1d]">{product.name}</h3>
                  <p className="mt-1 text-center text-[12px] text-[#4a8f2f]">{product.price}</p>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
