import { Navbar } from "@/components/Navbar";
import { StarScrollIndicator } from "@/components/StarScrollIndicator";
import { HeroAndStarSection } from "@/components/HeroAndStarSection";
import { HotAmericanoExperience } from "@/components/HotAmericanoExperience";
import { ProductsSection } from "@/components/ProductsSection";
import { HeritageStorySection } from "@/components/HeritageStorySection";
import { SawyerpuramReviews } from "@/components/SawyerpuramReviews";
import { VisitBakerySection } from "@/components/VisitBakerySection";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { LogoPreloader } from "@/components/LogoPreloader";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-cream-100 text-espresso-950">
      {/* Kickstart Creative Studio Style Logo Entrance Preloader */}
      <LogoPreloader />

      {/* Butter-smooth momentum scroll with Lenis */}
      <SmoothScroll />

      {/* Global Star Cake Vertical Scroll Loader */}
      <StarScrollIndicator />

      {/* Sticky Editorial Navbar */}
      <Navbar />

      {/* Hero Section (Starts with Star Cake) + Deep Dive Section (Star Cake Rolls Down) */}
      <HeroAndStarSection />

      {/* The Iconic Pairing: Hot Americano Animated Steam & Brew Experience */}
      <HotAmericanoExperience />

      {/* Studio Level Product Showcase & Orbit Carousel Menu */}
      <ProductsSection />

      {/* 3-Generations Heritage Story (1968 - Present) */}
      <HeritageStorySection />

      {/* Real Sawyerpuram Customer & Instagram Stories */}
      <SawyerpuramReviews />

      {/* Visit Bakery, Timings, Directions & Pre-Order */}
      <VisitBakerySection />

      {/* Heritage Broadsheet Footer */}
      <Footer />
    </main>
  );
}
