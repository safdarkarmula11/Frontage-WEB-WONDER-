import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-black">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-green-600/10 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="relative z-10 mx-auto max-w-7xl px-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="max-w-3xl">
          <motion.h1
            variants={item}
            className="font-display text-5xl leading-none text-white sm:text-6xl lg:text-8xl"
          >
            Welcome to
            <span className="block text-green-500">JurassicVerse</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-8 text-xl leading-8 text-neutral-300"
          >
            Discover dinosaurs from every era through an interactive digital
            museum powered by real data.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/explore"
                className="inline-block rounded-lg bg-green-600 px-8 py-4 font-semibold text-white hover:bg-green-700"
              >
                Explore Dinosaurs
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/timeline"
                className="inline-block rounded-lg border border-white px-8 py-4 font-semibold text-white hover:bg-white hover:text-black"
              >
                View Timeline
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;