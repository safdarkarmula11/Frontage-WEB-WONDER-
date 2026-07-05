import { Link } from "react-router-dom";

function DinosaurCard({ dinosaur }) {
  return (
    <div className="group overflow-hidden rounded-2xl bg-neutral-900 shadow-lg">
      {/* Image */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={dinosaur.image}
          alt={dinosaur.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

        {/* Badge */}
        <span className="absolute left-4 top-4 rounded-full bg-green-600 px-3 py-1 text-sm font-semibold text-white">
          {dinosaur.diet}
        </span>

        {/* Text */}
        <div className="absolute bottom-4 left-4">
          <h3 className="text-3xl font-bold text-white">
            {dinosaur.name}
          </h3>

          <p className="text-gray-300">
            {dinosaur.era}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between p-5">
        <span className="text-sm text-gray-400">
          Explore this species
        </span>

        <Link
          to={`/dinosaur/${dinosaur.id}`}
          className="rounded-lg bg-green-600 px-4 py-2 text-white transition hover:bg-green-700"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}

export default DinosaurCard;