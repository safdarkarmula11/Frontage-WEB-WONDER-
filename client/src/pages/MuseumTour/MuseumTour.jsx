import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Loader from "../../components/common/Loader/Loader";
import ErrorState from "../../components/common/ErrorState/ErrorState";

import { getAllEras } from "../../services/eraService";

function IntroHall() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-center">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-green-950/30 via-black to-black"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 px-6"
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-green-500">
          Virtual Museum Tour
        </p>

        <h1 className="font-display mt-4 text-6xl text-white lg:text-8xl">
          Step Into
          <span className="block text-green-500">Deep Time</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-neutral-400">
          Scroll down to walk through each geological era, hall by hall —
          exactly like walking through a real museum.
        </p>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="mx-auto mt-16 flex h-10 w-6 items-start justify-center rounded-full border-2 border-neutral-600 p-1"
        >
          <div className="h-2 w-1 rounded-full bg-green-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function EraHall({ era, index }) {
  const isEven = index % 2 === 0;

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-neutral-950 py-24">
      {era.bannerImage ? (
        <>
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${era.bannerImage})` }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-black/75"
          />
        </>
      ) : (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-1/4 h-[500px] w-[500px] rounded-full bg-green-600/10 blur-3xl"
        />
      )}

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">

        <motion.div
          initial={{ opacity: 0, x: isEven ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-green-500">
            Hall {index + 1} — {era.duration}
          </p>

          <h2 className="font-display mt-3 text-6xl text-white lg:text-7xl">
            {era.name}
          </h2>

          <p className="mt-4 max-w-2xl text-neutral-300">
            {era.description}
          </p>

          <p className="mt-2 text-sm text-neutral-500">
            Climate: {era.climate}
          </p>
        </motion.div>

        {era.dinosaurs?.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 flex gap-5 overflow-x-auto pb-4"
          >
            {era.dinosaurs.map((dinosaur) => (
              <Link
                key={dinosaur.id}
                to={`/dinosaur/${dinosaur.id}`}
                className="group w-56 flex-shrink-0 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/90 backdrop-blur transition-colors hover:border-green-500"
              >
                <img
                  src={
                    dinosaur.image.startsWith("http")
                      ? dinosaur.image
                      : `${import.meta.env.VITE_API_URL || "http://localhost:5000"}${dinosaur.image}`
                  }
                  alt={dinosaur.name}
                  className="h-40 w-full object-cover transition group-hover:scale-105"
                />

                <div className="p-4">
                  <p className="font-semibold text-white">
                    {dinosaur.name}
                  </p>
                  <p className="text-xs text-neutral-500">
                    {dinosaur.diet}
                  </p>
                </div>
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}

function ExitHall() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-black text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="px-6"
      >
        <p className="text-6xl">🦖</p>

        <h2 className="font-display mt-4 text-4xl text-white lg:text-5xl">
          That's the Tour!
        </h2>

        <p className="mx-auto mt-4 max-w-md text-neutral-400">
          Ready to explore further, or test what you've learned?
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/explore"
            className="rounded-lg bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
          >
            Explore the Collection
          </Link>

          <Link
            to="/quiz"
            className="rounded-lg border border-white px-6 py-3 font-semibold text-white hover:bg-white hover:text-black"
          >
            Take the Quiz
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

function MuseumTour() {
  const [eras, setEras] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadEras() {
      try {
        const data = await getAllEras();
        setEras(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load the museum tour.");
      } finally {
        setLoading(false);
      }
    }

    loadEras();
  }, []);

  if (loading) return <Loader />;

  if (error) return <ErrorState message={error} />;

  return (
    <div>
      <IntroHall />

      {eras.map((era, index) => (
        <EraHall key={era.id} era={era} index={index} />
      ))}

      <ExitHall />
    </div>
  );
}

export default MuseumTour;