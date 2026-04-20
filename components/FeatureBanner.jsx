import Link from "next/link";

export default function FeatureBanner() {
  const cards = [
    {
      src: "/reference/pro1.jpeg",
      alt: "Pet Care",
      label: "Pet Care",
    },
    {
      src: "/reference/pro2.jpeg",
      alt: "Healthcare",
      label: "Healthcare",
    },
    {
      src: "/reference/pro3.jpeg",
      alt: "Agriculture",
      label: "Agriculture",
    },
    {
      src: "/reference/pro4.jpeg",
      alt: "Environment",
      label: "Environment",
    },
  ];

  return (
    <section className="bg-white">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-[10px] bg-white">
        {cards.map((card) => (
          <Link
            href="/products"
            key={card.alt}
            className="group block overflow-hidden bg-white"
          >

            {/* LABEL */}
            <div className="py-3 text-center">
              <span className="text-[13px] font-medium text-[#222] tracking-wide">
                {card.label}
              </span>
            </div>

            {/* IMAGE */}
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