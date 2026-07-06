import { Link } from "react-router-dom";

import EraBadge from "../EraBadge/EraBadge";

function DinosaurCard({ dinosaur }) {
  return (
    <article className="overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 transition hover:-translate-y-1 hover:border-green-500">
      <img
        src={
          dinosaur.image.startsWith("http")
            ? dinosaur.image
            : `http://localhost:5000${dinosaur.image}`
        }
        alt={dinosaur.name}
        className="h-[500px] w-full rounded-xl object-cover"
      />

      <div className="space-y-4 p-6">
        <EraBadge era={dinosaur.era?.name} />

        <div>
          <h3 className="text-2xl font-bold text-white">
            {dinosaur.name}
          </h3>

          <p className="italic text-neutral-400">
            {dinosaur.scientificName}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 text-sm text-neutral-300">
          <p>
            <strong>Diet:</strong> {dinosaur.diet}
          </p>

          <p>
            <strong>Speed:</strong> {dinosaur.speed}
          </p>

          <p>
            <strong>Length:</strong> {dinosaur.length}
          </p>

          <p>
            <strong>Weight:</strong> {dinosaur.weight}
          </p>
        </div>

        <Link
          to={`/dinosaur/${dinosaur.id}`}
          className="inline-block rounded-lg bg-green-600 px-5 py-2 font-semibold text-white transition hover:bg-green-700"
        >
          Explore
        </Link>
      </div>
    </article>
  );
}

export default DinosaurCard;