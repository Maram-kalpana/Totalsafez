"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-[600px] overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <Image
        src="/reference/banner.jpeg"
        alt="Plant Banner"
        fill
        priority
        className="object-cover object-[35%_center]"
      />

      {/* INVISIBLE CLICK AREA (OVER IMAGE BUTTON) */}
      <Link
        href="/products"
        className="absolute 
                   left-[70px] 
                   bottom-[140px] 
                   w-[220px] 
                   h-[65px] 
                   z-50 
                   block"
      />

    </section>
  );
}