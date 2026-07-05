function EraCard({ era }) {
  return (
    <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-6 transition duration-300 hover:-translate-y-2 hover:border-green-500">
      <h3 className="mb-3 text-3xl font-bold text-white">
        {era.name}
      </h3>

      <p className="mb-2 text-green-400">
        {era.years}
      </p>

      <p className="mb-2 text-gray-300">
        <strong>Climate:</strong> {era.climate}
      </p>

      <p className="text-gray-300">
        <strong>Dominant Life:</strong> {era.life}
      </p>
    </div>
  );
}

export default EraCard;