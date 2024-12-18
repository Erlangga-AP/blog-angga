import FeaturedPosts from "@/components/featured-posts";
import HeroSection from "@/components/hero-section";
import PopularCategories from "@/components/popular-categories";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PopularCategories />
      <FeaturedPosts />
    </>
  );
}
