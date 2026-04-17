import Link from "next/link";

export default function FeatureBanner() {
  return (
    <section className="bg-[#f3f3f3] py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-3">

        {/* LEFT IMAGE */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80"
            alt="plant"
            className="h-[420px] w-full object-cover"
          />
        </div>

        {/* CENTER TEXT */}
        <div className="text-center">
          <p className="mb-3 text-xs tracking-[0.3em] text-gray-500">
            LUSH LIVING
          </p>

          <h2 className="text-[42px] font-semibold text-[#111] leading-tight">
            Plants for Every Space
          </h2>

          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quos animi in nobis beatae harum?
          </p>

          <Link
            href="/products"
            className="mt-6 inline-block rounded bg-black px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white hover:bg-gray-800"
          >
            ALL PRODUCTS
          </Link>
        </div>

        {/* RIGHT IMAGE */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=800&q=80"
            alt="plant"
            className="h-[420px] w-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}