import Hero from "../Components/Hero/Hero";
import Categories from "../Components/Categories/Categories";
import ProductSection from "../Components/Products/ProductSection";
import SaleBanner from "../Components/SaleBanner/SaleBanner";
import AboutSection from "../Components/AboutSection/AboutSection";
import Testimonials from "../Components/Testimonials/Testimonials";
import Newsletter from "../Components/Newsletter/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />

      <Categories />

      <ProductSection
        title="Editor's Picks"
        endpoint="home/featured-products"
      />

      <SaleBanner />

      <ProductSection title="New Arrivals" endpoint="home/new-arrivals" />

      <AboutSection />

      <Testimonials />

      <Newsletter />
    </>
  );
}
