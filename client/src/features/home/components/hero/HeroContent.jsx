import HeroButtons from "./HeroButtons";

function HeroContent() {
  return (
    <>
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.4em] text-emerald-400">
        Welcome to the Museum
      </p>

      <h1 className="text-5xl font-black leading-tight text-white md:text-7xl">
        Journey Through
        <br />
        Prehistoric Earth
      </h1>

      <p className="mt-8 max-w-xl text-lg leading-8 text-gray-300">
        Discover dinosaurs from the Triassic, Jurassic, and Cretaceous periods
        through immersive exhibits, interactive timelines, and realistic 3D
        models.
      </p>

      <HeroButtons />
    </>
  );
}

export default HeroContent;