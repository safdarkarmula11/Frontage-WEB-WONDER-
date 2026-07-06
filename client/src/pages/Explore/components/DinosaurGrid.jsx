import DinosaurCard from "../../../components/dinosaur/DinosaurCard/DinosaurCard";

function DinosaurGrid({ dinosaurs }) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {dinosaurs.map((dinosaur) => (
        <DinosaurCard
          key={dinosaur.id}
          dinosaur={dinosaur}
        />
      ))}
    </div>
  );
}

export default DinosaurGrid;