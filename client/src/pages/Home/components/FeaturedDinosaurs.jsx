import { useEffect, useState } from "react";

import Loader from "../../../components/common/Loader/Loader";
import ErrorState from "../../../components/common/ErrorState/ErrorState";
import SectionTitle from "../../../components/common/SectionTitle/SectionTitle";

import DinosaurCard from "../../../components/dinosaur/DinosaurCard/DinosaurCard";

import { getFeaturedDinosaurs } from "../../../services/dinosaurService";

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
        <SectionTitle
          title="Featured Dinosaurs"
          subtitle="Meet some of the most iconic prehistoric creatures."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {dinosaurs.map((dinosaur) => (
            <DinosaurCard
              key={dinosaur.id}
              dinosaur={dinosaur}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedDinosaurs;