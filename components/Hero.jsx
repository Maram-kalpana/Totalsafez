import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#e9eaeb]">
      
      <div className="grid min-h-[500px] w-full grid-cols-1 lg:grid-cols-2">
        
        {/* LEFT CONTENT */}
        <div className="z-10 flex flex-col justify-center px-10">
          <h2 className="text-[50px] font-semibold leading-[1.08] text-[#111]">
            Grow Serenity
          </h2>

          <p className="mt-4 max-w-[460px] text-[17px] leading-[1.8] text-[#5a5a5a]">
            Discover a collection of houseplants that blend beauty with ease. From low-maintenance greens to statement foliage
          </p>

          <Link
  href="/products"
  className="mt-6 w-fit inline-flex items-center rounded-md bg-white px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#111] transition-all duration-300 hover:bg-[#111] hover:text-white"
>
  ALL PRODUCTS
</Link>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative h-[500px] w-full">
          <img
            src="https://images.unsplash.com/photo-1463154545680-d59320fd685d?auto=format&fit=crop&w=1500&q=80"
            alt="plant"
            className="h-full w-full object-cover"
          />
        </div>

      </div>

      {/* DOTS */}
      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-black" />
        <span className="h-2 w-2 rounded-full bg-black/20" />
      </div>

    </section>
  );
}