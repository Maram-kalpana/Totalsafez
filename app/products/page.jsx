'use client';

import Link from 'next/link';
import { useMemo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { products } from '@/data/products';

const topCategories = [
  { name: 'Pet Care', image: '/reference/pro1.jpeg' },
  { name: 'Healthcare', image: '/reference/pro2.jpeg' },
  { name: 'Agriculture', image: '/reference/pro3.jpeg' },
  { name: 'Environment', image: '/reference/pro4.jpeg' }
];

const filterGroups = [
  {
    title: 'Categories',
    items: ['Pet Care', 'Healthcare', 'Agriculture', 'Environment']
  },
  {
    title: 'Price',
    items: ['Price: ₹800 - ₹10000']
  }
];

export default function ProductsPage() {
  const listing = useMemo(() => [...products, ...products.slice(0, 3)], []);

  return (
    <main className="bg-white">
      <Header />

      {/* 🔥 BANNER */}
      <section className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1800&q=80"
          alt="Products banner"
          className="h-[480px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 mx-auto flex w-full max-w-[1600px] items-center justify-center px-4">
          <div className="text-center text-white">
            <h1 className="text-6xl font-semibold">Products</h1>
            <p className="mt-5 text-[15px]">Home &gt; Products</p>
          </div>
        </div>

        {/* 🔥 TOP CATEGORY ICONS */}
        <div className="absolute bottom-[38px] left-0 right-0 mx-auto flex w-full max-w-[1600px] items-center justify-center gap-8 px-4">
          {topCategories.map((category) => (
            <Link
              key={category.name}
              href={`/products?category=${category.name.toLowerCase().replace(' ', '-')}`}
              className="text-center text-white"
            >
              <div className="mx-auto flex h-[108px] w-[108px] items-center justify-center rounded-full bg-white shadow-sm">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-14 w-14 object-contain"
                />
              </div>
              <p className="mt-3 text-[13px] font-semibold">{category.name}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* 🔥 MAIN SECTION */}
      <section className="mx-auto grid w-full max-w-[1600px] grid-cols-1 lg:grid-cols-[270px_1fr]">

        {/* 🔵 SIDEBAR */}
        <aside className="border-r border-[#ebebeb] bg-[#fafafa] px-5 py-8">
          {filterGroups.map((group) => (
            <div key={group.title} className="mb-8">
              <h2 className="mb-3 text-[14px] font-semibold uppercase tracking-[0.3em] text-[#161616]">
                {group.title}
              </h2>

              <ul className="space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="text-[14px] text-[#555]">

                    {/* ✅ CATEGORY LINKS */}
                    {group.title === 'Categories' ? (
                      <Link
                        href={`/products?category=${item.toLowerCase().replace(' ', '-')}`}
                        className="hover:text-black"
                      >
                        {item}
                      </Link>
                    ) : (
                      item
                    )}

                  </li>
                ))}
              </ul>
            </div>
          ))}
        </aside>

        {/* 🟣 PRODUCT GRID */}
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
                      <span className="absolute right-2 top-2 bg-[#cb2942] px-2 py-1 text-[10px] text-white">
                        Sale
                      </span>
                    )}

                    <img
                      src={product.image}
                      alt={product.name}
                      className="mx-auto h-[140px] w-full max-w-[110px] object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <h3 className="mt-3 text-center text-[13px] font-medium">
                    {product.name}
                  </h3>

                  {/* ✅ PRICE FIX */}
                  <p className="mt-1 text-center text-[12px] text-[#4a8f2f]">
                    ₹{product.priceValue}
                  </p>

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