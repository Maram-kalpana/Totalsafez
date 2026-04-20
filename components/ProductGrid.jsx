import Link from 'next/link';
import ProductCard from './ProductCard';

export default function ProductGrid({ products }) {
  return (
    <section>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[10px] bg-white">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="py-8 flex justify-center">
        <Link
          href="/products"
          className="px-10 py-3 text-sm tracking-widest text-white font-medium uppercase transition hover:opacity-90"
          style={{ backgroundColor: '#1700de' }}
        >
          All Products
        </Link>
      </div>
    </section>
  );
}