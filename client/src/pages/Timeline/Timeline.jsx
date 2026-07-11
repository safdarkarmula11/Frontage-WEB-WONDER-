import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Loader from "../../components/common/Loader/Loader";
import ErrorState from "../../components/common/ErrorState/ErrorState";
import SectionTitle from "../../components/common/SectionTitle/SectionTitle";

import TimelineList from "./components/TimelineList";

import { getAllEras } from "../../services/eraService";

function Timeline() {
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
        setError("Failed to load timeline.");
      } finally {
        setLoading(false);
      }
    }

    loadEras();
  }, []);

  if (loading) return <Loader />;

  if (error) return <ErrorState message={error} />;

  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="230 Million Years"
          title="Geological Timeline"
          subtitle="Explore the major eras of the dinosaurs."
        />

        <div className="mb-14 text-center">
          <Link
            to="/museum-tour"
            className="inline-block rounded-lg border border-green-600 px-6 py-3 font-semibold text-green-500 transition hover:bg-green-600 hover:text-white"
          >
            🏛️ Take the Full Walkthrough Tour
          </Link>
        </div>

        <TimelineList eras={eras} />
      </div>
    </section>
  );
}

export default Timeline;