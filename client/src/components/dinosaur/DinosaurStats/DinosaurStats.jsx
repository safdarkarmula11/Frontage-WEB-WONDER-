function DinosaurStats({ dinosaur }) {
  const stats = [
    {
      label: "Diet",
      value: dinosaur.diet,
    },
    {
      label: "Height",
      value: dinosaur.height,
    },
    {
      label: "Length",
      value: dinosaur.length,
    },
    {
      label: "Weight",
      value: dinosaur.weight,
    },
    {
      label: "Speed",
      value: dinosaur.speed,
    },
    {
      label: "Habitat",
      value: dinosaur.habitat,
    },
  ];

  return (
    <section className="bg-neutral-950 py-16">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-lg border border-neutral-800 bg-neutral-900 p-6"
          >
            <h3 className="text-lg font-semibold text-green-500">
              {stat.label}
            </h3>

            <p className="mt-2 text-white">
              {stat.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DinosaurStats;