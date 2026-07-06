import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="flex min-h-screen items-center bg-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <h1 className="text-6xl font-black leading-tight text-white">
            Welcome to
            <span className="block text-green-500">
              JurassicVerse
            </span>
          </h1>

          <p className="mt-8 text-xl leading-8 text-neutral-300">
            Discover dinosaurs from every era through an interactive digital
            museum powered by real data.
          </p>

          <div className="mt-10 flex gap-4">
            <Link
              to="/explore"
              className="rounded-lg bg-green-600 px-8 py-4 font-semibold text-white hover:bg-green-700"
            >
              Explore Dinosaurs
            </Link>

            <Link
              to="/timeline"
              className="rounded-lg border border-white px-8 py-4 font-semibold text-white hover:bg-white hover:text-black"
            >
              View Timeline
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;