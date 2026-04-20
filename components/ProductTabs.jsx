'use client';

import { productTabs } from '@/data/products';

export default function ProductTabs({ activeTab, onTabChange }) {
  return (
    <section className="pt-[100px] pb-8"> {/* ✅ spacing added */}

      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-center gap-6 px-4 text-[16px] font-medium uppercase tracking-[0.16em] sm:px-6 lg:px-8">
        
        {productTabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => onTabChange(tab.key)}
            className={`pb-2 transition-all duration-300 ${
              activeTab === tab.key
                ? 'border-b-2 border-[#131313] text-[#131313]'
                : 'text-[#7a7a7a] hover:text-[#131313]'
            }`}
          >
            {tab.label}
          </button>
        ))}

      </div>

    </section>
  );
}