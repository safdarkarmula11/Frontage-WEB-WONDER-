import { Link } from "react-router-dom";

function HeroButtons() {
  return (
    <div className="mt-10 flex flex-wrap gap-4">
      <Link
        to="/timeline"
        className="rounded-lg bg-emerald-600 px-8 py-4 font-semibold transition hover:bg-emerald-700"
      >
        Explore Timeline
      </Link>

      <Link
        to="/search"
        className="rounded-lg border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/20"
      >
        Browse Exhibits
      </Link>
    </div>
  );
}

export default HeroButtons;