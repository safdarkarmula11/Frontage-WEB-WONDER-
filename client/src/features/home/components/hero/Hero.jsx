import HeroContent from "./HeroContent";
import ScrollIndicator from "./ScrollIndicator";
import heroBg from "../../../../assets/images/hero-bg.jpg";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src={heroBg}
        alt="Prehistoric landscape"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6">
        {/* Left */}
        <div className="w-full lg:w-1/2">
          <HeroContent />
        </div>

        {/* Right */}
        <div className="hidden lg:flex w-1/2 items-center justify-center">
          <div className="flex h-[500px] w-[500px] items-center justify-center rounded-full border border-stone-700 bg-stone-900/40">
            <p className="text-gray-400">
              3D Dinosaur Coming Soon
            </p>
          </div>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}

export default Hero;