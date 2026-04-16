'use client';

import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <article className="group">
      <Link href={`/products/${product.id}`}>
        <div className="relative overflow-hidden bg-[#f5f5f5] p-5 transition-shadow duration-300 group-hover:shadow-lg">
          {product.isSale && (
            <span className="absolute right-2 top-2 bg-[#c72540] px-2 py-1 text-[9px] font-semibold uppercase tracking-wider text-white">
              Sale
            </span>
          )}
          <img
            src={product.image}
            alt={product.name}
            className="mx-auto h-40 w-full max-w-[130px] object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <h4 className="mt-3 text-center text-[13px] font-medium text-[#151515]">{product.name}</h4>
        <p className="mt-1 text-center text-[12px] font-medium text-[#5f9d35]">{product.price}</p>
      </Link>
    </article>
  );
}
