import Link from "next/link";

export default function PromoSection() {
  return (
    <section className="pb-16">

      {/* FULL WIDTH BANNER - no px padding, stretches edge to edge */}
      <div className="relative h-[420px] w-full overflow-hidden mb-6">
        <img
          src="https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=1800&q=80"
          alt="banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute left-12 bottom-16 text-white max-w-lg">
          <p className="text-xs uppercase tracking-[0.24em]">Natural Collection</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Trendy Houseplants</h2>
          <Link href="/products">
            <button
              className="mt-6 px-8 py-3 text-sm font-medium uppercase tracking-wider text-white"
              style={{ backgroundColor: "#1700de" }}
            >
              Shop Now
            </button>
          </Link>
        </div>
      </div>

      {/* TWO CARDS IN ONE ROW ONLY */}
      <div className="grid grid-cols-2 gap-6 px-6">

        <div className="relative h-[360px] overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1585664811087-47f65abbad64?auto=format&fit=crop&w=1200&q=80"
            alt="Stylish Houseplants"
            className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute left-10 bottom-16 text-white max-w-[280px]">
            <h3 className="text-2xl font-semibold">Stylish Houseplants for Every Space</h3>
            <Link href="/products">
              <button className="mt-5 border border-white px-6 py-3 text-xs uppercase tracking-wider hover:bg-white hover:text-black transition">
                Discover
              </button>
            </Link>
          </div>
        </div>

        <div className="relative h-[360px] overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80"
            alt="Plants That Complement"
            className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute left-10 bottom-16 text-white max-w-[280px]">
            <h3 className="text-2xl font-semibold">Plants That Complement Your Style</h3>
            <Link href="/products">
              <button className="mt-5 border border-white px-6 py-3 text-xs uppercase tracking-wider hover:bg-white hover:text-black transition">
                Discover
              </button>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}