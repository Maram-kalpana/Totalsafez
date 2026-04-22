import Link from "next/link";

export default function PromoSection() {
  return (
    <section className="pb-16">

      {/* FULL WIDTH BANNER — constrained height on mobile */}
      <div className="relative h-[220px] sm:h-[300px] md:h-[420px] w-full overflow-hidden mb-10">
        <img
          src="/reference/waterbanner.jpeg"
          alt="Water Banner"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* TWO CARDS BELOW BANNER */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 sm:px-6">

        {/* CARD 1 */}
        <div className="relative h-[260px] sm:h-[300px] md:h-[360px] overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1585664811087-47f65abbad64?auto=format&fit=crop&w=1200&q=80"
            alt="Stylish Houseplants"
            className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute left-6 sm:left-10 bottom-10 sm:bottom-16 text-white max-w-[280px]">
            <h3 className="text-xl sm:text-2xl font-semibold">
              Stylish Houseplants for Every Space
            </h3>
            <Link href="/products">
              <button className="mt-4 sm:mt-5 border border-white px-5 sm:px-6 py-2.5 sm:py-3 text-xs uppercase tracking-wider hover:bg-white hover:text-black transition">
                Discover
              </button>
            </Link>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="relative h-[260px] sm:h-[300px] md:h-[360px] overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80"
            alt="Plants That Complement"
            className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute left-6 sm:left-10 bottom-10 sm:bottom-16 text-white max-w-[280px]">
            <h3 className="text-xl sm:text-2xl font-semibold">
              Plants That Complement Your Style
            </h3>
            <Link href="/products">
              <button className="mt-4 sm:mt-5 border border-white px-5 sm:px-6 py-2.5 sm:py-3 text-xs uppercase tracking-wider hover:bg-white hover:text-black transition">
                Discover
              </button>
            </Link>
          </div>
        </div>

      </div>

    </section>
  );
}