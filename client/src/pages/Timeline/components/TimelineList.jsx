import EraCard from "./EraCard";

function TimelineList({ eras }) {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute left-6 top-2 h-full w-px bg-gradient-to-b from-green-500 via-neutral-700 to-transparent md:left-8"
      />

      <div className="space-y-12">
        {eras.map((era, index) => (
          <EraCard
            key={era.id}
            era={era}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default TimelineList;