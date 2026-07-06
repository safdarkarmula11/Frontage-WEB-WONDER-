import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-4xl rounded-2xl border border-neutral-800 bg-neutral-900 p-12 text-center">
        <h2 className="text-4xl font-bold text-white">
          Continue Your Journey
        </h2>

        <p className="mt-6 text-neutral-400">
          Explore the complete dinosaur collection and learn about each
          geological era.
        </p>

        <Link
          to="/explore"
          className="mt-8 inline-block rounded-lg bg-green-600 px-8 py-4 font-semibold text-white hover:bg-green-700"
        >
          Start Exploring
        </Link>
      </div>
    </section>
  );
}

export default CTA;