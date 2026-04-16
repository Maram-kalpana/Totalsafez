import Link from 'next/link';

export default function FeatureBanner() {
  return (
    <section className="border-t border-[#ececec] bg-[#efefef]">
      <div className="mx-auto max-w-[1600px] px-4 py-6 sm:px-6 sm:py-8">
        <p className="text-[11px] uppercase tracking-[0.45em] text-[#111]">Lush Living</p>
        <h3 className="mt-2 text-[36px] font-semibold leading-tight tracking-[-0.01em] text-[#111] sm:text-[48px]">
          Plants for Every Space
        </h3>
        <p className="mt-3 max-w-[760px] text-[15px] leading-[1.8] text-[#666] sm:text-[17px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quos animi in nobis
          beatae harum?
        </p>
        <Link
          href="/products"
          className="mt-6 inline-block rounded-md bg-black px-9 py-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-[#1f5221]"
        >
          All Products
        </Link>
      </div>

      <img
        src="https://images.unsplash.com/photo-1463320898484-cdee8141c787?auto=format&fit=crop&w=1800&q=80"
        alt="Peace lily style plant"
        className="h-[280px] w-full object-cover sm:h-[360px]"
      />
    </section>
  );
}
