import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeatureBanner from '@/components/FeatureBanner';
// import LifestyleSection from '@/components/LifestyleSection';
import PromoBanner from '@/components/PromoBanner';
import DualCards from '@/components/DualCards';
import Footer from '@/components/Footer';
import HomeCatalog from '@/components/shop/HomeCatalog';

export default function Home() {
  return (
    <main className="bg-white">
      <Header />
      <Hero />
       <FeatureBanner /> 
      {/* <LifestyleSection /> */}
      <HomeCatalog />
      <PromoBanner /> 
       <DualCards />
      <Footer />
    </main>
  );
}
