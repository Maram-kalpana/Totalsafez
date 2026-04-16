import ProductCard from './ProductCard';

export default function ProductGrid({ products }) {
  return (
    <section className="pb-12">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="mx-auto mt-8 flex max-w-7xl justify-center px-4 sm:px-6 lg:px-8">
        <button className="border border-[#151515] px-10 py-3 text-[12px] font-medium uppercase tracking-wider text-[#151515] transition-colors duration-300 hover:bg-[#151515] hover:text-white">
          Load More
        </button>
      </div>
    </section>
  );
}
