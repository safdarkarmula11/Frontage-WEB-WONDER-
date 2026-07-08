import { motion } from "framer-motion";

import SectionTitle from "../../components/common/SectionTitle/SectionTitle";
import ModelCredits from "../../components/common/ModelCredits";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const grid = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const stackCategories = [
  {
    label: "Frontend",
    icon: "🖥️",
    items: [
      { name: "React 19", note: "Component-based UI library" },
      { name: "Vite", note: "Fast dev server & build tool" },
      { name: "React Router", note: "Client-side routing" },
      { name: "Tailwind CSS", note: "Utility-first styling" },
    ],
  },
  {
    label: "Animation & 3D",
    icon: "✨",
    items: [
      { name: "Framer Motion", note: "Page & scroll animations" },
      { name: "GSAP", note: "Advanced timeline animation" },
      { name: "React Three Fiber", note: "React renderer for Three.js" },
      { name: "Three.js / Drei", note: "3D dinosaur models & controls" },
    ],
  },
  {
    label: "Backend",
    icon: "⚙️",
    items: [
      { name: "Node.js", note: "JavaScript runtime" },
      { name: "Express 5", note: "REST API framework" },
      { name: "Prisma ORM", note: "Type-safe database access" },
      { name: "Zod", note: "Schema validation" },
    ],
  },
  {
    label: "Data & Auth",
    icon: "🔐",
    items: [
      { name: "MySQL", note: "Relational database" },
      { name: "JSON Web Tokens", note: "Stateless authentication" },
      { name: "bcryptjs", note: "Password hashing" },
      { name: "Multer", note: "Image upload handling" },
    ],
  },
];

const features = [
  { icon: "🦖", text: "Browse a full dinosaur database with rich detail pages" },
  { icon: "🕰️", text: "Explore the geological timeline, era by era" },
  { icon: "⭐", text: "Curated featured dinosaur collection on the homepage" },
  { icon: "🔍", text: "Search dinosaurs by name, era, or diet" },
  { icon: "🧊", text: "Interactive 3D models for select dinosaurs" },
  { icon: "🛠️", text: "Full admin dashboard for managing eras & dinosaurs" },
];

function About() {
  return (
    <main className="bg-black py-24">
      <div className="mx-auto max-w-5xl px-6">

        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
        >
          <SectionTitle
            title="About JurassicVerse"
            subtitle="An interactive digital museum for exploring the prehistoric world."
          />
        </motion.div>

        <div className="space-y-16 text-lg leading-8 text-neutral-300">

          <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <h2 className="mb-4 text-2xl font-bold text-white">
              Our Mission
            </h2>

            <p>
              JurassicVerse is a full-stack web application that lets users
              discover dinosaurs, explore geological eras, and learn about
              prehistoric life through an interactive digital museum. Built
              as a college project, it brings together a modern frontend,
              a robust backend, and real 3D visualization to make
              paleontology feel tangible.
            </p>
          </motion.section>

          <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <h2 className="mb-6 text-2xl font-bold text-white">
              Features
            </h2>

            <motion.div
              className="grid gap-4 sm:grid-cols-2"
              variants={grid}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {features.map((feature) => (
                <motion.div
                  key={feature.text}
                  variants={fadeUp}
                  className="flex items-start gap-3 rounded-lg border border-neutral-800 bg-neutral-900 p-4"
                >
                  <span className="text-2xl">{feature.icon}</span>
                  <p className="text-base text-neutral-300">
                    {feature.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUp}
          >
            <h2 className="mb-2 text-2xl font-bold text-white">
              Technology Stack
            </h2>

            <p className="mb-6 text-base text-neutral-400">
              Every technology actually powering this project, organized by
              role.
            </p>

            <motion.div
              className="grid gap-6 md:grid-cols-2"
              variants={grid}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
            >
              {stackCategories.map((category) => (
                <motion.div
                  key={category.label}
                  variants={fadeUp}
                  className="rounded-xl border border-neutral-800 bg-neutral-900 p-6 transition-colors hover:border-green-500/50"
                >
                  <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-green-500">
                    <span>{category.icon}</span>
                    {category.label}
                  </h3>

                  <ul className="space-y-2">
                    {category.items.map((item) => (
                      <li
                        key={item.name}
                        className="flex flex-col text-sm sm:flex-row sm:items-baseline sm:justify-between"
                      >
                        <span className="font-medium text-white">
                          {item.name}
                        </span>
                        <span className="text-neutral-500">
                          {item.note}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <h2 className="mb-3 text-xl font-bold text-white">
              3D Model Credits
            </h2>

            <ModelCredits />
          </motion.section>

        </div>

      </div>
    </main>
  );
}

export default About;