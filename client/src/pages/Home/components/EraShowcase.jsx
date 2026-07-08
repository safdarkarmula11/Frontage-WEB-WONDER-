import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { getAllEras } from "../../../services/eraService";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function EraShowcase() {
  const [eras, setEras] = useState([]);

  useEffect(() => {
    async function loadEras() {
      try {
        const data = await getAllEras();
        setEras(data);
      } catch (error) {
        console.error(error);
      }
    }

    loadEras();
  }, []);

  if (eras.length === 0) {
    return null;
  }

  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-14 flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-green-500">
              Journey Through Time
            </p>
            <h2 className="font-display mt-2 text-4xl text-white lg:text-5xl">
              Explore the Eras
            </h2>
          </div>

          <Link
            to="/timeline"
            className="rounded-lg border border-neutral-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-green-500 hover:text-green-400"
          >
            Full Timeline →
          </Link>
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {eras.slice(0, 3).map((era) => (
            <motion.div key={era.id} variants={card}>
              <Link
                to={`/explore?era=${encodeURIComponent(era.name)}`}
                className="group relative block overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 p-8 transition-colors hover:border-green-500"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-green-600/10 blur-2xl transition-opacity group-hover:opacity-80"
                />

                <p className="relative text-xs font-semibold uppercase tracking-widest text-green-500">
                  {era.duration}
                </p>

                <h3 className="font-display relative mt-3 text-3xl text-white">
                  {era.name}
                </h3>

                <p className="relative mt-4 line-clamp-3 text-sm leading-6 text-neutral-400">
                  {era.description}
                </p>

                <p className="relative mt-6 text-sm font-semibold text-green-500 opacity-0 transition-opacity group-hover:opacity-100">
                  View dinosaurs →
                </p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default EraShowcase;