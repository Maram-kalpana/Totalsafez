"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="bg-[#f5f5f5]">

      <Header />

      <section className="py-12 px-6">

        {/* 🔥 PAGE TITLE */}
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h1 className="text-3xl font-semibold mb-4">About Our Store</h1>
          <p className="text-gray-600">
            Discover our journey in bringing quality products to your space.
          </p>
        </div>

        {/* 🔥 BRAND STORY */}
        <div className="max-w-5xl mx-auto bg-white p-10 rounded-xl shadow-md mb-10">
          <h2 className="text-xl font-semibold mb-4">Our Story</h2>

          <p className="text-gray-600 leading-7 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>

          <p className="text-gray-600 leading-7">
            Duis aute irure dolor in reprehenderit in voluptate velit esse...
          </p>
        </div>

        {/* 🔥 OUR PRODUCTS */}
        <div className="max-w-5xl mx-auto bg-white p-10 rounded-xl shadow-md mb-10">
          <h2 className="text-xl font-semibold mb-4">Our Products</h2>

          <p className="text-gray-600 leading-7 mb-6">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem...
          </p>

          <p className="text-gray-600 leading-7">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur...
          </p>
        </div>

        {/* 🔥 WHY CHOOSE US */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold mb-2">Quality Assurance</h3>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet...
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold mb-2">Wide Product Range</h3>
            <p className="text-gray-600 text-sm">
              Ut enim ad minim veniam...
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold mb-2">Customer Satisfaction</h3>
            <p className="text-gray-600 text-sm">
              Duis aute irure dolor...
            </p>
          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}