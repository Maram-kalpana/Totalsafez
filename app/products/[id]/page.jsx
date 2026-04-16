'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useMemo, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { products } from '@/data/products';
import { addToCart, toggleWishlist } from '@/lib/ecommerce';

export default function ProductDetailsPage() {
  const params = useParams();
  const id = Number(params.id);

  const product = useMemo(() => products.find((item) => item.id === id), [id]);
  const related = useMemo(() => products.filter((item) => item.id !== id).slice(0, 4), [id]);

  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  if (!product) {
    return (
      <main>
        <Header />
        <section className="mx-auto max-w-4xl px-4 py-16 text-center">
          <p className="text-lg">Product not found.</p>
          <Link href="/products" className="mt-6 inline-block border px-6 py-2 text-sm uppercase">
            Back to products
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="bg-white">
      <Header />

      <section className="mx-auto grid w-full max-w-[1600px] grid-cols-1 gap-8 px-4 py-8 lg:grid-cols-[1fr_420px]">
        <div>
          <div className="bg-[#f3f3f3] p-5">
            <img src={product.image} alt={product.name} className="mx-auto h-[500px] w-full max-w-[430px] object-contain" />
          </div>
          <div className="mt-4 grid grid-cols-5 gap-3">
            {products.slice(0, 5).map((thumb) => (
              <div key={thumb.id} className="border border-[#ececec] bg-[#fafafa] p-2">
                <img src={thumb.image} alt={thumb.name} className="h-16 w-full object-contain" />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-[32px] font-semibold text-[#121212]">{product.name}</h1>
          <p className="mt-2 text-[28px] font-medium text-[#5f9d35]">{product.price}</p>
          <p className="mt-4 text-[14px] leading-7 text-[#5d5d5d]">{product.description}</p>

          <div className="mt-5 text-[13px] text-[#444]">SKU: {product.sku}</div>

          <div className="mt-6 flex items-center gap-3">
            <button onClick={() => setQuantity((prev) => Math.max(1, prev - 1))} className="h-10 w-10 border border-[#111] text-lg">
              -
            </button>
            <div className="h-10 min-w-12 border border-[#111] px-3 text-center leading-10">{quantity}</div>
            <button onClick={() => setQuantity((prev) => prev + 1)} className="h-10 w-10 border border-[#111] text-lg">
              +
            </button>
          </div>

          <button
            onClick={() => addToCart(product, quantity)}
            className="mt-5 w-full rounded bg-black px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#2f7d32]"
          >
            Add To Cart
          </button>

          <button
            onClick={() => toggleWishlist(product)}
            className="mt-3 w-full border border-[#1a1a1a] px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#1a1a1a]"
          >
            Add To Wishlist
          </button>

          <Link href="/cart" className="mt-3 block w-full border border-[#dcdcdc] px-6 py-3 text-center text-[12px] font-semibold uppercase tracking-[0.16em]">
            View Cart
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-4 pb-12">
        <div className="flex flex-wrap gap-8 border-b border-[#ececec] pb-3 text-[13px] uppercase tracking-[0.15em]">
          <button onClick={() => setActiveTab('description')} className={activeTab === 'description' ? 'text-black' : 'text-[#777]'}>
            Description
          </button>
          <button onClick={() => setActiveTab('shipping')} className={activeTab === 'shipping' ? 'text-black' : 'text-[#777]'}>
            Shipping & Returns
          </button>
          <button onClick={() => setActiveTab('reviews')} className={activeTab === 'reviews' ? 'text-black' : 'text-[#777]'}>
            Customer Reviews
          </button>
        </div>

        <div className="pt-5 text-[14px] leading-7 text-[#555]">
          {activeTab === 'description' && <p>{product.description}</p>}
          {activeTab === 'shipping' && <p>Ships within 2-5 days with secure plant-safe packaging. Returns accepted within 14 days.</p>}
          {activeTab === 'reviews' && <p>Rated 4.8/5 by indoor plant enthusiasts. Customers love the quality and packaging.</p>}
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-4 pb-16">
        <h2 className="mb-5 text-center text-3xl font-semibold">You Might Also Like</h2>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {related.map((item) => (
            <Link key={item.id} href={`/products/${item.id}`} className="group">
              <div className="bg-[#f6f6f6] p-4">
                <img src={item.image} alt={item.name} className="mx-auto h-36 w-full max-w-[110px] object-contain transition-transform group-hover:scale-105" />
              </div>
              <p className="mt-2 text-center text-[13px]">{item.name}</p>
              <p className="mt-1 text-center text-[12px] text-[#5f9d35]">{item.price}</p>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
