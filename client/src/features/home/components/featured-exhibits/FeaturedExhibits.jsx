import dinosaurs from "../../../exhibits/data/dinosaurs";
import ExhibitCard from "../../../../components/common/ExhibitCard";

function FeaturedExhibits() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="mb-10 text-4xl font-bold">
        Featured Exhibits
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {dinosaurs.map((dinosaur) => (
          <ExhibitCard
            key={dinosaur.id}
            dinosaur={dinosaur}
          />
        ))}
      </div>
    </section>
  );
}

export default FeaturedExhibits;