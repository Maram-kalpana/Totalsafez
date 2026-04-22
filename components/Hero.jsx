"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full">

      {/* IMAGE — w-full h-auto shows the entire banner at natural aspect ratio, nothing cropped */}
      <Image
        src="/reference/banner.jpeg"
        alt="TotalSafez Banner"
        width={1440}
        height={640}
        priority
        className="w-full h-auto block"
      />

      {/* Full-area clickable link */}
      <Link
        href="/products"
        className="absolute inset-0 z-50 block"
        aria-label="Shop Products"
      />

    </section>
  );
}