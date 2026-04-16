import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ShopsPage() {
  const collections = [
    {
      name: 'DIY Planters',
      countText: '(53 Products)',
      image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Foliage Friends',
      countText: '(53 Products)',
      image: 'https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Green Therapy',
      countText: '(53 Products)',
      image: 'https://images.unsplash.com/photo-1459156212016-c812468e2115?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Hanging Plants',
      countText: '(53 Products)',
      image: 'https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Herb Garden',
      countText: '(53 Products)',
      image: 'https://images.unsplash.com/photo-1463154545680-d59320fd685d?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Outdoor Plants',
      countText: '(53 Products)',
      image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Plant Gifts',
      countText: '(53 Products)',
      image: 'https://images.unsplash.com/photo-1545165375-8e8b2f46a5f3?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Eco Pots',
      countText: '(53 Products)',
      image: 'https://images.unsplash.com/photo-1470167290877-7d5d3446de4c?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Bloom Class',
      countText: '(53 Products)',
      image: 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Sun Lovers',
      countText: '(53 Products)',
      image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Tropical Touch',
      countText: '(53 Products)',
      image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Plant Gifts 2',
      countText: '(53 Products)',
      image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <main className="bg-white">
      <Header />

      <section className="mx-auto max-w-[1200px] px-4 py-10 text-center">
        <h1 className="text-[28px] font-semibold text-[#111]">All Collections</h1>
        <p className="mx-auto mt-3 max-w-[760px] text-[12px] leading-7 text-[#777]">
          Our new cozy collection is made with environmental materials and
          friendly quality. It is simple to care for so you can stay cozy wherever.
        </p>
      </section>

      <section className="mx-auto max-w-[1200px] px-4 pb-10">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
          {collections.slice(0, 8).map((col) => (
            <article
              key={col.name}
              className="rounded bg-[#f6f6f6] p-6 shadow-none transition-transform duration-300 hover:scale-[1.01]"
            >
              <div className="flex h-[110px] items-center justify-center">
                <img src={col.image} alt={col.name} className="h-full w-auto max-w-[140px] object-contain" />
              </div>
              <div className="mt-6 flex items-center justify-between gap-4">
                <div className="flex flex-col items-start">
                  <p className="text-[12px] font-semibold text-[#111]">{col.name}</p>
                  <p className="mt-1 text-[10px] text-[#666]">{col.countText}</p>
                </div>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#e9e9e9] text-[#111]">
                  +
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
          {collections.slice(8, 12).map((col) => (
            <article
              key={col.name}
              className="rounded bg-[#f6f6f6] p-6 shadow-none transition-transform duration-300 hover:scale-[1.01]"
            >
              <div className="flex h-[110px] items-center justify-center">
                <img src={col.image} alt={col.name} className="h-full w-auto max-w-[140px] object-contain" />
              </div>
              <div className="mt-6 flex items-center justify-between gap-4">
                <div className="flex flex-col items-start">
                  <p className="text-[12px] font-semibold text-[#111]">{col.name}</p>
                  <p className="mt-1 text-[10px] text-[#666]">{col.countText}</p>
                </div>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#e9e9e9] text-[#111]">
                  +
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
