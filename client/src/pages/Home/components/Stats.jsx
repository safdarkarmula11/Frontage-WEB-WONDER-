import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { getAllDinosaurs } from "../../../services/dinosaurService";
import { getAllEras } from "../../../services/eraService";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function Stats() {
  const [stats, setStats] = useState({ dinosaurs: 0, eras: 0, carnivores: 0 });

  useEffect(() => {
    async function loadStats() {
      try {
        const [dinosaurs, eras] = await Promise.all([
          getAllDinosaurs(),
          getAllEras(),
        ]);

        const carnivores = dinosaurs.filter((d) =>
          d.diet?.toLowerCase().includes("carnivore")
        ).length;

        setStats({
          dinosaurs: dinosaurs.length,
          eras: eras.length,
          carnivores,
        });
      } catch (error) {
        console.error(error);
      }
    }

    loadStats();
  }, []);

  const cards = [
    { label: "Dinosaurs Catalogued", value: stats.dinosaurs, icon: "🦖" },
    { label: "Geological Eras", value: stats.eras, icon: "🕰️" },
    { label: "Carnivorous Species", value: stats.carnivores, icon: "🦴" },
    { label: "Years of History", value: "230M+", icon: "🌍" },
  ];

  return (
    <section className="border-y border-neutral-900 bg-neutral-950/60 py-14">
      <motion.div
        className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 lg:grid-cols-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        {cards.map((card) => (
          <motion.div
            key={card.label}
            variants={item}
            className="text-center"
          >
            <div className="text-3xl">{card.icon}</div>

            <p className="font-display mt-2 text-4xl text-green-500 lg:text-5xl">
              {card.value}
            </p>

            <p className="mt-1 text-sm text-neutral-400">
              {card.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Stats;