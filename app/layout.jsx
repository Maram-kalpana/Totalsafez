import './globals.css';

export const metadata = {
  title: 'GARGET - Plant Store',
  description: 'Premium plant and lifestyle Shopify-inspired homepage.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
