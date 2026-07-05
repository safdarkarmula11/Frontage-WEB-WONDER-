
import EraCard from "../../../components/EraCrad/EraCard";
import eras from "../../../data/eras";
import { Link } from "react-router-dom";

function TimelinePreview() {
  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-4 text-center text-5xl font-bold text-white">
          Journey Through Time
        </h2>

        <p className="mx-auto mb-16 max-w-3xl text-center text-gray-400">
          Explore the three great eras of the Mesozoic Era and discover how life
          evolved over nearly 186 million years.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {eras.map((era) => (
            <EraCard
              key={era.id}
              era={era}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/timeline"
            className="rounded-lg bg-green-600 px-8 py-3 font-semibold text-white transition hover:bg-green-700"
          >
            View Full Timeline
          </Link>
        </div>
      </div>
    </section>
  );
}

export default TimelinePreview;