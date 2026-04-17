import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[600px]">

      {/* BACKGROUND IMAGE */}
      <Image
        src="/reference/home1.png"  // ✅ correct path
        alt="Plant Banner"
        fill
        priority
        className="object-cover"
      />

      {/* CONTENT */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">

          <div className="max-w-lg">
            <h1 className="text-5xl font-semibold text-black mb-4">
              Grow Serenity
            </h1>

            <p className="text-gray-600 mb-2">
              Discover a collection of houseplants that blend beauty with ease.
            </p>

            <p className="text-gray-600 mb-6">
              From low-maintenance greens to statement foliage.
            </p>

            <button className="bg-white px-6 py-3 rounded-md shadow hover:bg-gray-100">
              ALL PRODUCTS
            </button>
          </div>

        </div>
      </div>

    </section>
  );
}