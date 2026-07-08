import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function CTA() {
  return (
    <section className="bg-black py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 p-12 text-center"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-green-600/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-green-600/10 blur-3xl"
        />

        <p className="relative text-sm font-semibold uppercase tracking-widest text-green-500">
          Ready When You Are
        </p>

        <h2 className="font-display relative mt-3 text-4xl text-white lg:text-5xl">
          Continue Your Journey
        </h2>

        <p className="relative mx-auto mt-6 max-w-xl text-neutral-400">
          Explore the complete dinosaur collection and learn about each
          geological era.
        </p>

        <motion.div
          className="relative mt-8 inline-block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          <Link
            to="/explore"
            className="inline-block rounded-lg bg-green-600 px-8 py-4 font-semibold text-white hover:bg-green-700"
          >
            Start Exploring
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default CTA;