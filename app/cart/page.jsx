'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { checkoutCart, getCart, removeFromCart, updateCartQty } from '@/lib/ecommerce';

export default function CartPage() {
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const sync = () => setCart(getCart());
    sync();
    window.addEventListener('garget:update', sync);
    return () => window.removeEventListener('garget:update', sync);
  }, []);

  const subtotal = useMemo(() => cart.reduce((sum, item) => sum + item.priceValue * item.quantity, 0), [cart]);

  const placeOrder = () => {
    const result = checkoutCart();
    setMessage(result.message);
    setCart(getCart());
  };

  return (
    <main className="bg-white">
      <Header />
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-3xl font-semibold">Shopping Cart</h1>

        {!cart.length ? (
          <div className="mt-8 border border-[#ececec] p-8 text-center">
            <p className="text-[#666]">Your cart is empty.</p>
            <Link href="/products" className="mt-4 inline-block border border-[#111] px-6 py-2 text-sm uppercase">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_320px]">
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="grid items-center gap-4 border border-[#ececec] p-4 sm:grid-cols-[90px_1fr_auto_auto]">
                  <img src={item.image} alt={item.name} className="h-20 w-20 object-contain" />
                  <div>
                    <p className="text-[15px] font-medium">{item.name}</p>
                    <p className="text-sm text-[#5f9d35]">{item.price}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => updateCartQty(item.id, item.quantity - 1)} className="h-8 w-8 border">-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateCartQty(item.id, item.quantity + 1)} className="h-8 w-8 border">+</button>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="text-sm text-[#b42318]">
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="h-fit border border-[#ececec] p-5">
              <h2 className="text-lg font-semibold">Order Summary</h2>
              <div className="mt-4 flex justify-between text-sm">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <button onClick={placeOrder} className="mt-5 w-full bg-black px-4 py-3 text-xs font-semibold uppercase tracking-wider text-white">
                Proceed to Checkout
              </button>
              {message ? <p className="mt-3 text-xs text-[#4a8f2f]">{message}</p> : null}
            </div>
          </div>
        )}
      </section>
      <Footer />
    </main>
  );
}
