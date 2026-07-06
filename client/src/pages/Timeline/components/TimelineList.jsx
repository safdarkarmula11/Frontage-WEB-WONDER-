import EraCard from "./EraCard";

function TimelineList({ eras }) {
  return (
    <div className="space-y-10">
      {eras.map((era) => (
        <EraCard
          key={era.id}
          era={era}
        />
      ))}
    </div>
  );
}

export default TimelineList;