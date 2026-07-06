import { useEffect, useMemo, useState } from "react";

import Loader from "../../components/common/Loader/Loader";
import ErrorState from "../../components/common/ErrorState/ErrorState";
import EmptyState from "../../components/common/EmptyState/EmptyState";
import SectionTitle from "../../components/common/SectionTitle/SectionTitle";

import SearchBar from "./components/SearchBar";
import DinosaurGrid from "./components/DinosaurGrid";

import { getAllDinosaurs } from "../../services/dinosaurService";

function Explore() {
  const [dinosaurs, setDinosaurs] = useState([]);
  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadDinosaurs() {
      try {
        const data = await getAllDinosaurs();
        setDinosaurs(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load dinosaurs.");
      } finally {
        setLoading(false);
      }
    }

    loadDinosaurs();
  }, []);

  const filteredDinosaurs = useMemo(() => {
    const value = search.toLowerCase();

    return dinosaurs.filter((dinosaur) => {
      return (
        dinosaur.name.toLowerCase().includes(value) ||
        dinosaur.scientificName.toLowerCase().includes(value) ||
        dinosaur.diet.toLowerCase().includes(value) ||
        dinosaur.era?.name.toLowerCase().includes(value)
      );
    });
  }, [dinosaurs, search]);

  if (loading) return <Loader />;

  if (error) return <ErrorState message={error} />;

  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          title="Explore Dinosaurs"
          subtitle="Search dinosaurs by name, scientific name, diet or era."
        />

        <SearchBar
          value={search}
          onChange={setSearch}
        />

        {filteredDinosaurs.length === 0 ? (
          <EmptyState
            title="No Dinosaurs Found"
            message="Try another search keyword."
          />
        ) : (
          <DinosaurGrid dinosaurs={filteredDinosaurs} />
        )}

      </div>
    </section>
  );
}

export default Explore;