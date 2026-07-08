import { motion } from "framer-motion";

import DinosaurCard from "../../../components/dinosaur/DinosaurCard/DinosaurCard";

const grid = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06 },
  },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

function DinosaurGrid({ dinosaurs }) {
  return (
    <motion.div
      className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      variants={grid}
      initial="hidden"
      animate="show"
    >
      {dinosaurs.map((dinosaur) => (
        <motion.div key={dinosaur.id} variants={card}>
          <DinosaurCard dinosaur={dinosaur} />
        </motion.div>
      ))}
    </motion.div>
  );
}

export default DinosaurGrid;