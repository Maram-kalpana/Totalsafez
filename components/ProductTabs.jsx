'use client';

import { productTabs } from '@/data/products';

export default function ProductTabs({ activeTab, onTabChange }) {
  return (
    <section className="pb-8 pt-2">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-center gap-5 px-4 text-[11px] uppercase tracking-[0.16em] sm:px-6 lg:px-8">
        {productTabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => onTabChange(tab.key)}
            className={`pb-1 transition-colors duration-300 ${
              activeTab === tab.key ? 'border-b border-[#131313] text-[#131313]' : 'text-[#7a7a7a] hover:text-[#131313]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </section>
  );
}
