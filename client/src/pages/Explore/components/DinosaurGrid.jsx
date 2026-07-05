import DinosaurCard from "../../../components/DinosaurCard/DinosaurCard";
import { getFeaturedDinosaurs } from "../../../services/dinosaurService";

function DinosaurGrid({ search, era, diet }) {
  const dinosaurs = getFeaturedDinosaurs();

  const filtered = dinosaurs.filter((dinosaur) => {
    const matchesSearch = dinosaur.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesEra =
      era === "All" || dinosaur.era.includes(era);

    const matchesDiet =
      diet === "All" || dinosaur.diet === diet;

    return matchesSearch && matchesEra && matchesDiet;
  });

  return (
    <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
      {filtered.map((dinosaur) => (
        <DinosaurCard
          key={dinosaur.id}
          dinosaur={dinosaur}
        />
      ))}
    </div>
  );
}

export default DinosaurGrid;