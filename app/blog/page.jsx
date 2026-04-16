import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function BlogPage() {
  return (
    <main className="bg-white">
      <Header />
      <section className="mx-auto max-w-5xl px-4 py-14">
        <h1 className="text-3xl font-semibold">Blog</h1>
        <p className="mt-3 text-sm text-[#666]">Demo page for the top navigation.</p>
      </section>
      <Footer />
    </main>
  );
}
