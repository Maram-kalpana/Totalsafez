'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getOrders, getUser } from '@/lib/ecommerce';

export default function OrdersPage() {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setUser(getUser());
    setOrders(getOrders());
  }, []);

  return (
    <main className="bg-white">
      <Header />
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-3xl font-semibold">My Orders</h1>

        {!user ? (
          <div className="mt-8 border border-[#ececec] p-8 text-center">
            <p className="text-[#666]">Please login to view your orders.</p>
            <Link href="/login" className="mt-4 inline-block border border-[#111] px-6 py-2 text-sm uppercase">
              Go to Login
            </Link>
          </div>
        ) : !orders.length ? (
          <div className="mt-8 border border-[#ececec] p-8 text-center">
            <p className="text-[#666]">No orders yet.</p>
            <Link href="/products" className="mt-4 inline-block border border-[#111] px-6 py-2 text-sm uppercase">
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="mt-8 space-y-4">
            {orders.map((order) => (
              <article key={order.id} className="border border-[#ececec] p-5">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <p className="text-sm">Order #{order.id}</p>
                  <p className="text-sm">{new Date(order.date).toLocaleDateString()}</p>
                  <p className="text-sm font-medium text-[#2f7d32]">{order.status}</p>
                  <p className="text-sm font-semibold">${order.total.toFixed(2)}</p>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
                  {order.items.map((item) => (
                    <div key={`${order.id}-${item.id}`} className="border border-[#f0f0f0] p-2 text-center">
                      <img src={item.image} alt={item.name} className="mx-auto h-16 w-full max-w-[70px] object-contain" />
                      <p className="mt-2 text-[11px]">{item.name}</p>
                      <p className="text-[11px] text-[#666]">Qty {item.quantity}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
      <Footer />
    </main>
  );
}
