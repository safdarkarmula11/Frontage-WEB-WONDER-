function TimelineHeader() {
  return (
    <section className="border-b border-stone-800 bg-stone-900 py-20">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
          Geological Timeline
        </p>

        <h1 className="text-5xl font-black text-white md:text-6xl">
          Journey Through Time
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
          Explore the three major eras of the dinosaurs. Learn how life evolved
          across millions of years and discover the incredible creatures that
          ruled each period.
        </p>
      </div>
    </section>
  );
}

export default TimelineHeader;