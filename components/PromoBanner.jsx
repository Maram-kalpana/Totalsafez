import Link from 'next/link';

export default function PromoBanner() {
  return (
    <section className="py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="relative overflow-hidden"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=1800&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="bg-black/30 px-6 py-20 sm:px-12 sm:py-24">
            <div className="max-w-lg text-white">
              <p className="text-xs uppercase tracking-[0.24em]">Natural Collection</p>
              <h3 className="mt-4 text-3xl font-semibold sm:text-4xl">Trendy Houseplants</h3>
              <p className="mt-4 text-sm leading-7 text-stone-100 sm:text-base">
                Refresh your home with leafy companions in textures and tones crafted for elevated
                interiors.
              </p>
              <Link
                href="/products"
                className="mt-8 inline-block bg-white px-8 py-3 text-sm font-medium uppercase tracking-wider text-ink transition-colors duration-300 hover:bg-stone-200"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
