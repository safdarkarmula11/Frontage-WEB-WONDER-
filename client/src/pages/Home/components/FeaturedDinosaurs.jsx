import DinosaurCard from "../../../components/DinosaurCard/DinosaurCard";
import { getFeaturedDinosaurs } from "../../../services/dinosaurService";

function FeaturedDinosaurs() {
  const dinosaurs = getFeaturedDinosaurs();

  return (
    <section className="bg-gradient-to-b from-black via-neutral-950 to-black py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-5xl font-bold text-white">
            Featured Dinosaurs
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Meet some of the most fascinating creatures that once ruled the
            Earth millions of years ago.
          </p>
        </div>

        {/* Dinosaur Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {dinosaurs.map((dinosaur) => (
            <DinosaurCard
              key={dinosaur.id}
              dinosaur={dinosaur}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedDinosaurs;