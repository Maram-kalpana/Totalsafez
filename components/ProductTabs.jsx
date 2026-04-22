'use client';

const TABS = [
  { id: 'featured', label: 'Featured Products' },
  { id: 'newest',   label: 'Newest Products'  },
  { id: 'trending', label: 'Trending Products' },
];

export default function ProductTabs({ activeTab, onTabChange }) {
  return (
    <div className="mt-[100px] pb-6">
  <div className="flex items-center justify-center gap-4 sm:gap-8 px-4 sm:px-6 lg:px-8 overflow-x-auto scrollbar-none">
    {TABS.map(({ id, label }) => (
      <button
        key={id}
        onClick={() => onTabChange(id)}
        style={{ outline: 'none', boxShadow: 'none', border: 'none' }}
        className={`
          relative whitespace-nowrap pb-3 pt-4 text-sm sm:text-base font-medium transition-colors bg-transparent
          ${activeTab === id
            ? 'text-black after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-black after:content-[""]'
            : 'text-gray-400 hover:text-gray-600'
          }
        `}
      >
        {label}
      </button>
    ))}
  </div>
</div>
  );
}