import Link from "next/link";

export default function FeatureBanner() {
  const cards = [
    { src: "/reference/pro1.jpeg", alt: "Pet Care" },
    { src: "/reference/pro2.jpeg", alt: "Healthcare" },
    { src: "/reference/pro3.jpeg", alt: "Agriculture" },
    { src: "/reference/pro4.jpeg", alt: "Environment" },
  ];

  return (
    <section className="bg-white mt-[80px]">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-[10px] bg-white">
        {cards.map((card) => (
          <Link
            href="/products"
            key={card.alt}
            className="group block overflow-hidden bg-white"
          >
            {/* IMAGE ONLY */}
            <div className="overflow-hidden">
              <img
                src={card.src}
                alt={card.alt}
                className="w-full h-[380px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}