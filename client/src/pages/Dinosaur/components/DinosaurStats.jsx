function DinosaurStats() {
  return (
    <section className="bg-neutral-950 py-20">
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-4 px-6">
        <div className="rounded-xl bg-neutral-900 p-6">
          <h3 className="text-green-400">Length</h3>
          <p className="mt-2 text-3xl font-bold text-white">12 m</p>
        </div>

        <div className="rounded-xl bg-neutral-900 p-6">
          <h3 className="text-green-400">Weight</h3>
          <p className="mt-2 text-3xl font-bold text-white">9 t</p>
        </div>

        <div className="rounded-xl bg-neutral-900 p-6">
          <h3 className="text-green-400">Diet</h3>
          <p className="mt-2 text-3xl font-bold text-white">Carnivore</p>
        </div>

        <div className="rounded-xl bg-neutral-900 p-6">
          <h3 className="text-green-400">Speed</h3>
          <p className="mt-2 text-3xl font-bold text-white">27 km/h</p>
        </div>
      </div>
    </section>
  );
}

export default DinosaurStats;