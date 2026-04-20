"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  return (
    <section className="relative w-full h-[600px] overflow-hidden">

      {/* IMAGE SHIFTED MORE RIGHT */}
      <Image
        src="/reference/home1.png"
        alt="Plant Banner"
        fill
        priority
        className="object-cover object-[35%_center]"
      />

      {/* CLICKABLE BUTTON (ALIGNED WITH IMAGE BUTTON) */}
      <button
        onClick={() => router.push("/products")}
        className="absolute 
                   left-[70px] 
                   bottom-[140px] 
                   w-[220px] 
                   h-[65px] 
                   z-20 
                   cursor-pointer"
      />

    </section>
  );
}