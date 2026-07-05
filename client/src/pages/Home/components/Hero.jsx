import { Link } from "react-router-dom";
import heroImage from "../../../assets/images/hero.jpg";

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background */}
      <img
        src={heroImage}
        alt="Jurassic Forest"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative mx-auto flex w-full max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="mb-4 text-lg font-medium uppercase tracking-[0.3em] text-green-400">
            Welcome to JurassicVerse
          </p>

          <h1 className="mb-6 text-6xl font-extrabold leading-tight text-white">
            Explore the World Before Humans
          </h1>

          <p className="mb-10 text-xl leading-8 text-gray-300">
            Discover dinosaurs, fossils, prehistoric ecosystems, and the
            history of life on Earth through an immersive digital museum.
          </p>

          <div className="flex gap-5">
            <Link
              to="/explore"
              className="rounded-lg bg-green-600 px-7 py-3 font-semibold text-white transition hover:bg-green-700"
            >
              Explore Dinosaurs
            </Link>

            <Link
              to="/timeline"
              className="rounded-lg border border-white px-7 py-3 font-semibold text-white transition hover:bg-white hover:text-black"
            >
              View Timeline
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-gray-300">
        <p className="mb-2 text-sm uppercase tracking-widest">
          Scroll
        </p>
        <span className="text-2xl">↓</span>
      </div>
    </section>
  );
}

export default Hero;