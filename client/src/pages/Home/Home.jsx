import Hero from "./components/Hero";
import FeaturedDinosaurs from "./components/FeaturedDinosaurs";
import TimelinePreview from "./components/TimelinePreview";
import FactsSection from "./components/FactsSection";
import CallToAction from "./components/CallToAction";

function Home() {
  return (
    <>
      <Hero />
      <FeaturedDinosaurs />
      <TimelinePreview />
      <FactsSection />
      <CallToAction />
    </>
  );
}

export default Home;