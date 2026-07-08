import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Loader from "../../../components/common/Loader/Loader";
import ErrorState from "../../../components/common/ErrorState/ErrorState";
import SectionTitle from "../../../components/common/SectionTitle/SectionTitle";

import DinosaurCard from "../../../components/dinosaur/DinosaurCard/DinosaurCard";

import { getFeaturedDinosaurs } from "../../../services/dinosaurService";

const grid = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function FeaturedDinosaurs() {
  const [dinosaurs, setDinosaurs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadData() {
      try {
        const data = await getFeaturedDinosaurs();
        setDinosaurs(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load featured dinosaurs.");
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorState message={error} />;
  }

  return (
    <section className="bg-neutral-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <SectionTitle
            title="Featured Dinosaurs"
            subtitle="Meet some of the most iconic prehistoric creatures."
          />
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {dinosaurs.map((dinosaur) => (
            <motion.div key={dinosaur.id} variants={card}>
              <DinosaurCard dinosaur={dinosaur} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default FeaturedDinosaurs;