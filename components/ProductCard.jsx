'use client';

import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <article className="group text-center bg-[#f5f5f5]">
      <Link href={`/products/${product.id}`}>

        {/* CARD IMAGE AREA */}
        <div className="relative h-[200px] sm:h-[260px] md:h-[300px] lg:h-[340px] flex items-center justify-center overflow-hidden">

          {/* SALE RIBBON */}
          {product.isSale && (
            <div
              className="absolute top-0 right-0 z-10"
              style={{
                width: 0,
                height: 0,
                borderStyle: 'solid',
                borderWidth: '0 58px 58px 0',
                borderColor: 'transparent #e63946 transparent transparent',
              }}
            >
              <span
                className="absolute text-white font-bold tracking-wide"
                style={{
                  fontSize: '9px',
                  top: '10px',
                  right: '-52px',
                  transform: 'rotate(45deg)',
                }}
              >
                SALE
              </span>
            </div>
          )}

          {/* IMAGE */}
          <img
            src={product.image}
            alt={product.name}
            className="max-h-[160px] sm:max-h-[200px] md:max-h-[240px] lg:max-h-[260px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.06]"
          />

          {/* HOVER ACTION ICONS */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 flex gap-1.5 z-10">
            {[
              { icon: '🛒', label: 'Add to cart' },
              { icon: '🔍', label: 'Quick view' },
              { icon: '♡',  label: 'Wishlist'   },
            ].map(({ icon, label }) => (
              <button
                key={label}
                title={label}
                onClick={(e) => e.preventDefault()}
                className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[13px] shadow-sm hover:bg-gray-100 transition-colors"
              >
                {icon}
              </button>
            ))}
          </div>

        </div>

        {/* TEXT */}
        <div className="bg-white py-3 px-2">
          <h4 className="text-[12px] sm:text-[13px] font-medium text-[#222] mb-1 truncate">
            {product.name}
          </h4>
          <div className="flex items-center justify-center gap-2">
            <span className="text-[11px] sm:text-[12px] text-[#555]">{product.price}</span>
            {product.originalPrice && (
              <span className="text-[10px] sm:text-[11px] text-[#bbb] line-through">{product.originalPrice}</span>
            )}
          </div>
        </div>

      </Link>
    </article>
  );
}