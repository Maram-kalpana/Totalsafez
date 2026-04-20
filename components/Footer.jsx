"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 py-16 bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">

          {/* ✅ LOGO SECTION */}
          <div>
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
              Premium plants and lifestyle accents crafted to bring tranquility
              and natural beauty into your everyday spaces.
            </p>
          </div>

          {/* ✅ INFO */}
          <div>
            <h6 className="text-sm font-semibold uppercase tracking-wider text-black">
              Info
            </h6>

            <ul className="mt-4 space-y-3 text-sm text-gray-500">

              <li>
                <Link href="/" className="hover:text-black transition">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-black transition">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-black transition">
                  Contact Us
                </Link>
              </li>

              <li>
                <Link href="/faq" className="hover:text-black transition">
                  FAQ
                </Link>
              </li>

            </ul>
          </div>

          {/* ✅ PRODUCT TYPES */}
          <div>
            <h6 className="text-sm font-semibold uppercase tracking-wider text-black">
              Product Types
            </h6>

            <ul className="mt-4 space-y-3 text-sm text-gray-500">

              <li>
                <Link href="/products?category=pet" className="hover:text-black transition">
                  Pet Care
                </Link>
              </li>

              <li>
                <Link href="/products?category=health" className="hover:text-black transition">
                  Healthcare
                </Link>
              </li>

              <li>
                <Link href="/products?category=agriculture" className="hover:text-black transition">
                  Agriculture
                </Link>
              </li>

              <li>
                <Link href="/products?category=environment" className="hover:text-black transition">
                  Environment
                </Link>
              </li>

            </ul>
          </div>

          {/* ✅ ACCOUNT */}
          <div>
            <h6 className="text-sm font-semibold uppercase tracking-wider text-black">
              Account
            </h6>

            <ul className="mt-4 space-y-3 text-sm text-gray-500">

              <li>
                <Link href="/account" className="hover:text-black transition">
                  My Account
                </Link>
              </li>

              <li>
                <Link href="/orders" className="hover:text-black transition">
                  Order Tracking
                </Link>
              </li>

              {/* <li>
                <Link href="/wishlist" className="hover:text-black transition">
                  Wishlist
                </Link>
              </li> */}

              <li>
                <Link href="/login" className="hover:text-black transition">
                  Login
                </Link>
              </li>

            </ul>
          </div>
        </div>

        {/* ✅ BOTTOM */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-stone-200 pt-6 text-sm text-gray-500 sm:flex-row sm:items-center">
          <p>© 2026 TotalSafez. All rights reserved.</p>

          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-black">
            <span className="border border-stone-300 px-2 py-1">Visa</span>
            <span className="border border-stone-300 px-2 py-1">Mastercard</span>
            <span className="border border-stone-300 px-2 py-1">PayPal</span>
          </div>
        </div>

      </div>
    </footer>
  );
}