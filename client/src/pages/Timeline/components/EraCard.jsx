import { Link } from "react-router-dom";

function EraCard({ era }) {
  return (
    <article className="rounded-xl border border-neutral-800 bg-neutral-900 p-8">
      <div className="flex flex-col gap-8 lg:flex-row">

        <img
          src={era.bannerImage}
          alt={era.name}
          className="h-64 w-full rounded-lg object-cover lg:w-80"
        />

        <div className="flex-1">

          <h2 className="text-3xl font-bold text-green-500">
            {era.name}
          </h2>

          <p className="mt-2 text-neutral-400">
            {era.duration}
          </p>

          <div className="mt-6 space-y-3 text-neutral-300">
            <p>
              <strong>Climate:</strong> {era.climate}
            </p>

            <p>
              <strong>Dominant Life:</strong> {era.dominantLife}
            </p>

            <p>{era.description}</p>
          </div>

          <div className="mt-8">
            <h3 className="mb-4 text-xl font-semibold text-white">
              Dinosaurs
            </h3>

            <div className="flex flex-wrap gap-3">
              {era.dinosaurs?.map((dinosaur) => (
                <Link
                  key={dinosaur.id}
                  to={`/dinosaur/${dinosaur.id}`}
                  className="rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700"
                >
                  {dinosaur.name}
                </Link>
              ))}
            </div>
          </div>

        </div>

      </div>
    </article>
  );
}

export default EraCard;