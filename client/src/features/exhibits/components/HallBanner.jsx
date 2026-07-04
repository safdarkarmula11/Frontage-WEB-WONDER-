function HallBanner({ era }) {
  return (
    <section className="bg-stone-900 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <p className="uppercase tracking-[0.3em] text-emerald-400">
          Exhibit Hall
        </p>

        <h1 className="mt-4 text-6xl font-black">
          {era.name}
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-400">
          {era.description}
        </p>
      </div>
    </section>
  );
}

export default HallBanner;