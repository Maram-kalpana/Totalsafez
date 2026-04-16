'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getCart, getOrders, getUser, getWishlist, setUser } from '@/lib/ecommerce';

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [orderCount, setOrderCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [tab, setTab] = useState('overview');
  const router = useRouter();

  useEffect(() => {
    const sync = () => {
      setUser(getUser());
      const cart = getCart();
      const wishlist = getWishlist();
      const orders = getOrders();
      setCartCount(cart.reduce((sum, item) => sum + item.quantity, 0));
      setWishlistCount(wishlist.length);
      setOrderCount(orders.length);
    };

    sync();
  }, []);

  useEffect(() => {
    // Avoid useSearchParams prerender issues; parse query on client only.
    const query = new URLSearchParams(window.location.search);
    const nextTab = query.get('tab') || 'overview';
    setTab(nextTab);
  }, []);

  const handleLogout = () => {
    setUser(null);
    router.push('/');
  };

  return (
    <main className="bg-white">
      <Header />
      <section className="mx-auto max-w-5xl px-4 py-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold">My Profile</h1>
            <p className="mt-2 text-sm text-[#666]">Manage your account details, settings, and orders.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/profile?tab=overview"
              className={`rounded border px-4 py-2 text-[12px] uppercase tracking-[0.12em] transition-colors ${
                tab === 'overview' ? 'border-[#111] bg-[#111] text-white' : 'border-[#dedede] bg-white text-[#111] hover:bg-[#f5f5f5]'
              }`}
            >
              Account Details
            </Link>
            <Link
              href="/profile?tab=settings"
              className={`rounded border px-4 py-2 text-[12px] uppercase tracking-[0.12em] transition-colors ${
                tab === 'settings' ? 'border-[#111] bg-[#111] text-white' : 'border-[#dedede] bg-white text-[#111] hover:bg-[#f5f5f5]'
              }`}
            >
              Settings
            </Link>
            <Link
              href="/profile?tab=details"
              className={`rounded border px-4 py-2 text-[12px] uppercase tracking-[0.12em] transition-colors ${
                tab === 'details' ? 'border-[#111] bg-[#111] text-white' : 'border-[#dedede] bg-white text-[#111] hover:bg-[#f5f5f5]'
              }`}
            >
              Details
            </Link>
          </div>
        </div>

        {!user ? (
          <div className="mt-8 border border-[#ececec] p-8 text-center">
            <p className="text-[#666]">Please login to view your profile.</p>
            <Link href="/login" className="mt-4 inline-block border border-[#111] px-6 py-2 text-sm uppercase">
              Go to Login
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="border border-[#ececec] p-6">
              {tab === 'settings' ? (
                <>
                  <h2 className="text-lg font-semibold">Settings</h2>
                  <div className="mt-4 space-y-4 text-sm text-[#444]">
                    <label className="flex items-center justify-between gap-3">
                      <span>Email notifications</span>
                      <input type="checkbox" defaultChecked className="h-4 w-4" />
                    </label>
                    <label className="flex items-center justify-between gap-3">
                      <span>Order updates</span>
                      <input type="checkbox" defaultChecked className="h-4 w-4" />
                    </label>
                    <div className="text-[#666]">
                      Delivery address and payment updates are demo-only in this clone.
                    </div>
                    <button className="mt-2 w-full bg-black px-4 py-3 text-[12px] font-semibold uppercase tracking-wider text-white hover:bg-[#2f7d32]">
                      Save Settings
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <h2 className="text-lg font-semibold">Account Details</h2>
                  <p className="mt-4 text-sm text-[#555]">Name: {user.name}</p>
                  <p className="mt-2 text-sm text-[#555]">Email: {user.email}</p>
                  <p className="mt-2 text-sm text-[#555]">Member since: {new Date(user.joinedAt).toLocaleDateString()}</p>

                  <div className="mt-6 border-t border-[#ececec] pt-5">
                    <h3 className="text-sm font-semibold">Quick Links</h3>
                    <div className="mt-3 space-y-2 text-sm">
                      <Link href="/orders" className="block text-[#111] underline">
                        My Orders
                      </Link>
                      <Link href="/wishlist" className="block text-[#111] underline">
                        Wishlist
                      </Link>
                      <Link href="/cart" className="block text-[#111] underline">
                        Cart
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="border border-[#ececec] p-6">
              <h2 className="text-lg font-semibold">Account Summary</h2>
              <div className="mt-4 space-y-3 text-sm text-[#555]">
                <div className="flex justify-between gap-4">
                  <span>Orders</span>
                  <span className="font-medium">{orderCount}</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span>Wishlist items</span>
                  <span className="font-medium">{wishlistCount}</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span>Cart items</span>
                  <span className="font-medium">{cartCount}</span>
                </div>
                <div className="text-[#666]">
                  This clone uses local storage for cart/wishlist/orders.
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="mt-5 w-full border border-[#d4d4d4] px-4 py-3 text-[12px] font-semibold uppercase tracking-wider text-[#111] transition-colors hover:bg-[#f5f5f5]"
              >
                Logout
              </button>
              {tab !== 'settings' && (
                <div className="mt-5 text-sm">
                  <Link
                    href="/profile?tab=settings"
                    className="inline-block rounded border border-[#111] px-4 py-3 text-[12px] font-semibold uppercase tracking-wider text-[#111] transition-colors hover:bg-[#111] hover:text-white"
                  >
                    Go to Settings
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </section>
      <Footer />
    </main>
  );
}
