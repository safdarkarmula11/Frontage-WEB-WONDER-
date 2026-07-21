import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import EraBadge from "../EraBadge/EraBadge";

function DinosaurCard({ dinosaur }) {
  const has3D = Boolean(dinosaur.model3d);

  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 transition-colors hover:border-green-500"
    >
      <div className="overflow-hidden">
        <motion.img
          src={
            dinosaur.image.startsWith("http")
              ? dinosaur.image
              : `${import.meta.env.VITE_API_URL || "http://localhost:5000"}${dinosaur.image}`
          }
          alt={dinosaur.name}
          className="h-[200px] w-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>

      <div className="space-y-4 p-6">
        <div className="flex items-center justify-between gap-2">
          <EraBadge era={dinosaur.era?.name} />

          <span
            title={
              has3D
                ? "3D model available"
                : "No 3D model for this dinosaur yet"
            }
            className={
              has3D
                ? "rounded-full bg-green-600/15 px-3 py-1 text-xs font-semibold text-green-400"
                : "cursor-not-allowed rounded-full bg-neutral-800 px-3 py-1 text-xs font-semibold text-neutral-600"
            }
          >
            🧊 3D
          </span>
        </div>

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
    </motion.article>
  );
}

export default DinosaurCard;