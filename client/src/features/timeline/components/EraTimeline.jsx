import { getAllEras } from "../../../services/eraService";
import EraCard from "./EraCard";

function EraTimeline() {
  const eras = getAllEras();

  return (
    <section className="relative mx-auto max-w-4xl px-6 py-20">
      <div className="absolute left-10 top-0 h-full w-1 bg-stone-700"></div>

      <div className="space-y-12">
        {eras.map((era) => (
          <div key={era.id} className="ml-16">
            <EraCard era={era} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default EraTimeline;