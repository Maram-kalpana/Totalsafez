const footerLinks = {
  Info: ['About Us', 'Care Guide', 'Contact', 'FAQ'],
  Services: ['Shipping', 'Gift Cards', 'Bulk Orders', 'Support'],
  Account: ['My Account', 'Order Tracking', 'Wishlist', 'Login']
};

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <h5 className="text-lg font-semibold tracking-[0.26em] text-ink">GARGET</h5>
            <p className="mt-4 max-w-xs text-sm leading-7 text-muted">
              Premium plants and lifestyle accents crafted to bring tranquility and natural beauty
              into your everyday spaces.
            </p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h6 className="text-sm font-semibold uppercase tracking-wider text-ink">{title}</h6>
              <ul className="mt-4 space-y-3 text-sm text-muted">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="transition-colors duration-300 hover:text-ink">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-stone-200 pt-6 text-sm text-muted sm:flex-row sm:items-center">
          <p>(c) 2026 GARGET. All rights reserved.</p>
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-ink">
            <span className="border border-stone-300 px-2 py-1">Visa</span>
            <span className="border border-stone-300 px-2 py-1">Mastercard</span>
            <span className="border border-stone-300 px-2 py-1">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
