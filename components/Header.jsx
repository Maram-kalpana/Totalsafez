'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getCart, getUser, getWishlist, setUser } from '@/lib/ecommerce';

const SearchIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="11" cy="11" r="7" />
    <path d="M20 20L16.5 16.5" />
  </svg>
);

const CartIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M7 7h13l-1.5 8H9L7 5H4" />
    <circle cx="10" cy="19" r="1.3" />
    <circle cx="17" cy="19" r="1.3" />
  </svg>
);

export default function Header() {
  const router = useRouter();
  const [user, setUserState] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [accountOpen, setAccountOpen] = useState(false);
  const accountRef = useRef(null);

  useEffect(() => {
    const sync = () => {
      const cart = getCart();
      const wishlist = getWishlist();
      const loggedUser = getUser();
      setCartCount(cart.reduce((sum, item) => sum + item.quantity, 0));
      setWishlistCount(wishlist.length);
      setUserState(loggedUser);
    };

    sync();
    window.addEventListener('storage', sync);
    window.addEventListener('garget:update', sync);
    return () => {
      window.removeEventListener('storage', sync);
      window.removeEventListener('garget:update', sync);
    };
  }, []);

  useEffect(() => {
    const onDown = (event) => {
      if (!accountOpen) return;
      const el = accountRef.current;
      if (!el) return;
      if (el.contains(event.target)) return;
      setAccountOpen(false);
    };

    window.addEventListener('mousedown', onDown);
    return () => window.removeEventListener('mousedown', onDown);
  }, [accountOpen]);

  const handleLogout = () => {
    setUser(null);
    setAccountOpen(false);
    router.push('/');
  };

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="mx-auto flex h-[68px] w-full max-w-[1920px] items-center justify-between px-6">
        <Link
          href="/"
          className="font-serif text-[26px] font-semibold leading-none tracking-[0.02em] text-[#111]"
        >
          GARGET
        </Link>

        <nav className="hidden items-center gap-10 text-[13px] font-medium text-[#111] md:flex">
          <Link href="/" className="transition-colors duration-300 hover:text-[#2f7d32]">
            Home
          </Link>
          <Link href="/shops" className="transition-colors duration-300 hover:text-[#2f7d32]">
            Shops
          </Link>
          <Link href="/products" className="transition-colors duration-300 hover:text-[#2f7d32]">
            Products
          </Link>
          <Link href="/blog" className="transition-colors duration-300 hover:text-[#2f7d32]">
            Blog
          </Link>
            <Link href="/" className="transition-colors duration-300 hover:text-[#2f7d32]">
            Pages
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-4 md:flex">
            <button className="flex items-center gap-2 text-[12px] font-medium text-[#111]">
              English <span className="text-[10px]">˅</span>
            </button>
            <button className="flex items-center gap-2 text-[12px] font-medium text-[#111]">
              USD <span className="text-[10px]">˅</span>
            </button>
          </div>

          <div ref={accountRef} className="relative">
            {!user ? (
              <Link
                href="/login"
                className="text-[12px] font-medium text-[#111] transition-colors hover:text-[#2f7d32]"
              >
                LOG IN / SIGN IN
              </Link>
            ) : (
              <>
                <button
                  onClick={() => setAccountOpen((v) => !v)}
                  className="text-[12px] font-medium text-[#111] transition-colors hover:text-[#2f7d32]"
                  aria-label="Account menu"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#111] text-[11px] font-semibold text-white">
                    {user?.name?.[0]?.toUpperCase() || 'U'}
                  </span>{' '}
                  <span className="ml-1 text-[10px]">˅</span>
                </button>

                {accountOpen && (
                  <div className="absolute right-0 mt-3 w-[240px] border border-[#eaeaea] bg-white p-2 shadow-sm">
                    <Link
                      href="/orders"
                      className="block rounded px-3 py-2 text-[13px] text-[#111] transition-colors hover:bg-[#f5f5f5]"
                      onClick={() => setAccountOpen(false)}
                    >
                      My Orders
                    </Link>
                    <Link
                      href="/profile?tab=settings"
                      className="block rounded px-3 py-2 text-[13px] text-[#111] transition-colors hover:bg-[#f5f5f5]"
                      onClick={() => setAccountOpen(false)}
                    >
                      Settings
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="mt-1 block w-full rounded px-3 py-2 text-left text-[13px] text-[#b42318] transition-colors hover:bg-[#f5f5f5]"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </>
            )}
          </div>

          <button aria-label="Search" className="transition-colors duration-300 hover:text-[#2f7d32] md:ml-1">
            <SearchIcon />
          </button>

          <Link
            href="/wishlist"
            aria-label="Wishlist"
            className="relative transition-colors duration-300 hover:text-[#2f7d32]"
          >
            <span className="text-[18px]">♡</span>
            {wishlistCount > 0 && (
              <span className="absolute -right-2 -top-1 h-3.5 min-w-3.5 rounded-full bg-[#7bb133] px-[3px] text-center text-[9px] leading-[14px] text-white">
                {wishlistCount}
              </span>
            )}
          </Link>

          <Link
            href="/cart"
            aria-label="Cart"
            className="relative transition-colors duration-300 hover:text-[#2f7d32]"
          >
            <CartIcon />
            <span className="absolute -right-2 -top-1 h-3.5 min-w-3.5 rounded-full bg-[#7bb133] px-[3px] text-center text-[9px] leading-[14px] text-white">
              {cartCount}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
