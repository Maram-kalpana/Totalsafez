'use client';

import { useMemo, useState } from 'react';
import ProductTabs from '@/components/ProductTabs';
import ProductGrid from '@/components/ProductGrid';
import { products } from '@/data/products';

export default function HomeCatalog() {
  const [activeTab, setActiveTab] = useState('featured');

  const filtered = useMemo(() => {
    return products.filter((item) => item.category === activeTab);
  }, [activeTab]);

  return (
    <>
      <ProductTabs activeTab={activeTab} onTabChange={setActiveTab} />
      <ProductGrid products={filtered} />
    </>
  );
}
