export default function DualCards() {
  const cards = [
    {
      title: 'Stylish Houseplants for Every Space',
      image:
        'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'Plants That Complement Your Style',
      image:
        'https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=1000&q=80'
    }
  ];

  return (
    <section className="m-0 p-0">
      <div className="flex w-full">
        {cards.map((card) => (
          <article
            key={card.title}
            className="relative flex-1 h-[320px] overflow-hidden"
            style={{
              backgroundImage: `url(${card.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-black/30 p-8 text-white">
              <div className="flex h-full flex-col justify-end">
                <h4 className="max-w-xs text-2xl font-semibold leading-snug">{card.title}</h4>
                <button className="mt-6 w-fit border border-white px-7 py-2 text-xs font-medium uppercase tracking-wider transition-colors duration-300 hover:bg-white hover:text-black">
                  Discover
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}