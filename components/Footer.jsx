"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 py-12 md:py-16 bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* GRID: 1 col mobile → 2 col sm → 4 col md */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-4">

          {/* LOGO — full width on mobile */}
          <div className="col-span-2 sm:col-span-2 md:col-span-1">
            <Link href="/">
              <Image
                src="/reference/logo.png"
                alt="TotalSafez Logo"
                width={140}
                height={50}
                className="object-contain"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-7 text-gray-500">
              Premium products crafted to bring safety and natural wellness
              into your everyday spaces.
            </p>
          </div>

          {/* INFO */}
          <div>
            <h6 className="text-sm font-semibold uppercase tracking-wider text-black">
              Info
            </h6>
            <ul className="mt-4 space-y-3 text-sm text-gray-500">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About Us' },
                { href: '/contact', label: 'Contact Us' },
                { href: '/faq', label: 'FAQ' },
              ].map(({ href, label }) => (
                <li key={label}>
                  <Link href={href} className="hover:text-black transition">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* PRODUCT TYPES */}
          <div>
            <h6 className="text-sm font-semibold uppercase tracking-wider text-black">
              Product Types
            </h6>
            <ul className="mt-4 space-y-3 text-sm text-gray-500">
              {[
                { href: '/products?category=pet', label: 'Pet Care' },
                { href: '/products?category=health', label: 'Healthcare' },
                { href: '/products?category=agriculture', label: 'Agriculture' },
                { href: '/products?category=environment', label: 'Environment' },
              ].map(({ href, label }) => (
                <li key={label}>
                  <Link href={href} className="hover:text-black transition">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ACCOUNT */}
          <div>
            <h6 className="text-sm font-semibold uppercase tracking-wider text-black">
              Account
            </h6>
            <ul className="mt-4 space-y-3 text-sm text-gray-500">
              {[
                { href: '/account', label: 'My Account' },
                { href: '/orders', label: 'Order Tracking' },
                { href: '/login', label: 'Login' },
              ].map(({ href, label }) => (
                <li key={label}>
                  <Link href={href} className="hover:text-black transition">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-stone-200 pt-6 text-sm text-gray-500 sm:flex-row sm:items-center">
          <p>© 2026 TotalSafez. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-wider text-black">
            <span className="border border-stone-300 px-2 py-1">Visa</span>
            <span className="border border-stone-300 px-2 py-1">Mastercard</span>
            <span className="border border-stone-300 px-2 py-1">PayPal</span>
          </div>
        </div>

      </div>
    </footer>
  );
}