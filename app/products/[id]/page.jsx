'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useMemo, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { products } from '@/data/products';
import { addToCart } from '@/lib/ecommerce';

export default function ProductDetailsPage() {
  const params = useParams();
  const id = Number(params.id);

  const product = useMemo(
    () => products.find((item) => item.id === id),
    [id]
  );

  const related = useMemo(
    () => products.filter((item) => item.id !== id).slice(0, 4),
    [id]
  );

  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  if (!product) {
    return (
      <main>
        <Header />
        <section className="mx-auto max-w-4xl px-4 py-16 text-center">
          <p className="text-lg">Product not found.</p>
          <Link
            href="/products"
            className="mt-6 inline-block border px-6 py-2 text-sm uppercase"
          >
            Back to products
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="bg-white">
      <Header />

      {/* 🔥 PRODUCT SECTION */}
      <section className="mx-auto grid w-full max-w-[1600px] grid-cols-1 gap-8 px-4 py-8 lg:grid-cols-[1fr_420px]">
        
        {/* IMAGE */}
        <div>
          <div className="bg-[#f3f3f3] p-5">
            <img
              src={product.image}
              alt={product.name}
              className="mx-auto h-[500px] w-full max-w-[430px] object-contain"
            />
          </div>

          <div className="mt-4 grid grid-cols-5 gap-3">
            {products.slice(0, 5).map((thumb) => (
              <div key={thumb.id} className="border border-[#ececec] bg-[#fafafa] p-2">
                <img
                  src={thumb.image}
                  alt={thumb.name}
                  className="h-16 w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* DETAILS */}
        <div>
          <h1 className="text-[32px] font-semibold text-[#121212]">
            {product.name}
          </h1>

          <p className="mt-2 text-[28px] font-medium text-[#5f9d35]">
            {product.price}
          </p>

          <div className="mt-5 text-[13px] text-[#444]">
            SKU: {product.sku}
          </div>

          {/* QUANTITY */}
          <div className="mt-6 flex items-center gap-3">
            <button
              onClick={() =>
                setQuantity((prev) => Math.max(1, prev - 1))
              }
              className="h-10 w-10 border border-[#111]"
            >
              -
            </button>

            <div className="h-10 min-w-12 border border-[#111] px-3 text-center leading-10">
              {quantity}
            </div>

            <button
              onClick={() => setQuantity((prev) => prev + 1)}
              className="h-10 w-10 border border-[#111]"
            >
              +
            </button>
          </div>

          {/* ADD TO CART */}
          <button
            onClick={() => addToCart(product, quantity)}
            className="mt-5 w-full rounded bg-[#1700de] px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-[#0f00a8]"
          >
            Add To Cart
          </button>

          {/* VIEW CART */}
          <Link
            href="/cart"
            className="mt-3 block w-full border border-[#1700de] px-6 py-3 text-center text-[12px] font-semibold uppercase tracking-[0.16em] text-[#1700de] transition hover:bg-[#1700de] hover:text-white"
          >
            View Cart
          </Link>
        </div>
      </section>

      {/* 🔥 TABS SECTION */}
      <section className="mx-auto max-w-[1600px] px-4 pb-12">
        
        {/* TAB HEADINGS */}
        <div className="flex flex-wrap gap-8 border-b border-[#ececec] pb-3 text-[13px] uppercase tracking-[0.15em]">
          <button
            onClick={() => setActiveTab('description')}
            className={activeTab === 'description' ? 'text-black' : 'text-[#777]'}
          >
            Description
          </button>

          <button
            onClick={() => setActiveTab('shipping')}
            className={activeTab === 'shipping' ? 'text-black' : 'text-[#777]'}
          >
            Shipping & Returns
          </button>

          <button
            onClick={() => setActiveTab('reviews')}
            className={activeTab === 'reviews' ? 'text-black' : 'text-[#777]'}
          >
            Customer Reviews
          </button>
        </div>

        {/* TAB CONTENT */}
        <div className="pt-6 max-w-[900px]">

          {/* ✅ LOREM DESCRIPTION */}
          {activeTab === 'description' && (
            <div className="space-y-4 text-[15px] leading-7 text-[#444]">
              <h3 className="text-[18px] font-semibold">
                Product Description
              </h3>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>

              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>

              <ul className="list-disc pl-5 space-y-2">
                <li>High quality material</li>
                <li>Long lasting performance</li>
                <li>Eco-friendly and safe</li>
                <li>Easy to use and maintain</li>
              </ul>
            </div>
          )}

          {/* SHIPPING */}
          {activeTab === 'shipping' && (
            <div className="space-y-4 text-[15px] leading-7 text-[#444]">
              <h3 className="text-[18px] font-semibold">
                Shipping & Returns
              </h3>
              <p>
                Ships within 2–5 days with secure packaging. Returns accepted
                within 14 days.
              </p>
            </div>
          )}

          {/* REVIEWS */}
          {activeTab === 'reviews' && (
            <div className="space-y-4 text-[15px] leading-7 text-[#444]">
              <h3 className="text-[18px] font-semibold">
                Customer Reviews
              </h3>
              <p>
                Rated 4.8/5 by customers. People love the quality and fast delivery.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* 🔥 RELATED PRODUCTS */}
      <section className="mx-auto max-w-[1600px] px-4 pb-16">
        <h2 className="mb-5 text-center text-3xl font-semibold">
          You Might Also Like
        </h2>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {related.map((item) => (
            <Link key={item.id} href={`/products/${item.id}`} className="group">
              <div className="bg-[#f6f6f6] p-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="mx-auto h-36 w-full max-w-[110px] object-contain transition group-hover:scale-105"
                />
              </div>

              <p className="mt-2 text-center text-[13px]">{item.name}</p>
              <p className="mt-1 text-center text-[12px] text-[#5f9d35]">
                {item.price}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}