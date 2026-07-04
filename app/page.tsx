import Hero from "@/components/Hero";
import StorySection from "@/components/StorySection";
import Features from "@/components/Features";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-paper">
      <Hero />
      <StorySection
        title="Any menu. One photo."
        body="Point your camera at a printed menu and MenuGallery reads the whole page — dish names, prices, courses. No typing, no guessing, no translation apps. Every scan lands on your home screen, so the menus you love are one tap away."
        img="/screenshots/home.png"
        alt="MenuGallery home screen with a scan-restaurant-menu button and a previously saved menu of 30 dishes"
        caption="Pick your language right from the home screen."
        flip
      />
      <StorySection
        title="See every dish before you order."
        body="Each dish becomes a photo you can actually judge, with its price and estimated calories, carbs and protein on the card. Sort by course, price or macros, and tap the heart to shortlist your contenders. Menu roulette, solved."
        img="/screenshots/results.png"
        alt="MenuGallery results screen: a grid of dishes from a scanned menu, each with an appetizing photo, name and price"
      />
      <Features />
      <CtaBand />
      <Footer />
    </main>
  );
}
