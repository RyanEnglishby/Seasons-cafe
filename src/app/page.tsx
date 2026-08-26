import { FeaturedMenu } from "@/components/home/featured-menu";
import { Hero } from "@/components/home/hero";
import { Intro } from "@/components/home/intro";
import { ReviewsPreview } from "@/components/home/reviews-preview";
import { StoryPreview } from "@/components/home/story-preview";
import { VisitSection } from "@/components/home/visit-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <FeaturedMenu />
      <StoryPreview />
      <ReviewsPreview />
      <VisitSection />
    </>
  );
}
