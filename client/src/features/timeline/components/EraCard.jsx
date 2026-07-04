import { Link } from "react-router-dom";

function EraCard({ era }) {
  return (
    <Link
      to={`/hall/${era.slug}`}
      className="relative block rounded-xl border border-stone-800 bg-stone-900 p-6 transition-all duration-300 hover:border-emerald-500 hover:bg-stone-800"
    >
      <div className="absolute -left-10 top-8 h-5 w-5 rounded-full border-4 border-emerald-500 bg-stone-950"></div>

      <h2 className="text-2xl font-bold text-white">
        {era.name}
      </h2>

      <p className="mt-2 text-emerald-400">
        {era.years}
      </p>

      <p className="mt-4 text-gray-400">
        {era.description}
      </p>
    </Link>
  );
}

export default EraCard;