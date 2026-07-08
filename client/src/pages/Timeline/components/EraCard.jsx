import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function EraCard({ era, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative pl-16 md:pl-24"
    >
      <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full border-2 border-green-500 bg-neutral-950 text-lg font-bold text-green-500 md:h-16 md:w-16 md:text-xl">
        {index + 1}
      </div>

      <article className="overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 p-8 transition-colors hover:border-green-500/50">
        <div className="flex flex-col gap-8 lg:flex-row">

          {era.bannerImage && (
            <img
              src={era.bannerImage}
              alt={era.name}
              className="h-64 w-full rounded-lg object-cover lg:w-80"
            />
          )}

          <div className="flex-1">

            <div className="flex flex-wrap items-baseline gap-3">
              <h2 className="font-display text-4xl text-green-500">
                {era.name}
              </h2>

              <span className="rounded-full bg-neutral-800 px-3 py-1 text-xs font-semibold text-neutral-400">
                {era.duration}
              </span>
            </div>

            <div className="mt-6 space-y-3 text-neutral-300">
              <p>
                <strong className="text-white">Climate:</strong> {era.climate}
              </p>

              <p className="leading-7">{era.description}</p>
            </div>

            {era.dinosaurs?.length > 0 && (
              <div className="mt-8">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-neutral-500">
                  Dinosaurs From This Era
                </h3>

                <div className="flex flex-wrap gap-3">
                  {era.dinosaurs.map((dinosaur) => (
                    <Link
                      key={dinosaur.id}
                      to={`/dinosaur/${dinosaur.id}`}
                      className="rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-700"
                    >
                      {dinosaur.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>
      </article>
    </motion.div>
  );
}

export default EraCard;