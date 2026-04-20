import ProductCard from './ProductCard';

export default function ProductGrid({ products }) {
  return (
    <section>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[10px] bg-white">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <button className="border px-8 py-3 text-sm tracking-wide hover:bg-black hover:text-white transition">
          LOAD MORE
        </button>
      </div>

    </section>
  );
}