import { useEffect, useState } from "react";

import {
  getAllDinosaurs,
  getFeaturedDinosaurs,
} from "../../../services/dinosaurService";

import { getAllEras } from "../../../services/eraService";

function StatsCards() {
  const [stats, setStats] = useState({
    dinosaurs: 0,
    featured: 0,
    eras: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStats() {
      try {
        const [dinosaurs, featured, eras] = await Promise.all([
          getAllDinosaurs(),
          getFeaturedDinosaurs(),
          getAllEras(),
        ]);

        setStats({
          dinosaurs: dinosaurs.length,
          featured: featured.length,
          eras: eras.length,
        });
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadStats();
  }, []);

  const cards = [
    {
      title: "Total Dinosaurs",
      value: stats.dinosaurs,
    },
    {
      title: "Featured Dinosaurs",
      value: stats.featured,
    },
    {
      title: "Total Eras",
      value: stats.eras,
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {cards.map((card) => (
        <div
          key={card.title}
          className="rounded-xl border border-neutral-800 bg-neutral-900 p-6"
        >
          <p className="text-sm text-neutral-400">
            {card.title}
          </p>

          <h2 className="mt-4 text-4xl font-bold text-green-500">
            {loading ? "..." : card.value}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default StatsCards;