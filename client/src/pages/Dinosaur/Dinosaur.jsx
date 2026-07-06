import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Loader from "../../components/common/Loader/Loader";
import ErrorState from "../../components/common/ErrorState/ErrorState";
import EmptyState from "../../components/common/EmptyState/EmptyState";

import DinosaurHero from "./components/DinosaurHero";
import DinosaurInfo from "./components/DinosaurInfo";

import DinosaurStats from "../../components/dinosaur/DinosaurStats/DinosaurStats";

import { getDinosaurById } from "../../services/dinosaurService";

function Dinosaur() {
  const { id } = useParams();

  const [dinosaur, setDinosaur] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadDinosaur() {
      try {
        const data = await getDinosaurById(id);
        setDinosaur(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load dinosaur.");
      } finally {
        setLoading(false);
      }
    }

    loadDinosaur();
  }, [id]);

  if (loading) return <Loader />;

  if (error) return <ErrorState message={error} />;

  if (!dinosaur) {
    return (
      <EmptyState
        title="Dinosaur Not Found"
        message="The requested dinosaur does not exist."
      />
    );
  }

  return (
    <>
      <DinosaurHero dinosaur={dinosaur} />

      <DinosaurStats dinosaur={dinosaur} />

      <DinosaurInfo dinosaur={dinosaur} />
    </>
  );
}

export default Dinosaur;