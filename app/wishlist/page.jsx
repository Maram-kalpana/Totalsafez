'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { addToCart, getWishlist, toggleWishlist } from '@/lib/ecommerce';

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const sync = () => setWishlist(getWishlist());
    sync();
    window.addEventListener('garget:update', sync);
    return () => window.removeEventListener('garget:update', sync);
  }, []);

  return (
    <main className="bg-white">
      <Header />
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-3xl font-semibold">Wishlist</h1>
        {!wishlist.length ? (
          <div className="mt-8 border border-[#ececec] p-8 text-center">
            <p className="text-[#666]">No items in wishlist.</p>
            <Link href="/products" className="mt-4 inline-block border border-[#111] px-6 py-2 text-sm uppercase">
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-2 gap-5 md:grid-cols-4">
            {wishlist.map((item) => (
              <article key={item.id} className="group">
                <Link href={`/products/${item.id}`}>
                  <div className="bg-[#f6f6f6] p-4">
                    <img src={item.image} alt={item.name} className="mx-auto h-36 w-full max-w-[110px] object-contain" />
                  </div>
                  <h3 className="mt-2 text-[13px] font-medium">{item.name}</h3>
                  <p className="text-[12px] text-[#5f9d35]">{item.price}</p>
                </Link>
                <button
  onClick={() => addToCart(item, 1)}
  className="mt-2 w-full bg-[#1700de] py-2 text-[11px] uppercase tracking-wider text-white hover:opacity-90"
>
  Add to cart
</button>

<button
  onClick={() => toggleWishlist(item)}
  className="mt-2 w-full border border-[#1700de] py-2 text-[11px] uppercase tracking-wider text-[#1700de] hover:bg-[#1700de] hover:text-white"
>
  Remove
</button>
              </article>
            ))}
          </div>
        )}
      </section>
      <Footer />
    </main>
  );
}
