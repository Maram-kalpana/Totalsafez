"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { getCart, getUser, setUser } from "@/lib/ecommerce";

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
  const [accountOpen, setAccountOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const accountRef = useRef(null);

  // Sync cart + user
  useEffect(() => {
    const sync = () => {
      const cart = getCart();
      const loggedUser = getUser();

      setCartCount(cart.reduce((sum, item) => sum + item.quantity, 0));
      setUserState(loggedUser);
    };

    sync();
    window.addEventListener("storage", sync);
    window.addEventListener("garget:update", sync);

    return () => {
      window.removeEventListener("storage", sync);
      window.removeEventListener("garget:update", sync);
    };
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const onDown = (event) => {
      if (!accountOpen) return;
      const el = accountRef.current;
      if (!el) return;
      if (el.contains(event.target)) return;
      setAccountOpen(false);
    };

    window.addEventListener("mousedown", onDown);
    return () => window.removeEventListener("mousedown", onDown);
  }, [accountOpen]);

  const handleLogout = () => {
    setUser(null);
    setAccountOpen(false);
    router.push("/");
  };

  const handleSearch = () => {
    if (!query.trim()) return;
    router.push(`/search?q=${query}`);
    setSearchOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white">

      {/* TOP BAR */}
      <div className="mx-auto flex h-[68px] w-full max-w-[1920px] items-center justify-between px-6">

        {/* LOGO */}
        <Link href="/">
          <Image
            src="/reference/logo.png"
            alt="logo"
            width={170}
            height={40}
            className="object-contain"
          />
        </Link>

        {/* NAV */}
        <nav className="hidden items-center gap-10 text-[13px] font-medium text-[#111] md:flex">
          <Link href="/" className="hover:text-[#2f7d32]">Home</Link>
          <Link href="/products" className="hover:text-[#2f7d32]">Products</Link>
          <Link href="/about" className="hover:text-[#2f7d32]">About Us</Link>
          <Link href="/contact" className="hover:text-[#2f7d32]">Contact Us</Link>
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {/* ACCOUNT */}
          <div ref={accountRef} className="relative">
            {!user ? (
              <Link href="/login" className="text-[12px] hover:text-[#2f7d32]">
                LOG IN / SIGN UP
              </Link>
            ) : (
              <>
                <button onClick={() => setAccountOpen((v) => !v)}>
                  <span className="h-8 w-8 flex items-center justify-center rounded-full bg-black text-white">
                    {user?.name?.[0]?.toUpperCase() || "U"}
                  </span>
                </button>

                {accountOpen && (
                  <div className="absolute right-0 mt-3 w-[240px] border bg-white p-2 shadow">
                    <Link href="/orders" className="block px-3 py-2 hover:bg-gray-100">
                      My Orders
                    </Link>
                    <Link href="/profile" className="block px-3 py-2 hover:bg-gray-100">
                      Settings
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-3 py-2 text-red-500 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </>
            )}
          </div>

          {/* SEARCH */}
          <button onClick={() => setSearchOpen((v) => !v)}>
            <SearchIcon />
          </button>

          {/* CART */}
          <Link href="/cart" className="relative">
            <CartIcon />
            <span className="absolute -top-1 -right-2 bg-green-500 text-white text-[10px] px-1 rounded">
              {cartCount}
            </span>
          </Link>

        </div>
      </div>

      {/* SEARCH BAR */}
      {searchOpen && (
        <div className="w-full border-t px-6 py-3 bg-white">
          <div className="mx-auto max-w-[800px] flex gap-2">
            <input
              type="text"
              placeholder="Search products..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="w-full border px-4 py-2 outline-none"
            />
            <button
              onClick={handleSearch}
              className="bg-[#1700de] text-white px-4"
            >
              Search
            </button>
          </div>
        </div>
      )}

    </header>
  );
}