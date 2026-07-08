import Hero from "./components/Hero";
import Stats from "./components/Stats";
import EraShowcase from "./components/EraShowcase";
import FeaturedDinosaurs from "./components/FeaturedDinosaurs";
import CTA from "./components/CTA";

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <EraShowcase />
      <FeaturedDinosaurs />
      <CTA />
    </>
  );
}

export default Home;