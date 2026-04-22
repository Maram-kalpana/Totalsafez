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

const MenuIcon = () => (
  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

const CloseIcon = () => (
  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default function Header() {
  const router = useRouter();

  const [user, setUserState] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const [accountOpen, setAccountOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
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

  // Close account dropdown on outside click
  useEffect(() => {
    const onDown = (event) => {
      if (!accountOpen) return;
      if (!accountRef.current?.contains(event.target)) setAccountOpen(false);
    };
    window.addEventListener("mousedown", onDown);
    return () => window.removeEventListener("mousedown", onDown);
  }, [accountOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, []);

  const handleLogout = () => {
    setUser(null);
    setAccountOpen(false);
    router.push("/");
  };

  const handleSearch = () => {
    if (!query.trim()) return;
    router.push(`/search?q=${query}`);
    setSearchOpen(false);
    setMobileOpen(false);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-stone-200">

      {/* TOP BAR */}
      <div className="mx-auto flex h-14 sm:h-[68px] w-full max-w-[1920px] items-center justify-between px-3 sm:px-6">

        {/* LOGO */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/reference/logo.png"
            alt="logo"
            width={170}
            height={40}
            className="object-contain w-[100px] sm:w-[140px] md:w-[170px] h-auto"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-10 text-[13px] font-medium text-[#111]">
          {navLinks.map(({ href, label }) => (
            <Link key={label} href={href} className="hover:text-[#2f7d32] transition">
              {label}
            </Link>
          ))}
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-2 sm:gap-4">

          {/* ACCOUNT — hidden on mobile (in drawer instead) */}
          <div ref={accountRef} className="relative hidden sm:block">
            {!user ? (
              <Link href="/login" className="text-[12px] hover:text-[#2f7d32] whitespace-nowrap">
                LOG IN / SIGN UP
              </Link>
            ) : (
              <>
                <button onClick={() => setAccountOpen((v) => !v)}>
                  <span className="h-8 w-8 flex items-center justify-center rounded-full bg-black text-white text-sm">
                    {user?.name?.[0]?.toUpperCase() || "U"}
                  </span>
                </button>
                {accountOpen && (
                  <div className="absolute right-0 mt-3 w-[240px] border bg-white p-2 shadow z-50">
                    <Link href="/orders" className="block px-3 py-2 hover:bg-gray-100 text-sm">My Orders</Link>
                    <Link href="/profile" className="block px-3 py-2 hover:bg-gray-100 text-sm">Settings</Link>
                    <button onClick={handleLogout} className="block w-full text-left px-3 py-2 text-red-500 hover:bg-gray-100 text-sm">
                      Logout
                    </button>
                  </div>
                )}
              </>
            )}
          </div>

          {/* SEARCH */}
          <button onClick={() => setSearchOpen((v) => !v)} className="p-1 hover:text-[#2f7d32] transition">
            <SearchIcon />
          </button>

          {/* CART */}
          <Link href="/cart" className="relative p-1 hover:text-[#2f7d32] transition">
            <CartIcon />
            <span className="absolute -top-1 -right-1 bg-green-500 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          </Link>

          {/* HAMBURGER — mobile only */}
          <button
            className="md:hidden p-1 hover:text-[#2f7d32] transition"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>

        </div>
      </div>

      {/* SEARCH BAR */}
      {searchOpen && (
        <div className="w-full border-t px-4 sm:px-6 py-3 bg-white">
          <div className="mx-auto max-w-[800px] flex gap-2">
            <input
              type="text"
              placeholder="Search products..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="w-full border px-4 py-2 outline-none text-sm"
            />
            <button onClick={handleSearch} className="bg-[#1700de] text-white px-4 text-sm whitespace-nowrap">
              Search
            </button>
          </div>
        </div>
      )}

      {/* MOBILE DRAWER */}
      {mobileOpen && (
        <div className="md:hidden border-t border-stone-200 bg-white px-4 py-4 space-y-1">

          {/* Account */}
          {!user ? (
            <Link href="/login" onClick={() => setMobileOpen(false)}
              className="block py-2 text-sm font-semibold text-[#111] border-b border-stone-100 hover:text-[#2f7d32]">
              LOG IN / SIGN UP
            </Link>
          ) : (
            <div className="border-b border-stone-100 pb-2">
              <p className="py-2 text-sm font-semibold text-[#111]">Hi, {user.name}</p>
              <Link href="/orders" onClick={() => setMobileOpen(false)} className="block py-1.5 text-sm text-gray-600 hover:text-black">My Orders</Link>
              <Link href="/profile" onClick={() => setMobileOpen(false)} className="block py-1.5 text-sm text-gray-600 hover:text-black">Settings</Link>
              <button onClick={handleLogout} className="block py-1.5 text-sm text-red-500 hover:text-red-700">Logout</button>
            </div>
          )}

          {/* Nav Links */}
          <p className="pt-3 pb-1 text-xs font-semibold uppercase tracking-wider text-gray-400">Menu</p>
          {navLinks.map(({ href, label }) => (
            <Link key={label} href={href} onClick={() => setMobileOpen(false)}
              className="block py-2 text-sm text-gray-600 hover:text-[#2f7d32] transition">
              {label}
            </Link>
          ))}

          {/* Product Types */}
          <p className="pt-3 pb-1 text-xs font-semibold uppercase tracking-wider text-gray-400">Product Types</p>
          {[
            { href: "/products?category=pet", label: "Pet Care" },
            { href: "/products?category=health", label: "Healthcare" },
            { href: "/products?category=agriculture", label: "Agriculture" },
            { href: "/products?category=environment", label: "Environment" },
          ].map(({ href, label }) => (
            <Link key={label} href={href} onClick={() => setMobileOpen(false)}
              className="block py-2 text-sm text-gray-600 hover:text-[#2f7d32] transition">
              {label}
            </Link>
          ))}

        </div>
      )}

    </header>
  );
}