import DinosaurCard from "./DinosaurCard";

function DinosaurGrid({ dinosaurs }) {
  return (
    <section className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-2 lg:grid-cols-3">
      {dinosaurs.map((dinosaur) => (
        <DinosaurCard
          key={dinosaur.id}
          dinosaur={dinosaur}
        />
      ))}
    </section>
  );
}

export default DinosaurGrid;